"""Parse event data from decompiled C# files and localization JSON."""
import json
import re
from pathlib import Path
from description_resolver import resolve_description, extract_vars_from_source

BASE = Path(__file__).resolve().parents[3]
DECOMPILED = BASE / "extraction" / "decompiled"
LOCALIZATION = BASE / "extraction" / "raw" / "localization" / "eng"
EVENTS_DIR = DECOMPILED / "MegaCrit.Sts2.Core.Models.Events"
ACTS_DIR = DECOMPILED / "MegaCrit.Sts2.Core.Models.Acts"
IMAGES_DIR = BASE / "backend" / "static" / "images" / "misc" / "ancients"
OUTPUT = BASE / "data"


def class_name_to_id(name: str) -> str:
    s = re.sub(r'(?<=[a-z0-9])(?=[A-Z])', '_', name)
    s = re.sub(r'(?<=[A-Z])(?=[A-Z][a-z])', '_', s)
    return s.upper()


def load_localization() -> dict:
    loc = {}
    for filename in ("events.json", "ancients.json"):
        loc_file = LOCALIZATION / filename
        if loc_file.exists():
            with open(loc_file, "r", encoding="utf-8") as f:
                loc.update(json.load(f))
    return loc


def strip_rich_tags(text: str) -> str:
    """Strip non-renderable rich text tags, preserving colors and effects for frontend."""
    # Strip tags with attributes like [rainbow freq=0.3 sat=0.8 val=1]
    text = re.sub(r'\[rainbow[^\]]*\]', '', text)
    text = re.sub(r'\[font_size=\d+\]', '', text)
    # Strip only non-renderable tags — keep colors (gold, blue, red, green, purple, orange, pink, aqua)
    # and effects (sine, jitter, b) for frontend rendering
    text = re.sub(r'\[/?(?:thinky_dots|i|font_size)\]', '', text)
    return text


def build_act_mapping() -> dict[str, str]:
    """Map event class names to act names."""
    event_to_act = {}
    act_map = {
        "Overgrowth.cs": "Act 1 - Overgrowth",
        "Hive.cs": "Act 2 - Hive",
        "Glory.cs": "Act 3 - Glory",
        "Underdocks.cs": "Underdocks",
    }
    for filename, act_name in act_map.items():
        filepath = ACTS_DIR / filename
        if not filepath.exists():
            continue
        content = filepath.read_text(encoding="utf-8")
        # Regular events
        for m in re.finditer(r'ModelDb\.Event<(\w+)>\(\)', content):
            event_to_act[m.group(1)] = act_name
        # Ancient events
        for m in re.finditer(r'ModelDb\.AncientEvent<(\w+)>\(\)', content):
            event_to_act[m.group(1)] = act_name
    return event_to_act


def load_all_titles() -> dict[str, str]:
    """Load title mappings from all localization files for resolving StringVar model references."""
    titles = {}
    loc_files = ["cards.json", "relics.json", "potions.json", "enchantments.json", "powers.json"]
    for filename in loc_files:
        loc_file = LOCALIZATION / filename
        if not loc_file.exists():
            continue
        with open(loc_file, "r", encoding="utf-8") as f:
            data = json.load(f)
        for key, value in data.items():
            if key.endswith(".title"):
                entity_id = key[:-6]  # Strip ".title"
                titles[entity_id] = value
    return titles


_title_cache: dict[str, str] | None = None


def get_title_map() -> dict[str, str]:
    global _title_cache
    if _title_cache is None:
        _title_cache = load_all_titles()
    return _title_cache


