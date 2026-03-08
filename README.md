# Spire Codex

A comprehensive database and API for **Slay the Spire 2** game data, built by reverse-engineering the game files.

**Live site**: [spire-codex.com](https://spire-codex.com)

**Data**: 576 cards · 5 characters · 289 relics · 121 monsters · 63 potions · 22 enchantments · 87 encounters · 66 events — all extracted directly from the game.

## How It Was Built

Slay the Spire 2 is built with Godot 4 but all game logic lives in a C#/.NET 8 DLL (`sts2.dll`), not GDScript. The data pipeline:

1. **PCK Extraction** — [GDRE Tools](https://github.com/bruvzg/gdsdecomp) extracts the Godot `.pck` file to recover images, Spine animations, and localization data (~9,947 files).

2. **DLL Decompilation** — [ILSpy](https://github.com/icsharpcode/ILSpy) decompiles `sts2.dll` into ~3,300 readable C# source files containing all game models.

3. **Data Parsing** — Python regex-based parsers extract structured data from the decompiled C# source:
   - **Cards**: `base(cost, CardType, CardRarity, TargetType)` constructors + `DamageVar`, `BlockVar`, `PowerVar<T>` for stats
   - **Characters**: `StartingHp`, `StartingGold`, `MaxEnergy`, `StartingDeck`, `StartingRelics`
   - **Relics/Potions**: Rarity, pool, descriptions resolved from SmartFormat templates
   - **Monsters**: HP ranges, ascension scaling via `AscensionHelper`, move state machines, damage values
   - **Enchantments**: Card type restrictions, stackability, Amount-based scaling
   - **Encounters**: Monster compositions, room type (Boss/Elite/Monster), act placement, tags
   - **Events**: Multi-page descriptions, choices with outcomes, act placement

4. **Description Resolution** — A shared `description_resolver.py` module resolves SmartFormat localization templates (`{Damage:diff()}`, `{Energy:energyIcons()}`, `{Cards:plural:card|cards}`) into human-readable text with `[gold]`, `[energy:N]`, `[star:N]` markers for frontend rendering.

5. **Monster Sprite Rendering** — Monster sprites are Spine skeletal animations, not static images. A headless Node.js renderer assembles the idle poses into 512×512 portrait PNGs (see [Spine Renderer](#spine-renderer) below).

6. **Images** — Card portraits, relic/potion icons, and character art extracted from game assets and served as static files.

## Project Structure

```
spire-codex/
├── backend/                    # FastAPI backend
│   ├── app/
│   │   ├── main.py             # App entry, CORS, rate limiting, static files
│   │   ├── routers/            # API endpoints
│   │   ├── models/schemas.py   # Pydantic models
│   │   ├── services/           # JSON data loading
│   │   └── parsers/            # C# source → JSON parsers
│   │       ├── card_parser.py
│   │       ├── character_parser.py
│   │       ├── monster_parser.py
│   │       ├── relic_parser.py
│   │       ├── potion_parser.py
│   │       ├── enchantment_parser.py
│   │       ├── encounter_parser.py
│   │       ├── event_parser.py
│   │       ├── description_resolver.py   # Shared SmartFormat resolver
│   │       └── parse_all.py
│   ├── static/images/          # Game images (not committed)
│   ├── scripts/copy_images.py  # Copies images from extraction → static
│   ├── Dockerfile
│   └── requirements.txt
├── frontend/                   # Next.js 16 + TypeScript + Tailwind CSS
│   ├── app/                    # Pages: cards, characters, relics, monsters,
│   │   │                       #   potions, enchantments, encounters, events, about
│   │   └── components/         # CardGrid, RichDescription, SearchFilter, Navbar, Footer
│   ├── lib/api.ts              # API client + TypeScript interfaces
│   └── Dockerfile
├── tools/
│   └── spine-renderer/         # Headless monster sprite renderer
│       ├── render.mjs
│       └── package.json
├── data/                       # Parsed JSON data files
├── extraction/                 # Raw game files (not committed)
│   ├── raw/                    # GDRE extracted Godot project
│   └── decompiled/             # ILSpy output
├── docker-compose.yml          # Local dev
├── docker-compose.prod.yml     # Production
└── .forgejo/workflows/
    └── build.yml               # CI: builds + pushes to Docker Hub
```

## API Endpoints

| Endpoint | Description | Filters |
|---|---|---|
| `GET /api/cards` | All cards | `color`, `type`, `rarity`, `search` |
| `GET /api/cards/{id}` | Single card | — |
| `GET /api/characters` | All characters | — |
| `GET /api/characters/{id}` | Single character | — |
| `GET /api/relics` | All relics | `rarity`, `pool`, `search` |
| `GET /api/relics/{id}` | Single relic | — |
| `GET /api/monsters` | All monsters | `type`, `search` |
| `GET /api/monsters/{id}` | Single monster | — |
| `GET /api/potions` | All potions | `rarity`, `search` |
| `GET /api/potions/{id}` | Single potion | — |
| `GET /api/enchantments` | All enchantments | `card_type`, `search` |
| `GET /api/enchantments/{id}` | Single enchantment | — |
| `GET /api/encounters` | All encounters | `room_type`, `act`, `search` |
| `GET /api/encounters/{id}` | Single encounter | — |
| `GET /api/events` | All events | `type`, `act`, `search` |
| `GET /api/events/{id}` | Single event | — |
| `GET /api/stats` | Entity counts | — |

Rate limited to **60 requests per minute** per IP. Interactive docs at `/docs` (Swagger UI).

## Running Locally

### Prerequisites

- Python 3.10+
- Node.js 22+

### Backend

```bash
python -m venv venv
source venv/bin/activate
pip install -r backend/requirements.txt

cd backend
uvicorn app.main:app --host 0.0.0.0 --port 8000
```

Backend runs at **http://localhost:8000**.

### Frontend

```bash
cd frontend
npm install
NEXT_PUBLIC_API_URL=http://localhost:8000 npm run dev
```

Frontend runs at **http://localhost:3000**.

### Docker

```bash
docker compose up --build
```

Starts both services (backend on 8000, frontend on 3000).

## Re-parsing Game Data

If you have the extracted game files in `extraction/`, regenerate the JSON data:

```bash
source venv/bin/activate
cd backend/app/parsers

# Run all parsers
python3 parse_all.py

# Or individually
python3 card_parser.py
python3 character_parser.py
python3 relic_parser.py
python3 monster_parser.py
python3 potion_parser.py
python3 enchantment_parser.py
python3 encounter_parser.py
python3 event_parser.py
```

To copy game images into the static directory:

```bash
python3 backend/scripts/copy_images.py
```

## Spine Renderer

Monster sprites in StS2 are [Spine](http://esotericsoftware.com/) skeletal animations — each monster is a `.skel` (binary skeleton) + `.atlas` + `.png` spritesheet, not a single image. The renderer assembles these into static portrait PNGs.

### How it works

1. Loads the `.skel`, `.atlas`, and `.png` for each monster from `extraction/raw/animations/monsters/`
2. Applies the idle animation at time 0 using `@esotericsoftware/spine-canvas` (v4.2.106, matching the game's Spine 4.2.x binary format)
3. Calculates a bounding box from all visible attachments, **excluding shadow/ground slots** for tighter framing
4. Renders at **2× supersampling** (1024px) to reduce canvas triangle-mesh seam artifacts, then downscales to 512×512
5. Outputs PNGs to `backend/static/images/monsters/`

### Usage

```bash
cd tools/spine-renderer
npm install

# Render all monsters
node render.mjs

# Render a specific monster
node render.mjs FrogKnight
```

### Technical details

- Uses `node-canvas` for server-side Canvas API (no browser/GPU needed)
- **Triangle rendering** enabled (`triangleRendering = true`) — required for mesh attachments (most monster body parts). Without it, only RegionAttachments render.
- `Physics.reset` parameter required by spine-canvas 4.2.x `updateWorldTransform()`
- Shadow slots (`shadow`, `shadow2`, `ground`, `ground_shadow`) excluded from bounds calculation to prevent stretched framing
- Currently renders ~82 of 100 monsters. Some fail due to missing assets or unsupported features.

### Dependencies

- `@esotericsoftware/spine-canvas` ^4.2.106 — Spine runtime for Canvas
- `canvas` ^3.1.0 — Node.js Canvas implementation

## Extracting Game Files

If you need to extract from scratch:

```bash
# Extract PCK (GDRE Tools)
/path/to/gdre_tools --headless --recover="/path/to/sts2.pck" --output-dir=extraction/raw

# Decompile DLL (ILSpy CLI)
ilspycmd -p -o extraction/decompiled "/path/to/sts2.dll"
```

## Roadmap

- **Automated extraction pipeline** — End-to-end script from game install to parsed JSON
- **Powers/buffs/debuffs** — 262 power models in the decompiled code, not yet parsed
- **More images** — Card art, enchantment icons, encounter scenes from extracted assets
- **Individual detail pages** — Click-through pages with full details instead of just grids
- **Global search** — Search across all entity types simultaneously
- **Database backend** — Replace JSON loading with SQLite/PostgreSQL

## Tech Stack

- **Backend**: Python, FastAPI, Pydantic, slowapi
- **Frontend**: Next.js 16 (App Router), TypeScript, Tailwind CSS
- **Spine Renderer**: Node.js, @esotericsoftware/spine-canvas, node-canvas
- **Infrastructure**: Docker, Forgejo CI, buildah

## Disclaimer

This project is for educational purposes. Game data belongs to Mega Crit Games. This should not be used to recompile or redistribute the game.