def extract_event_vars(content: str) -> dict[str, int | str]:
    """Extract constant values, DynamicVar, and StringVar declarations from event source."""
    vars_dict: dict[str, int | str] = {}

    # const int fields: private const int _uncoverFutureCost = 50;
    for m in re.finditer(r'const\s+int\s+_?(\w+)\s*=\s*(\d+)', content):
        vars_dict[m.group(1)] = int(m.group(2))

    # DynamicVar declarations: new DynamicVar("Name", 50m)
    for m in re.finditer(r'new\s+DynamicVar\("(\w+)",\s*(\d+)m?\)', content):
        vars_dict[m.group(1)] = int(m.group(2))

    # StringVar with model references:
    # new StringVar("Name", ModelDb.Card<ClassName>().Title)
    # new StringVar("Name", ModelDb.Enchantment<ClassName>().Title.GetFormattedText())
    # new StringVar("Name", ModelDb.Relic<ClassName>().Title.GetFormattedText())
    # new StringVar("Name", ModelDb.Potion<ClassName>().Title.GetFormattedText())
    title_map = get_title_map()
    for m in re.finditer(
        r'new\s+StringVar\("(\w+)",\s*ModelDb\.(?:Card|Enchantment|Relic|Potion)<([^>]+)>\(\)\.Title(?:\.GetFormattedText\(\))?\)',
        content
    ):
        var_name = m.group(1)
        class_name = m.group(2)
        # Strip namespace prefix if present (e.g. MegaCrit.Sts2...LostWisp -> LostWisp)
        if "." in class_name:
            class_name = class_name.rsplit(".", 1)[1]
        entity_id = class_name_to_id(class_name)
        title = title_map.get(entity_id, class_name)
        vars_dict[var_name] = title

    # StringVar with literal string: new StringVar("Name", "Value")
    for m in re.finditer(r'new\s+StringVar\("(\w+)",\s*"([^"]+)"\)', content):
        vars_dict[m.group(1)] = m.group(2)

    # Also get vars from standard extraction
    vars_dict.update(extract_vars_from_source(content))

    return vars_dict


def parse_options_from_localization(event_id: str, localization: dict, vars_dict: dict) -> list[dict]:
    """Extract event options (choices) from localization keys for INITIAL page."""
    return parse_page_options(event_id, "INITIAL", localization, vars_dict)


def parse_page_options(event_id: str, page_name: str, localization: dict, vars_dict: dict) -> list[dict]:
    """Extract options for a specific page."""
    options = []
    prefix = f"{event_id}.pages.{page_name}.options."
    option_keys = set()
    for key in localization:
        if key.startswith(prefix):
            rest = key[len(prefix):]
            option_name = rest.split(".")[0]
            option_keys.add(option_name)

    for opt_name in sorted(option_keys):
        title_raw = localization.get(f"{prefix}{opt_name}.title", opt_name)
        title = strip_rich_tags(resolve_description(title_raw, vars_dict))
        desc_raw = localization.get(f"{prefix}{opt_name}.description", "")
        desc_resolved = resolve_description(desc_raw, vars_dict) if desc_raw else ""
        desc_clean = strip_rich_tags(desc_resolved)
        options.append({
            "id": opt_name,
            "title": title,
            "description": desc_clean,
        })

    return options


def parse_all_pages(event_id: str, localization: dict, vars_dict: dict) -> list[dict] | None:
    """Extract all pages for an event, building the full decision tree."""
    # Discover all page names
    page_prefix = f"{event_id}.pages."
    page_names = set()
    for key in localization:
        if key.startswith(page_prefix):
            rest = key[len(page_prefix):]
            page_name = rest.split(".")[0]
            page_names.add(page_name)

    if len(page_names) <= 1:
        return None  # Only INITIAL page, no multi-page flow

    pages = []
    for page_name in sorted(page_names):
        desc_raw = localization.get(f"{page_prefix}{page_name}.description", "")
        desc_resolved = resolve_description(desc_raw, vars_dict) if desc_raw else ""
        desc_clean = strip_rich_tags(desc_resolved)

        options = parse_page_options(event_id, page_name, localization, vars_dict)

        page = {
            "id": page_name,
            "description": desc_clean if desc_clean else None,
        }
        if options:
            page["options"] = options

        pages.append(page)

    return pages if len(pages) > 1 else None


def is_ancient_event(content: str) -> bool:
    """Check if the event extends AncientEventModel."""
    return "AncientEventModel" in content


CHARACTERS = ["IRONCLAD", "SILENT", "DEFECT", "NECROBINDER", "REGENT"]


def parse_ancient_dialogue(event_id: str, localization: dict) -> dict[str, list[dict]]:
    """Extract dialogue lines for an Ancient event, grouped by character."""
    dialogue: dict[str, list[dict]] = {}

    # Collect all talk keys for this event
    prefix = f"{event_id}.talk."
    for key, value in localization.items():
        if not key.startswith(prefix):
            continue
        rest = key[len(prefix):]
        # Pattern: CHARACTER.VISIT-LINE.type (e.g. IRONCLAD.0-0.ancient, IRONCLAD.0-1.char)
        parts = rest.split(".")
        if len(parts) < 3:
            continue
        speaker_group = parts[0]  # Character name, "ANY", or "firstVisitEver"
        visit_line = parts[1]     # e.g. "0-0", "0-0r", "1-0r"
        line_type = parts[2]      # "ancient", "char", "next"

        if line_type == "next":
            continue  # Skip button labels

        # Map speaker groups to display names
        if speaker_group == "firstVisitEver":
            group_key = "First Visit"
        elif speaker_group == "ANY":
            group_key = "Returning"
        else:
            group_key = speaker_group.replace("_", " ").title()

        if group_key not in dialogue:
            dialogue[group_key] = []

        cleaned = strip_rich_tags(value)
        speaker = "ancient" if line_type == "ancient" else "character"
        dialogue[group_key].append({
            "order": visit_line,
            "speaker": speaker,
            "text": cleaned,
        })

    # Sort each group's lines by order
    for group in dialogue:
        dialogue[group].sort(key=lambda x: x["order"])

    return dialogue


def extract_ancient_relics(content: str) -> list[str]:
    """Extract relic class names offered by an Ancient from C# source."""
    relic_ids = []
    seen = set()
    # Pattern: RelicOption<ClassName>() or ModelDb.Relic<ClassName>()
    for m in re.finditer(r'(?:RelicOption|ModelDb\.Relic)<(\w+)>', content):
        name = m.group(1)
        relic_id = class_name_to_id(name)
        if relic_id not in seen:
            seen.add(relic_id)
            relic_ids.append(relic_id)
    return relic_ids


def parse_single_event(filepath: Path, localization: dict, act_mapping: dict) -> dict | None:
    content = filepath.read_text(encoding="utf-8")
    class_name = filepath.stem

    if class_name.startswith("Deprecated"):
        return None

    event_id = class_name_to_id(class_name)

    # Check if this is an ancient event
    is_ancient = is_ancient_event(content)

    # Localization
    title = localization.get(f"{event_id}.title", class_name)

    # Description (initial page)
    desc_raw = localization.get(f"{event_id}.pages.INITIAL.description", "")
    vars_dict = extract_event_vars(content)
    desc_resolved = resolve_description(desc_raw, vars_dict) if desc_raw else ""
    desc_clean = strip_rich_tags(desc_resolved)

    # Options (choices)
    options = parse_options_from_localization(event_id, localization, vars_dict)

    # Act mapping
    act = act_mapping.get(class_name)

    # Type
    event_type = "Ancient" if is_ancient else "Event"

    # For shared events that appear in multiple acts
    if not act and not is_ancient:
        # Check if it's referenced across multiple acts via encounter system
        event_type = "Shared"

    # Parse all pages (multi-page events)
    pages = parse_all_pages(event_id, localization, vars_dict)

    result = {
        "id": event_id,
        "name": title,
        "type": event_type,
        "act": act,
        "description": desc_clean if desc_clean else None,
        "options": options if options else None,
        "pages": pages,
    }

    # Enrich Ancient events with epithet, dialogue, image, and relics
    if is_ancient:
        epithet = localization.get(f"{event_id}.epithet", "")
        if epithet:
            result["epithet"] = epithet
        dialogue = parse_ancient_dialogue(event_id, localization)
        if dialogue:
            result["dialogue"] = dialogue

        # Image URL
        img_name = event_id.lower()
        image_file = IMAGES_DIR / f"{img_name}.png"
        if image_file.exists():
            result["image_url"] = f"/static/images/misc/ancients/{img_name}.png"

        # Relic offerings
        relics = extract_ancient_relics(content)
        if relics:
            result["relics"] = relics

        # Use first-visit dialogue as description if none exists
        if not result["description"]:
            first_visit = localization.get(f"{event_id}.talk.firstVisitEver.0-0.ancient", "")
            if first_visit:
                result["description"] = strip_rich_tags(first_visit)

    return result


def parse_all_events() -> list[dict]:
    localization = load_localization()
    act_mapping = build_act_mapping()
    events = []
    for filepath in sorted(EVENTS_DIR.glob("*.cs")):
        event = parse_single_event(filepath, localization, act_mapping)
        if event:
            events.append(event)
    return events


def main():
    OUTPUT.mkdir(exist_ok=True)
    events = parse_all_events()
    with open(OUTPUT / "events.json", "w", encoding="utf-8") as f:
        json.dump(events, f, indent=2, ensure_ascii=False)
    print(f"Parsed {len(events)} events -> data/events.json")


if __name__ == "__main__":
    main()
