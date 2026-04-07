# Spire Codex Changelog
**/Users/peterlord/Documents/Projects/spire-codex/data/eng** → **/Users/peterlord/Documents/Projects/spire-codex/data-beta/eng**

## Cards

### Changed (96)
- **Alignment**: `star_cost`: 2 → 3; `vars`: 2 fields → 2 fields
- **Anticipate**: `description`: Gain 3 [gold]Dexterity[/gold] this turn. → Gain 2 [gold]Dexterity[/gold] this turn.; `powers_applied`: {'power': 'Dexterity', 'amount': 3, 'power_key': 'Dexterity'} → {'power': 'Dexterity', 'amount': 2, 'power_key': 'Dexterity'}; `vars`: 2 fields → 2 fields; `upgrade`: 1 fields → 1 fields
- **Apotheosis**: `compendium_order`: 522 → 521
- **Apparition**: `compendium_order`: 523 → 522
- **Arsenal**: `upgrade_description`: Whenever you play a Colorless card, gain 2 [gold]Strength[/gold]. → none; `description`: Whenever you play a Colorless card, gain 1 [gold]Strength[/gold]. → Whenever you create a card, gain 1 [gold]Strength[/gold].; `description_raw`: Whenever you play a Colorless card, gain {ArsenalPower:diff()} [gold]Strength... → Whenever you create a card, gain {ArsenalPower:diff()} [gold]Strength[/gold].; `upgrade`: 1 fields → 1 fields
- **Banshee's Cry**: `upgrade_description`: Deal 39 damage to ALL enemies.
Costs [energy:2] less for each [gold]Ethereal[... → none; `cost`: 6 → 9; `upgrade`: 1 fields → 1 fields
- **BEGONE!**: `type_key`: Attack → Skill; `upgrade_description`: Deal 5 damage.
Choose a card in your [gold]Hand[/gold] to [gold]Transform[/go... → Choose a card in your [gold]Hand[/gold] to [gold]Transform[/gold] into [gold]...; `description`: Deal 4 damage.
Choose a card in your [gold]Hand[/gold] to [gold]Transform[/go... → Choose a card in your [gold]Hand[/gold] to [gold]Transform[/gold] into [gold]...; `description_raw`: Deal {Damage:diff()} damage.
Choose a card in your [gold]Hand[/gold] to [gold... → Choose a card in your [gold]Hand[/gold] to [gold]Transform[/gold] into [gold]...; `target`: AnyEnemy → Self; `type`: Attack → Skill; `damage`: 4 → none; `vars`: 1 fields → none; `spawns_cards`: MINION_DIVE_BOMB → MINION_STRIKE; `upgrade`: 1 fields → 1 fields
- **Believe in You**: `energy_gain`: 3 → 2; `upgrade_description`: Another player gains [energy:4]. → Another player gains [energy:3].; `description`: Another player gains [energy:3]. → Another player gains [energy:2].; `vars`: 1 fields → 1 fields
- **Blade of Ink**: `upgrade_description`: none → Add 3 [purple]Inky[/purple] [gold]Shivs[/gold] into your [gold]Hand[/gold].; `description`: This turn, whenever you play an Attack, gain 2 [gold]Strength[/gold] this turn. → Add 2 [purple]Inky[/purple] [gold]Shivs[/gold] into your [gold]Hand[/gold].; `description_raw`: This turn, whenever you play an Attack, gain {StrengthPower:diff()} [gold]Str... → Add {Cards:diff()} [purple]Inky[/purple] [gold]{Cards:plural:Shiv|Shivs}[/gol...; `powers_applied`: {'power': 'Strength', 'amount': 2, 'power_key': 'Strength'} → none; `cards_draw`: none → 2; `vars`: 2 fields → 1 fields; `spawns_cards`: none → SHIV; `upgrade`: 1 fields → 1 fields
- **Bombardment**: `upgrade_description`: Deal 24 damage.
At the start of your turn, plays from the [gold]Exhaust Pile[... → Deal 24 damage.
At the start of your turn, if this is in your [gold]Exhaust P...; `description`: Deal 18 damage.
At the start of your turn, plays from the [gold]Exhaust Pile[... → Deal 18 damage.
At the start of your turn, if this is in your [gold]Exhaust P...; `description_raw`: Deal {Damage:diff()} damage.
At the start of your turn, plays from the [gold]... → Deal {Damage:diff()} damage.
At the start of your turn, if this is in your [g...
- **Borrowed Time**: `energy_gain`: 1 → 4; `upgrade_description`: Apply 3 [gold]Doom[/gold] to yourself.
Gain [energy:2]. → Gain [energy:6].
Cards cost an additional [energy:1] this turn.; `description`: Apply 3 [gold]Doom[/gold] to yourself.
Gain [energy:1]. → Gain [energy:4].
Cards cost an additional [energy:1] this turn.; `description_raw`: Apply {DoomPower:diff()} [gold]Doom[/gold] to yourself.
Gain {Energy:energyIc... → Gain {Energy:energyIcons()}.
Cards cost an additional {ExtraCost:energyIcons(...; `cost`: 0 → 1; `powers_applied`: {'power': 'Doom', 'amount': 3, 'power_key': 'Doom'} → none; `vars`: 3 fields → 2 fields; `upgrade`: 1 fields → 1 fields
- **Break**: `upgrade_description`: Deal 25 damage.
Apply 5 [gold]Vulnerable[/gold]. → Deal 30 damage.
Apply 5 [gold]Vulnerable[/gold].; `cost`: 2 → 1; `upgrade`: 2 fields → 2 fields
- **Brightest Flame**: `compendium_order`: 524 → 523
- **Bundle of Joy**: `cost`: 2 → 1
- **Byrd Swoop**: `compendium_order`: 530 → 529
- **Caltrops**: `compendium_order`: 531 → 530
- **Celestial Might**: `upgrade_description`: Deal 8 damage 3 times. → Deal 6 damage 4 times.; `upgrade`: 1 fields → 1 fields
- **CHARGE!!**: `upgrade_description`: Choose 2 cards in your [gold]Draw Pile[/gold] to [gold]Transform[/gold] into
... → Choose 2 cards in your [gold]Draw Pile[/gold] to [gold]Transform[/gold] into
...; `description`: Choose 2 cards in your [gold]Draw Pile[/gold] to [gold]Transform[/gold] into
... → Choose 2 cards in your [gold]Draw Pile[/gold] to [gold]Transform[/gold] into
...; `description_raw`: Choose {Cards:diff()} {Cards:plural:card|cards} in your [gold]Draw Pile[/gold... → Choose {Cards:diff()} {Cards:plural:card|cards} in your [gold]Draw Pile[/gold...; `spawns_cards`: MINION_STRIKE → MINION_DIVE_BOMB
- **Cinder**: `upgrade_description`: Deal 22 damage.
[gold]Exhaust[/gold] the top card of your [gold]Draw Pile[/go... → Deal 24 damage.
[gold]Exhaust[/gold] 1 card at random.; `description`: Deal 17 damage.
[gold]Exhaust[/gold] the top card of your [gold]Draw Pile[/go... → Deal 18 damage.
[gold]Exhaust[/gold] 1 card at random.; `description_raw`: Deal {Damage:diff()} damage.
[gold]Exhaust[/gold] the top card of your [gold]... → Deal {Damage:diff()} damage.
[gold]Exhaust[/gold] 1 card at random.; `damage`: 17 → 18; `vars`: 2 fields → 1 fields; `upgrade`: 1 fields → 1 fields
- **Clash**: `compendium_order`: 532 → 531
- **Collision Course**: `upgrade_description`: Deal 12 damage.
Add a [gold]Debris[/gold] into your [gold]Hand[/gold]. → Deal 15 damage.
Add a [gold]Debris[/gold] into your [gold]Hand[/gold].; `description`: Deal 9 damage.
Add a [gold]Debris[/gold] into your [gold]Hand[/gold]. → Deal 11 damage.
Add a [gold]Debris[/gold] into your [gold]Hand[/gold].; `damage`: 9 → 11; `vars`: 1 fields → 1 fields; `upgrade`: 1 fields → 1 fields
- **Corrosive Wave**: `upgrade_description`: Whenever you draw a card this turn, apply 4 [gold]Poison[/gold] to ALL enemies. → Whenever you draw a card this turn, apply 3 [gold]Poison[/gold] to ALL enemies.; `description`: Whenever you draw a card this turn, apply 3 [gold]Poison[/gold] to ALL enemies. → Whenever you draw a card this turn, apply 2 [gold]Poison[/gold] to ALL enemies.; `vars`: 1 fields → 1 fields
- **Danse Macabre**: `upgrade_description`: Whenever you play a card that costs [energy:2] or more, gain 4 [gold]Block[/g... → Whenever you play a card that costs [energy:2] or more, gain 6 [gold]Block[/g...; `description`: Whenever you play a card that costs [energy:2] or more, gain 3 [gold]Block[/g... → Whenever you play a card that costs [energy:2] or more, gain 4 [gold]Block[/g...; `powers_applied`: {'power': 'Danse Macabre', 'amount': 3, 'power_key': 'DanseMacabre'} → {'power': 'Danse Macabre', 'amount': 4, 'power_key': 'DanseMacabre'}; `vars`: 3 fields → 3 fields; `upgrade`: 1 fields → 1 fields
- **Debilitate**: `upgrade_description`: Deal 9 damage.
[gold]Vulnerable[/gold] and [gold]Weak[/gold] are twice as eff... → Deal 12 damage.
[gold]Vulnerable[/gold] and [gold]Weak[/gold] are twice as ef...; `description`: Deal 7 damage.
[gold]Vulnerable[/gold] and [gold]Weak[/gold] are twice as eff... → Deal 10 damage.
[gold]Vulnerable[/gold] and [gold]Weak[/gold] are twice as ef...; `damage`: 7 → 10; `vars`: 3 fields → 3 fields
- **Defy**: `upgrade_description`: Gain 7 [gold]Block[/gold].
Apply 1 [gold]Weak[/gold]. → Gain 9 [gold]Block[/gold].
Apply 1 [gold]Weak[/gold].; `upgrade`: 2 fields → 1 fields
- **Dirge**: `keywords`: none → Exhaust; `keywords_key`: none → Exhaust
- **Discovery**: `description`: Choose 1 of 3 random cards to add into your [gold]Hand[/gold]. It costs 0 [en... → Choose 1 of 3 random cards to add into your [gold]Hand[/gold]. It's free to p...; `description_raw`: Choose 1 of 3 random cards to add into your [gold]Hand[/gold]. It costs 0 {en... → Choose 1 of 3 random cards to add into your [gold]Hand[/gold]. It's free to p...
- **Distraction**: `compendium_order`: 533 → 532
- **Dominate**: `upgrade_description`: none → Apply 2 [gold]Vulnerable[/gold].
Gain 1 [gold]Strength[/gold] for each [gold]...; `description`: Gain 1 [gold]Strength[/gold] for each [gold]Vulnerable[/gold] on the enemy. → Apply 1 [gold]Vulnerable[/gold].
Gain 1 [gold]Strength[/gold] for each [gold]...; `description_raw`: Gain {StrengthPerVulnerable:diff()} [gold]Strength[/gold] for each [gold]Vuln... → Apply {VulnerablePower:diff()} [gold]Vulnerable[/gold].
Gain {StrengthPerVuln...; `powers_applied`: none → {'power': 'Vulnerable', 'amount': 1, 'power_key': 'Vulnerable'}; `vars`: 1 fields → 3 fields; `upgrade`: 1 fields → 1 fields
- **Dual Wield**: `compendium_order`: 534 → 533
- **Enlightenment**: `compendium_order`: 535 → 534
- **Entrench**: `compendium_order`: 536 → 535
- **Eternal Armor**: `upgrade_description`: Gain 9 [gold]Plating[/gold]. → Gain 12 [gold]Plating[/gold].; `description`: Gain 7 [gold]Plating[/gold]. → Gain 9 [gold]Plating[/gold].; `powers_applied`: {'power': 'Plating', 'amount': 7, 'power_key': 'Plating'} → {'power': 'Plating', 'amount': 9, 'power_key': 'Plating'}; `vars`: 2 fields → 2 fields; `upgrade`: 1 fields → 1 fields
- **Expect a Fight**: `description`: Gain [energy:1] for each Attack in your [gold]Hand[/gold]. → Gain [energy:1] for each Attack in your [gold]Hand[/gold].
You cannot gain
ad...; `description_raw`: Gain {energyPrefix:energyIcons(1)} for each Attack in your [gold]Hand[/gold].... → Gain {energyPrefix:energyIcons(1)} for each Attack in your [gold]Hand[/gold]....
- **Exterminate**: `compendium_order`: 537 → 536
- **Falling Star**: `upgrade_description`: Deal 11 damage.
Apply 1 [gold]Weak[/gold].
Apply 1 [gold]Vulnerable[/gold]. → Deal 12 damage.
Apply 1 [gold]Weak[/gold].
Apply 1 [gold]Vulnerable[/gold].; `description`: Deal 7 damage.
Apply 1 [gold]Weak[/gold].
Apply 1 [gold]Vulnerable[/gold]. → Deal 8 damage.
Apply 1 [gold]Weak[/gold].
Apply 1 [gold]Vulnerable[/gold].; `damage`: 7 → 8; `vars`: 6 fields → 6 fields
- **Feeding Frenzy**: `compendium_order`: 538 → 537
- **Fight Me!**: `upgrade_description`: Deal 6 damage twice.
Gain 2 [gold]Strength[/gold].
The enemy gains 1 [gold]St... → Deal 6 damage twice.
Gain 3 [gold]Strength[/gold].
The enemy gains 1 [gold]St...; `description`: Deal 5 damage twice.
Gain 2 [gold]Strength[/gold].
The enemy gains 1 [gold]St... → Deal 5 damage twice.
Gain 3 [gold]Strength[/gold].
The enemy gains 1 [gold]St...; `powers_applied`: {'power': 'Strength', 'amount': 2, 'power_key': 'Strength'} → {'power': 'Strength', 'amount': 3, 'power_key': 'Strength'}; `vars`: 5 fields → 5 fields
- **Flick-Flack**: `upgrade_description`: Deal 9 damage to ALL enemies. → Deal 8 damage to ALL enemies.; `description`: Deal 7 damage to ALL enemies. → Deal 6 damage to ALL enemies.; `damage`: 7 → 6; `vars`: 1 fields → 1 fields
- **Folly**: `keywords`: Innate, Unplayable, Eternal → Innate, Ethereal, Unplayable, Eternal; `keywords_key`: Innate, Unplayable, Eternal → Innate, Ethereal, Unplayable, Eternal
- **Forgotten Ritual**: `keywords`: none → Exhaust; `keywords_key`: none → Exhaust
- **Gather Light**: `upgrade_description`: Gain 10 [gold]Block[/gold].
Gain [star:1]. → Gain 11 [gold]Block[/gold].
Gain [star:1].; `description`: Gain 7 [gold]Block[/gold].
Gain [star:1]. → Gain 8 [gold]Block[/gold].
Gain [star:1].; `block`: 7 → 8; `vars`: 2 fields → 2 fields
- **Glitterstream**: `upgrade_description`: Gain 13 [gold]Block[/gold].
Next turn, gain 6 [gold]Block[/gold]. → Gain 13 [gold]Block[/gold].
Next turn, gain 7 [gold]Block[/gold].; `description`: Gain 11 [gold]Block[/gold].
Next turn, gain 4 [gold]Block[/gold]. → Gain 11 [gold]Block[/gold].
Next turn, gain 5 [gold]Block[/gold].; `vars`: 2 fields → 2 fields
- **Glow**: `upgrade_description`: Gain [star:2].
Draw 2 cards. → Gain [star:2].
Draw 1 card.
Next turn, draw 1 card.; `description`: Gain [star:1].
Draw 2 cards. → Gain [star:1].
Draw 1 card.
Next turn, draw 1 card.; `description_raw`: Gain {Stars:starIcons()}.
Draw {Cards:diff()} {Cards:plural:card|cards}. → Gain {Stars:starIcons()}.
Draw {Cards:diff()} {Cards:plural:card|cards}.
Next...; `cards_draw`: 2 → 1; `vars`: 2 fields → 2 fields
- **Grand Finale**: `upgrade_description`: Can only be played if there are no cards in your [gold]Draw Pile[/gold]. Deal... → Can only be played if there are no cards in your [gold]Draw Pile[/gold]. Deal...; `description`: Can only be played if there are no cards in your [gold]Draw Pile[/gold]. Deal... → Can only be played if there are no cards in your [gold]Draw Pile[/gold]. Deal...; `damage`: 50 → 60; `vars`: 1 fields → 1 fields; `upgrade`: 1 fields → 1 fields
- **Grave Warden**: `upgrade_description`: Gain 10 [gold]Block[/gold].
Add a [gold]Soul+[/gold] into your [gold]Draw Pil... → Gain 11 [gold]Block[/gold].
Add a [gold]Soul[/gold] into your [gold]Draw Pile...; `description_raw`: Gain {Block:diff()} [gold]Block[/gold].
Add a [gold]{IfUpgraded:show:Soul+|So... → Gain {Block:diff()} [gold]Block[/gold].
Add a [gold]Soul[/gold] into your [go...; `upgrade`: 1 fields → 1 fields
- **Guiding Star**: `upgrade_description`: Deal 13 damage.
Next turn, draw 3 cards. → Deal 13 damage.
Draw 3 cards.; `description`: Deal 12 damage.
Next turn, draw 2 cards. → Deal 12 damage.
Draw 2 cards.; `description_raw`: Deal {Damage:diff()} damage.
Next turn, draw {Cards:diff()} {Cards:plural:car... → Deal {Damage:diff()} damage.
Draw {Cards:diff()} {Cards:plural:card|cards}.
- **Heirloom Hammer**: `upgrade_description`: Deal 22 damage.
Choose a Colorless card in your [gold]Hand[/gold]. Add a copy... → Deal 25 damage.
Choose a Colorless card in your [gold]Hand[/gold]. Add a copy...; `description`: Deal 17 damage.
Choose a Colorless card in your [gold]Hand[/gold]. Add a copy... → Deal 20 damage.
Choose a Colorless card in your [gold]Hand[/gold]. Add a copy...; `damage`: 17 → 20; `vars`: 2 fields → 2 fields
- **Hello World**: `compendium_order`: 539 → 538
- **Hemokinesis**: `upgrade_description`: Lose 2 HP.
Deal 19 damage. → Lose 2 HP.
Deal 20 damage.; `description`: Lose 2 HP.
Deal 14 damage. → Lose 2 HP.
Deal 15 damage.; `damage`: 14 → 15; `vars`: 2 fields → 2 fields
- **Hidden Gem**: `upgrade_description`: A random card in your [gold]Draw Pile[/gold] gains [gold]Replay[/gold] 3. → A random card without [gold]Replay[/gold] in your [gold]Draw Pile[/gold] gain...; `description`: A random card in your [gold]Draw Pile[/gold] gains [gold]Replay[/gold] 2. → A random card without [gold]Replay[/gold] in your [gold]Draw Pile[/gold] gain...; `description_raw`: A random card in your [gold]Draw Pile[/gold] gains [gold]Replay[/gold] {Repla... → A random card without [gold]Replay[/gold] in your [gold]Draw Pile[/gold] gain...
- **Hotfix**: `upgrade_description`: Gain 3 [gold]Focus[/gold] this turn. → none; `keywords`: none → Exhaust; `keywords_key`: none → Exhaust; `upgrade`: 1 fields → 1 fields
- **Howl from Beyond**: `upgrade_description`: Deal 21 damage to ALL enemies.
At the start of your turn, plays from the [gol... → Deal 21 damage to ALL enemies.
At the start of your turn, if this is in your ...; `description`: Deal 16 damage to ALL enemies.
At the start of your turn, plays from the [gol... → Deal 16 damage to ALL enemies.
At the start of your turn, if this is in your ...; `description_raw`: Deal {Damage:diff()} damage to ALL enemies.
At the start of your turn, plays ... → Deal {Damage:diff()} damage to ALL enemies.
At the start of your turn, if thi...
- **Huddle Up**: `upgrade_description`: ALL allies draw 3 cards. → ALL players draw 3 cards.; `description`: ALL allies draw 2 cards. → ALL players draw 2 cards.; `keywords`: none → Exhaust; `description_raw`: ALL allies draw {Cards:diff()} cards. → ALL players draw {Cards:diff()} cards.; `keywords_key`: none → Exhaust
- **I Am Invincible**: `upgrade_description`: Gain 12 [gold]Block[/gold].
At the end of your turn, if this is on top of you... → Gain 13 [gold]Block[/gold].
At the end of your turn, if this is on top of you...; `description`: Gain 9 [gold]Block[/gold].
At the end of your turn, if this is on top of your... → Gain 10 [gold]Block[/gold].
At the end of your turn, if this is on top of you...; `block`: 9 → 10; `vars`: 1 fields → 1 fields
- **Kingly Kick**: `upgrade_description`: Deal 30 damage.
Whenever you draw this card, reduce its cost by 1. → Deal 35 damage.
Whenever you draw this card, reduce its cost by 1.; `description`: Deal 24 damage.
Whenever you draw this card, reduce its cost by 1. → Deal 27 damage.
Whenever you draw this card, reduce its cost by 1.; `damage`: 24 → 27; `vars`: 1 fields → 1 fields; `upgrade`: 1 fields → 1 fields
- **Kingly Punch**: `upgrade_description`: Deal 8 damage.
Whenever you draw this card, increase its damage by 5 this com... → Deal 10 damage.
Whenever you draw this card, increase its damage by 6 this co...; `description`: Deal 8 damage.
Whenever you draw this card, increase its damage by 3 this com... → Deal 8 damage.
Whenever you draw this card, increase its damage by 4 this com...; `vars`: 2 fields → 2 fields; `upgrade`: 1 fields → 2 fields
- **Leading Strike**: `upgrade_description`: Deal 10 damage.
Add 1 [gold]Shiv[/gold] into your [gold]Hand[/gold]. → Deal 6 damage.
Add 2 [gold]Shivs[/gold] into your [gold]Hand[/gold].; `description`: Deal 7 damage.
Add 1 [gold]Shiv[/gold] into your [gold]Hand[/gold]. → Deal 3 damage.
Add 2 [gold]Shivs[/gold] into your [gold]Hand[/gold].; `description_raw`: Deal {Damage:diff()} damage.
Add {Shivs:diff()} [gold]Shiv[/gold] into your [... → Deal {Damage:diff()} damage.
Add {Shivs:diff()} [gold]{Shivs:plural:Shiv|Shiv...; `damage`: 7 → 3; `vars`: 2 fields → 2 fields
- **Mad Science**: `description_raw`: {CardType:choose(Attack|Skill|Power):Deal {Damage:diff()} damage{Violence: {V... → {CardType:choose(Attack|Skill|Power):Deal {Damage:diff()} damage{Violence: {V...; `type_variants`: 3 fields → 3 fields; `compendium_order`: 540 → 539
- **Maul**: `compendium_order`: 525 → 524
- **Metamorphosis**: `compendium_order`: 541 → 540
- **Minion Dive Bomb**: `cost`: 1 → 0
- **Minion Strike**: `upgrade_description`: Deal 10 damage.
Draw 1 card. → Deal 9 damage.
Draw 1 card.; `description`: Deal 7 damage.
Draw 1 card. → Deal 6 damage.
Draw 1 card.; `damage`: 7 → 6; `vars`: 2 fields → 2 fields
- **Neow's Fury**: `upgrade_description`: Deal 14 damage.
Put 2 random cards from your [gold]Discard Pile[/gold] into y... → Deal 14 damage.
Put 3 random cards from your [gold]Discard Pile[/gold] into y...; `compendium_order`: 526 → 525; `upgrade`: 1 fields → 2 fields
- **Outmaneuver**: `compendium_order`: 542 → 541
- **Parry**: `upgrade_description`: Whenever you play [gold]Sovereign Blade[/gold], gain 9 [gold]Block[/gold]. → Whenever you play [gold]Sovereign Blade[/gold], gain 14 [gold]Block[/gold].; `description`: Whenever you play [gold]Sovereign Blade[/gold], gain 6 [gold]Block[/gold]. → Whenever you play [gold]Sovereign Blade[/gold], gain 10 [gold]Block[/gold].; `powers_applied`: {'power': 'Parry', 'amount': 6, 'power_key': 'Parry'} → {'power': 'Parry', 'amount': 10, 'power_key': 'Parry'}; `vars`: 2 fields → 2 fields; `upgrade`: 1 fields → 1 fields
- **Patter**: `upgrade_description`: Gain 10 [gold]Block[/gold].
Gain 3 [gold]Vigor[/gold]. → Gain 11 [gold]Block[/gold].
Gain 3 [gold]Vigor[/gold].; `description`: Gain 8 [gold]Block[/gold].
Gain 2 [gold]Vigor[/gold]. → Gain 9 [gold]Block[/gold].
Gain 2 [gold]Vigor[/gold].; `block`: 8 → 9; `vars`: 3 fields → 3 fields
- **Peck**: `compendium_order`: 543 → 542
- **Pinpoint**: `upgrade_description`: Deal 22 damage.
Costs 1 less [energy:1] for each Skill played this turn. → Deal 19 damage.
Costs 1 less [energy:1] for each Skill played this turn.; `description`: Deal 17 damage.
Costs 1 less [energy:1] for each Skill played this turn. → Deal 15 damage.
Costs 1 less [energy:1] for each Skill played this turn.; `damage`: 17 → 15; `vars`: 1 fields → 1 fields; `upgrade`: 1 fields → 1 fields
- **Production**: `upgrade_description`: none → Gain [energy:3].; `upgrade`: 1 fields → 1 fields
- **Rebound**: `compendium_order`: 544 → 543
- **Refine Blade**: `upgrade_description`: [gold]Forge[/gold] 10.
Next turn, gain [energy:1]. → [gold]Forge[/gold] 13.
Next turn, gain [energy:1].; `description`: [gold]Forge[/gold] 6.
Next turn, gain [energy:1]. → [gold]Forge[/gold] 9.
Next turn, gain [energy:1].; `vars`: 2 fields → 2 fields
- **Relax**: `compendium_order`: 527 → 526
- **Rip and Tear**: `rarity_key`: Uncommon → Event; `rarity`: Uncommon → Event; `compendium_order`: 521 → 544
- **Rocket Punch**: `upgrade_description`: Deal 14 damage.
Draw 2 cards.
When a Status card is created, reduce this card... → Deal 14 damage.
Draw 2 cards.
When you create a Status card, reduce this card...; `description`: Deal 13 damage.
Draw 1 card.
When a Status card is created, reduce this card'... → Deal 13 damage.
Draw 1 card.
When you create a Status card, reduce this card'...; `description_raw`: Deal {Damage:diff()} damage.
Draw {Cards:diff()} {Cards:plural:card|cards}.
W... → Deal {Damage:diff()} damage.
Draw {Cards:diff()} {Cards:plural:card|cards}.
W...
- **Sculpting Strike**: `upgrade_description`: Deal 11 damage.
Add [gold]Ethereal[/gold] to a card in your [gold]Hand[/gold]. → Deal 12 damage.
Add [gold]Ethereal[/gold] to a card in your [gold]Hand[/gold].; `description`: Deal 8 damage.
Add [gold]Ethereal[/gold] to a card in your [gold]Hand[/gold]. → Deal 9 damage.
Add [gold]Ethereal[/gold] to a card in your [gold]Hand[/gold].; `damage`: 8 → 9; `vars`: 1 fields → 1 fields
- **Seance**: `upgrade_description`: Transform a card in your [gold]Draw Pile[/gold] into [gold]Soul+[/gold]. → none; `description_raw`: Transform a card in your [gold]Draw Pile[/gold] into [gold]{IfUpgraded:show:S... → Transform a card in your [gold]Draw Pile[/gold] into [gold]Soul[/gold].; `cost`: 0 → 1; `upgrade`: 1 fields → 1 fields
- **Seeker Strike**: `upgrade_description`: Deal 9 damage.
Choose 1 of 3 cards in your [gold]Draw Pile[/gold] to add into... → Deal 12 damage.
Choose 1 of 3 cards in your [gold]Draw Pile[/gold] to add int...; `description`: Deal 6 damage.
Choose 1 of 3 cards in your [gold]Draw Pile[/gold] to add into... → Deal 9 damage.
Choose 1 of 3 cards in your [gold]Draw Pile[/gold] to add into...; `damage`: 6 → 9; `vars`: 2 fields → 2 fields
- **Serpent Form**: `upgrade_description`: Whenever you play a card, deal 5 damage to a random enemy. → Whenever you play a card, deal 6 damage to a random enemy.; `upgrade`: 1 fields → 1 fields
- **Shiv**: `upgrade_description`: Deal 6 damage. → Deal 6 damage to ALL enemies.; `description`: Deal 4 damage. → Deal 4 damage to ALL enemies.; `description_raw`: Deal {Damage:diff()} damage{FanOfKnivesAmount:cond:>0? to ALL enemies|}. → Deal {Damage:diff()} damage{TargetType:choose(AllEnemies): to ALL enemies|}.; `vars`: 3 fields → 1 fields
- **Skewer**: `upgrade_description`: Deal 10 damage X times. → Deal 11 damage X times.; `description`: Deal 7 damage X times. → Deal 8 damage X times.; `damage`: 7 → 8; `vars`: 1 fields → 1 fields
- **Solar Strike**: `upgrade_description`: Deal 9 damage.
Gain [star:2]. → Deal 10 damage.
Gain [star:2].; `description`: Deal 8 damage.
Gain [star:1]. → Deal 9 damage.
Gain [star:1].; `damage`: 8 → 9; `vars`: 2 fields → 2 fields
- **Speedster**: `upgrade_description`: Whenever you draw a card during your turn, deal 3 damage to ALL enemies. → Whenever you draw a card during your turn, deal 2 damage to ALL enemies.; `description`: Whenever you draw a card during your turn, deal 2 damage to ALL enemies. → Whenever you draw a card during your turn, deal 1 damage to ALL enemies.; `powers_applied`: {'power': 'Speedster', 'amount': 2, 'power_key': 'Speedster'} → {'power': 'Speedster', 'amount': 1, 'power_key': 'Speedster'}; `vars`: 2 fields → 2 fields
- **Spite**: `upgrade_description`: Deal 9 damage.
If you lost HP this turn, draw 1 card. → Deal 5 damage.
If you lost HP this turn,
hits 3 times.; `description`: Deal 6 damage.
If you lost HP this turn, draw 1 card. → Deal 5 damage.
If you lost HP this turn,
hits 2 times.; `hit_count`: none → 2; `description_raw`: Deal {Damage:diff()} damage.
If you lost HP this turn, draw {Cards:diff()} {C... → Deal {Damage:diff()} damage.
If you lost HP this turn,
hits {Repeat:diff()} t...; `damage`: 6 → 5; `cards_draw`: 1 → none; `vars`: 2 fields → 2 fields; `upgrade`: 1 fields → 1 fields
- **Spoils of Battle**: `upgrade_description`: [gold]Forge[/gold] 15. → [gold]Forge[/gold] 8.
Draw 2 cards.; `description`: [gold]Forge[/gold] 10. → [gold]Forge[/gold] 5.
Draw 2 cards.; `description_raw`: [gold]Forge[/gold] {Forge:diff()}. → [gold]Forge[/gold] {Forge:diff()}.
Draw {Cards:diff()} {Cards:plural:card|car...; `cards_draw`: none → 2; `vars`: 1 fields → 2 fields; `upgrade`: 1 fields → 1 fields
- **Stack**: `description_raw`: Gain [gold]Block[/gold] equal to the number of cards in your [gold]Discard Pi... → Gain [gold]Block[/gold] equal to the number of cards in your [gold]Discard Pi...
- **Stoke**: `upgrade_description`: none → [gold]Exhaust[/gold] your [gold]Hand[/gold].
Add 1 random [gold]Upgraded[/gol...; `description`: [gold]Exhaust[/gold] your [gold]Hand[/gold].
Draw a card for each card [gold]... → [gold]Exhaust[/gold] your [gold]Hand[/gold].
Add 1 random card into your [gol...; `keywords`: Exhaust → none; `description_raw`: [gold]Exhaust[/gold] your [gold]Hand[/gold].
Draw a card for each card [gold]... → [gold]Exhaust[/gold] your [gold]Hand[/gold].
Add 1 random {IfUpgraded:show:[g...; `keywords_key`: Exhaust → none; `upgrade`: 1 fields → 1 fields
- **Sword Sage**: `description`: Increase the cost of [gold]Sovereign Blade[/gold] by 1. [gold]Sovereign Blade... → [gold]Sovereign Blade[/gold] now hits an additional time.; `description_raw`: Increase the cost of [gold]Sovereign Blade[/gold] by 1. [gold]Sovereign Blade... → [gold]Sovereign Blade[/gold] now hits an additional time.
- **Tear Asunder**: `description_raw`: Deal {Damage:diff()} damage.
Hits an additional time for each time you lost H... → Deal {Damage:diff()} damage.
Hits an additional time for each time you lost H...
- **Tremble**: `description`: Apply 2 [gold]Vulnerable[/gold]. → Apply 3 [gold]Vulnerable[/gold].; `keywords`: none → Exhaust; `keywords_key`: none → Exhaust; `powers_applied`: {'power': 'Vulnerable', 'amount': 2, 'power_key': 'Vulnerable'} → {'power': 'Vulnerable', 'amount': 3, 'power_key': 'Vulnerable'}; `vars`: 2 fields → 2 fields
- **Untouchable**: `upgrade_description`: Gain 12 [gold]Block[/gold]. → Gain 8 [gold]Block[/gold].; `description`: Gain 9 [gold]Block[/gold]. → Gain 6 [gold]Block[/gold].; `block`: 9 → 6; `vars`: 1 fields → 1 fields; `upgrade`: 1 fields → 1 fields
- **Void Form**: `upgrade_description`: End your turn.
The first 3 cards you play each turn are free to play. → none; `keywords`: none → Ethereal; `keywords_key`: none → Ethereal; `upgrade`: 1 fields → 1 fields
- **Voltaic**: `cost`: 2 → 3
- **Whistle**: `compendium_order`: 528 → 527
- **Wish**: `compendium_order`: 529 → 528
- **Wrought in War**: `upgrade_description`: Deal 9 damage.
[gold]Forge[/gold] 7. → Deal 9 damage.
[gold]Forge[/gold] 9.; `description`: Deal 7 damage.
[gold]Forge[/gold] 5. → Deal 7 damage.
[gold]Forge[/gold] 7.; `vars`: 2 fields → 2 fields

## Relics (288 → 290)

### Added (2)
- **Hefty Tablet** — name: Hefty Tablet, rarity: Ancient Relic
- **Neow's Talisman** — name: Neow's Talisman, rarity: Ancient Relic

### Changed (179)
- **Amethyst Aubergine**: `description`: Enemies drop [blue]10[/blue] additional [gold]Gold[/gold]. → Enemies drop [blue]15[/blue] additional [gold]Gold[/gold].
- **Bag of Marbles**: `rarity_key`: Uncommon → Common; `rarity`: Uncommon Relic → Common Relic; `compendium_order`: 41 → 12
- **Bag of Preparation**: `compendium_order`: 12 → 13
- **Bellows**: `rarity_key`: Uncommon → Rare; `rarity`: Uncommon Relic → Rare Relic; `compendium_order`: 42 → 82
- **Big Hat**: `compendium_order`: 82 → 83
- **Big Mushroom**: `compendium_order`: 253 → 255
- **Bing Bong**: `compendium_order`: 254 → 256
- **Blood Vial**: `compendium_order`: 13 → 14
- **Bone Flute**: `compendium_order`: 14 → 15
- **Bone Tea**: `compendium_order`: 256 → 258
- **Bookmark**: `compendium_order`: 83 → 84
- **Book of Five Rings**: `description`: Every [blue]5[/blue] cards you add to your [gold]Deck[/gold], heal [green]15[... → Every [blue]5[/blue] cards you add to your [gold]Deck[/gold], heal [green]20[...; `compendium_order`: 15 → 16
- **Book Repair Knife**: `compendium_order`: 43 → 41
- **Bowler Hat**: `description_raw`: Gain [blue]20%[/blue] additional [gold]Gold[/gold]. → Gain [blue]{GoldIncrease:percentMore()}%[/blue] additional [gold]Gold[/gold].; `description`: Gain [blue]20%[/blue] additional [gold]Gold[/gold]. → Gain [blue]%[/blue] additional [gold]Gold[/gold].; `compendium_order`: 44 → 42
- **Bronze Scales**: `compendium_order`: 16 → 17
- **Byrdpip**: `compendium_order`: 257 → 259
- **Candelabra**: `compendium_order`: 45 → 43
- **Captain's Wheel**: `compendium_order`: 84 → 85
- **Centennial Puzzle**: `compendium_order`: 17 → 18
- **Chandelier**: `compendium_order`: 85 → 86
- **Charon's Ashes**: `compendium_order`: 86 → 87
- **The Chosen Cheese**: `compendium_order`: 282 → 284
- **Circlet**: `compendium_order`: 287 → 289
- **Cloak Clasp**: `compendium_order`: 87 → 88
- **Crossbow**: `description_raw`: At the start of your turn, add a random [gold]Attack[/gold] into your [gold]H... → At the start of your turn, add a random [gold]Attack[/gold] into your [gold]H...; `description`: At the start of your turn, add a random [gold]Attack[/gold] into your [gold]H... → At the start of your turn, add a random [gold]Attack[/gold] into your [gold]H...
- **Darkstone Periapt**: `compendium_order`: 258 → 260
- **Data Disk**: `compendium_order`: 18 → 19
- **Daughter of the Wind**: `compendium_order`: 259 → 261
- **Demon Tongue**: `compendium_order`: 88 → 89
- **Distinguished Cape**: `description_raw`: Upon pickup, lose [red]9[/red] Max HP. Add [blue]{Cards}[/blue] [gold]{Cards:... → Upon pickup, lose [blue]9[/blue] Max HP. Add [blue]{Cards}[/blue] [gold]{Card...; `description`: Upon pickup, lose [red]9[/red] Max HP. Add [blue]3[/blue] [gold]Apparitions[/... → Upon pickup, lose [blue]9[/blue] Max HP. Add [blue]3[/blue] [gold]Apparitions...
- **Dream Catcher**: `compendium_order`: 260 → 262
- **Ember Tea**: `compendium_order`: 261 → 263
- **Emotion Chip**: `compendium_order`: 89 → 90
- **Eternal Feather**: `compendium_order`: 46 → 44
- **Anchor???**: `compendium_order`: 252 → 254
- **Blood Vial???**: `compendium_order`: 255 → 257
- **Happy Flower???**: `compendium_order`: 266 → 268
- **Lee's Waffle???**: `compendium_order`: 268 → 270
- **Mango???**: `compendium_order`: 270 → 272
- **The Merchant's Rug???**: `compendium_order`: 283 → 285
- **Orichalcum???**: `compendium_order`: 273 → 275
- **Snecko Eye???**: `compendium_order`: 276 → 278
- **Strike Dummy???**: `compendium_order`: 277 → 279
- **Venerable Tea Set???**: `compendium_order`: 284 → 286
- **Fencing Manual**: `compendium_order`: 19 → 20
- **Festive Popper**: `compendium_order`: 20 → 21
- **Forgotten Soul**: `compendium_order`: 262 → 264
- **Fragrant Mushroom**: `description_raw`: Upon pickup, lose [red]{HpLoss}[/red] HP and [gold]Upgrade[/gold] [blue]{Card... → Upon pickup, lose [blue]{HpLoss}[/blue] HP and [gold]Upgrade[/gold] [blue]{Ca...; `description`: Upon pickup, lose [red]15[/red] HP and [gold]Upgrade[/gold] [blue]3[/blue] ra... → Upon pickup, lose [blue]15[/blue] HP and [gold]Upgrade[/gold] [blue]2[/blue] ...; `compendium_order`: 263 → 265
- **Fresnel Lens**: `compendium_order`: 264 → 266
- **Frozen Egg**: `compendium_order`: 90 → 91
- **Funerary Mask**: `compendium_order`: 47 → 45
- **Galactic Dust**: `compendium_order`: 48 → 46
- **Gambling Chip**: `compendium_order`: 91 → 92
- **Game Piece**: `compendium_order`: 92 → 93
- **Girya**: `compendium_order`: 93 → 94
- **Gold-Plated Cables**: `compendium_order`: 49 → 47
- **Gorget**: `compendium_order`: 21 → 22
- **Gremlin Horn**: `compendium_order`: 50 → 48
- **Hand Drill**: `compendium_order`: 265 → 267
- **Happy Flower**: `compendium_order`: 22 → 23
- **Helical Dart**: `compendium_order`: 94 → 95
- **History Course**: `compendium_order`: 267 → 269
- **Horn Cleat**: `compendium_order`: 51 → 49
- **Ice Cream**: `compendium_order`: 95 → 96
- **Intimidating Helmet**: `compendium_order`: 96 → 97
- **Iron Club**: `compendium_order`: 190 → 191
- **Ivory Tile**: `compendium_order`: 97 → 98
- **Jeweled Mask**: `compendium_order`: 191 → 192
- **Jewelry Box**: `compendium_order`: 192 → 193
- **Joss Paper**: `compendium_order`: 52 → 50
- **Juzu Bracelet**: `compendium_order`: 23 → 24
- **Kunai**: `compendium_order`: 98 → 99
- **Kusarigama**: `compendium_order`: 53 → 51
- **Lantern**: `compendium_order`: 24 → 25
- **Large Capsule**: `compendium_order`: 193 → 194
- **Lasting Candy**: `rarity_key`: Rare → Uncommon; `rarity`: Rare Relic → Uncommon Relic; `compendium_order`: 99 → 52
- **Lava Rock**: `compendium_order`: 194 → 195
- **Lead Paperweight**: `compendium_order`: 195 → 196
- **Leafy Poultice**: `description`: Upon pickup, [gold]Transform[/gold] [blue]1[/blue] of your [gold]Strikes[/gol... → Upon pickup, [gold]Transform[/gold] [blue]1[/blue] of your [gold]Strikes[/gol...; `compendium_order`: 196 → 197
- **Letter Opener**: `compendium_order`: 54 → 53
- **Lizard Tail**: `description_raw`: When you would die, heal to [green]{Heal}%[/green] of your Max HP instead (wo... → When your HP would be reduced to [blue]0[/blue], heal to [green]{Heal}%[/gree...; `description`: When you would die, heal to [green]50%[/green] of your Max HP instead (works ... → When your HP would be reduced to [blue]0[/blue], heal to [green]50%[/green] o...
- **Looming Fruit**: `compendium_order`: 197 → 198
- **Lord's Parasol**: `compendium_order`: 198 → 199
- **Lost Coffer**: `compendium_order`: 199 → 200
- **Lost Wisp**: `compendium_order`: 269 → 271
- **Lucky Fysh**: `compendium_order`: 55 → 54
- **Massive Scroll**: `compendium_order`: 200 → 201
- **Maw Bank**: `compendium_order`: 271 → 273
- **Meal Ticket**: `compendium_order`: 25 → 26
- **Meat Cleaver**: `compendium_order`: 201 → 202
- **Mercury Hourglass**: `compendium_order`: 56 → 55
- **Miniature Cannon**: `compendium_order`: 57 → 56
- **Mr. Struggles**: `compendium_order`: 272 → 274
- **Music Box**: `compendium_order`: 202 → 203
- **Neow's Torment**: `compendium_order`: 203 → 205
- **New Leaf**: `compendium_order`: 204 → 206
- **Nunchaku**: `compendium_order`: 58 → 57
- **Nutritious Oyster**: `compendium_order`: 205 → 207
- **Nutritious Soup**: `compendium_order`: 206 → 208
- **Oddly Smooth Stone**: `compendium_order`: 26 → 27
- **Orichalcum**: `compendium_order`: 59 → 58
- **Ornamental Fan**: `compendium_order`: 60 → 59
- **Pael's Blood**: `compendium_order`: 207 → 209
- **Pael's Claw**: `compendium_order`: 208 → 210
- **Pael's Eye**: `compendium_order`: 209 → 211
- **Pael's Flesh**: `compendium_order`: 210 → 212
- **Pael's Growth**: `compendium_order`: 211 → 213
- **Pael's Horn**: `compendium_order`: 212 → 214
- **Pael's Legion**: `compendium_order`: 213 → 215
- **Pael's Tears**: `compendium_order`: 214 → 216
- **Pael's Tooth**: `compendium_order`: 215 → 217
- **Pael's Wing**: `compendium_order`: 216 → 218
- **Pandora's Box**: `compendium_order`: 217 → 219
- **Pantograph**: `compendium_order`: 61 → 60
- **Paper Phrog**: `compendium_order`: 62 → 61
- **Parrying Shield**: `compendium_order`: 63 → 62
- **Pear**: `compendium_order`: 64 → 63
- **Pendulum**: `description_raw`: Whenever you shuffle your [gold]Draw Pile[/gold], draw a card. → Every [blue]{Turns}[/blue] {Turns:plural:turn|turns}, draw [blue]{Cards}[/blu...; `description`: Whenever you shuffle your [gold]Draw Pile[/gold], draw a card. → Every [blue]3[/blue] turns, draw [blue]1[/blue] card.; `compendium_order`: 27 → 28
- **Pen Nib**: `compendium_order`: 65 → 64
- **Permafrost**: `rarity_key`: Common → Uncommon; `rarity`: Common Relic → Uncommon Relic; `description`: The first time you play a Power each combat, gain [blue]6[/blue] [gold]Block[... → The first time you play a Power each combat, gain [blue]7[/blue] [gold]Block[...; `compendium_order`: 28 → 65
- **Philosopher's Stone**: `compendium_order`: 218 → 220
- **Planisphere**: `description`: Whenever you enter a [gold]?[/gold] room, heal [green]4[/green] HP. → Whenever you enter a [gold]?[/gold] room, heal [green]5[/green] HP.
- **Pollinous Core**: `compendium_order`: 274 → 276
- **Pomander**: `compendium_order`: 219 → 221
- **Precarious Shears**: `description_raw`: Upon pickup, remove [blue]{Cards}[/blue] {Cards:plural:card|cards} from your ... → Upon pickup, remove [blue]{Cards}[/blue] {Cards:plural:card|cards} from your ...; `description`: Upon pickup, remove [blue]2[/blue] cards from your [gold]Deck[/gold] and take... → Upon pickup, remove [blue]2[/blue] cards from your [gold]Deck[/gold] and lose...; `compendium_order`: 220 → 222
- **Precise Scissors**: `compendium_order`: 221 → 223
- **Preserved Fog**: `description`: Upon pickup, remove [blue]5[/blue] cards from your [gold]Deck[/gold]. Add [re... → Upon pickup, remove [blue]3[/blue] cards from your [gold]Deck[/gold]. Add [re...; `compendium_order`: 222 → 224
- **Prismatic Gem**: `compendium_order`: 223 → 225
- **Pumpkin Candle**: `compendium_order`: 224 → 226
- **Radiant Pearl**: `compendium_order`: 225 → 227
- **Red Mask**: `rarity_key`: Uncommon → Common; `rarity`: Uncommon Relic → Common Relic; `compendium_order`: 68 → 30
- **Red Skull**: `compendium_order`: 30 → 31
- **Regalite**: `compendium_order`: 69 → 68
- **Regal Pillow**: `compendium_order`: 31 → 32
- **Reptile Trinket**: `compendium_order`: 70 → 69
- **Ripple Basin**: `compendium_order`: 71 → 70
- **Royal Poison**: `compendium_order`: 275 → 277
- **Runic Pyramid**: `compendium_order`: 226 → 228
- **Sai**: `compendium_order`: 227 → 229
- **Sand Castle**: `compendium_order`: 228 → 230
- **Scroll Boxes**: `compendium_order`: 229 → 231
- **Seal of Gold**: `compendium_order`: 231 → 233
- **Sea Glass**: `compendium_order`: 230 → 232
- **Self-Forming Clay**: `compendium_order`: 72 → 71
- **Sere Talon**: `compendium_order`: 232 → 234
- **Signet Ring**: `compendium_order`: 233 → 235
- **Silver Crucible**: `compendium_order`: 234 → 236
- **Small Capsule**: `compendium_order`: 235 → 237
- **Snecko Eye**: `compendium_order`: 236 → 238
- **Snecko Skull**: `compendium_order`: 32 → 33
- **Sozu**: `compendium_order`: 237 → 239
- **Sparkling Rouge**: `compendium_order`: 73 → 72
- **Spiked Gauntlets**: `compendium_order`: 238 → 240
- **Stone Cracker**: `description_raw`: At the start of [gold]Boss[/gold] combats, [gold]Upgrade[/gold] [blue]{Cards}... → At the start of each combat, [gold]Upgrade[/gold] [blue]{Cards}[/blue] random...; `description`: At the start of [gold]Boss[/gold] combats, [gold]Upgrade[/gold] [blue]3[/blue... → At the start of each combat, [gold]Upgrade[/gold] [blue]2[/blue] random cards...; `compendium_order`: 74 → 73
- **Stone Humidifier**: `compendium_order`: 239 → 241
- **Storybook**: `compendium_order`: 240 → 242
- **Strawberry**: `compendium_order`: 33 → 34
- **Strike Dummy**: `compendium_order`: 34 → 35
- **Sword of Jade**: `compendium_order`: 278 → 280
- **Sword of Stone**: `compendium_order`: 279 → 281
- **Symbiotic Virus**: `compendium_order`: 75 → 74
- **Tanx's Whistle**: `compendium_order`: 241 → 243
- **Tea of Discourtesy**: `compendium_order`: 280 → 282
- **The Boot**: `compendium_order`: 281 → 283
- **Throwing Axe**: `compendium_order`: 242 → 244
- **Tingsha**: `compendium_order`: 76 → 75
- **Tiny Mailbox**: `description_raw`: Whenever you [gold]Rest[/gold], procure a random potion. → Whenever you [gold]Rest[/gold], procure [blue]2[/blue] random potions.; `rarity_key`: Common → Uncommon; `rarity`: Common Relic → Uncommon Relic; `description`: Whenever you [gold]Rest[/gold], procure a random potion. → Whenever you [gold]Rest[/gold], procure [blue]2[/blue] random potions.; `compendium_order`: 35 → 76
- **Toasty Mittens**: `compendium_order`: 243 → 245
- **Touch of Orobas**: `compendium_order`: 244 → 246
- **Toy Box**: `compendium_order`: 245 → 247
- **Tri-Boomerang**: `compendium_order`: 246 → 248
- **Velvet Choker**: `compendium_order`: 247 → 249
- **Very Hot Cocoa**: `compendium_order`: 248 → 250
- **Vexing Puzzlebox**: `description_raw`: At the start of each combat, add a random card into your [gold]Hand[/gold]. I... → At the start of each combat, add a random card into your [gold]Hand[/gold]. I...; `description`: At the start of each combat, add a random card into your [gold]Hand[/gold]. I... → At the start of each combat, add a random card into your [gold]Hand[/gold]. I...
- **War Hammer**: `compendium_order`: 249 → 251
- **Whispering Earring**: `compendium_order`: 250 → 252
- **Wongo's Mystery Ticket**: `compendium_order`: 286 → 288
- **Wongo Customer Appreciation Badge**: `compendium_order`: 285 → 287
- **Yummy Cookie**: `compendium_order`: 251 → 253

## Monsters (116 → 115)

### Removed (1)
- ~~Door~~

### Changed (29)
- **Bowlbug (Egg)**: `encounters`: {'encounter_id': 'BOWLBUGS_NORMAL', 'encounter_name': 'Bowlbug Swarm', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}, {'encounter_id': 'BOWLBUGS_WEAK', 'encounter_name': 'Bowlbugs', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': True}, {'encounter_id': 'TUNNELER_NORMAL', 'encounter_name': 'Tunneling Twosome', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False} → {'encounter_id': 'BOWLBUGS_NORMAL', 'encounter_name': 'Bowlbug Swarm', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}, {'encounter_id': 'BOWLBUGS_WEAK', 'encounter_name': 'Bowlbugs', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': True}
- **Bowlbug (Silk)**: `encounters`: {'encounter_id': 'BOWLBUGS_NORMAL', 'encounter_name': 'Bowlbug Swarm', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}, {'encounter_id': 'SLUMBERING_BEETLE_NORMAL', 'encounter_name': 'Slumber Party', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}, {'encounter_id': 'TUNNELER_NORMAL', 'encounter_name': 'Tunneling Twosome', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False} → {'encounter_id': 'BOWLBUGS_NORMAL', 'encounter_name': 'Bowlbug Swarm', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}, {'encounter_id': 'SLUMBERING_BEETLE_NORMAL', 'encounter_name': 'Slumber Party', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}
- **Bygone Effigy**: `damage_values`: 1 fields → 1 fields; `moves`: {'id': 'INITIAL_SLEEP', 'name': 'Initial Sleep', 'intent': 'Sleep'}, {'id': 'WAKE', 'name': 'Wake', 'intent': 'Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 10}]}, {'id': 'SLEEP', 'name': 'Sleep', 'intent': 'Sleep'}, {'id': 'SLASHES', 'name': 'Slashes', 'intent': 'Attack', 'damage': {'normal': 15, 'ascension': 17}} → {'id': 'INITIAL_SLEEP', 'name': 'Initial Sleep', 'intent': 'Sleep'}, {'id': 'WAKE', 'name': 'Wake', 'intent': 'Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 10}]}, {'id': 'SLEEP', 'name': 'Sleep', 'intent': 'Sleep'}, {'id': 'SLASHES', 'name': 'Slashes', 'intent': 'Attack', 'damage': {'normal': 13, 'ascension': 15}}
- **Byrdonis**: `damage_values`: 2 fields → 2 fields; `moves`: {'id': 'PECK', 'name': 'Peck', 'intent': 'Attack', 'damage': {'normal': 3, 'ascension': 4, 'hit_count': 3, 'hit_count_ascension': 3}}, {'id': 'SWOOP', 'name': 'Swoop', 'intent': 'Attack', 'damage': {'normal': 16, 'ascension': 18}} → {'id': 'PECK', 'name': 'Peck', 'intent': 'Attack', 'damage': {'normal': 3, 'ascension': 4, 'hit_count': 3, 'hit_count_ascension': 3}}, {'id': 'SWOOP', 'name': 'Swoop', 'intent': 'Attack', 'damage': {'normal': 17, 'ascension': 19}}
- **Calcified Cultist**: `encounters`: {'encounter_id': 'CULTISTS_NORMAL', 'encounter_name': 'Cultists', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': False}, {'encounter_id': 'TOADPOLES_NORMAL', 'encounter_name': 'Underdocks Wildlife', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': False} → {'encounter_id': 'CULTISTS_NORMAL', 'encounter_name': 'Cultists', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': False}, {'encounter_id': 'SEAPUNK_NORMAL', 'encounter_name': 'Underdocks Wildlife', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': False}
- **Chomper**: `encounters`: {'encounter_id': 'CHOMPERS_NORMAL', 'encounter_name': 'An Automaton Pair', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False} → {'encounter_id': 'CHOMPERS_NORMAL', 'encounter_name': 'An Automaton Pair', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}, {'encounter_id': 'TUNNELER_NORMAL', 'encounter_name': 'Tunneling Twosome', 'room_type': 'Monster', 'act': 'Act 2 - Hive', 'is_weak': False}
- **Crusher**: `min_hp_ascension`: 209 → 219; `min_hp`: 199 → 209
- **Decimillipede**: `max_hp`: 48 → 46; `min_hp_ascension`: 48 → 46; `min_hp`: 42 → 40; `max_hp_ascension`: 56 → 52
- **Decimillipede Segment (Back)**: `max_hp`: 48 → 46; `min_hp`: 42 → 40; `max_hp_ascension`: 56 → 52; `min_hp_ascension`: 48 → 46
- **Decimillipede Segment (Front)**: `max_hp`: 48 → 46; `min_hp`: 42 → 40; `max_hp_ascension`: 56 → 52; `min_hp_ascension`: 48 → 46
- **Decimillipede Segment (Middle)**: `max_hp`: 48 → 46; `min_hp`: 42 → 40; `max_hp_ascension`: 56 → 52; `min_hp_ascension`: 48 → 46
- **Doormaker**: `damage_values`: 2 fields → 3 fields; `moves`: {'id': 'WHAT_IS_IT', 'name': 'What Is It', 'intent': 'Stun'}, {'id': 'BEAM', 'name': 'Beam', 'intent': 'Attack', 'damage': {'normal': 31, 'ascension': 34}}, {'id': 'GET_BACK_IN', 'name': 'Get Back In', 'intent': 'Attack + Buff + Escape', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 5}], 'damage': {'normal': 40, 'ascension': 45}} → {'id': 'DRAMATIC_OPEN', 'name': 'Dramatic Open', 'intent': 'Summon'}, {'id': 'HUNGER', 'name': 'Hunger', 'intent': 'Attack + Buff', 'damage': {'normal': 12, 'ascension': 13, 'hit_count': 2}}, {'id': 'SCRUTINY', 'name': 'Scrutiny', 'intent': 'Attack + Buff', 'damage': {'normal': 30, 'ascension': 35}}, {'id': 'GRASP', 'name': 'Grasp', 'intent': 'Attack + Buff + Debuff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 4}], 'damage': {'normal': 20, 'ascension': 23}}
- **The Merchant???**: `moves`: {'id': 'SWIPE', 'name': 'Swipe', 'intent': 'Attack', 'damage': {'normal': 13, 'ascension': 15}}, {'id': 'SPEW_COINS', 'name': 'Spew Coins', 'intent': 'Attack', 'damage': {'normal': 2}}, {'id': 'THROW_RELIC', 'name': 'Throw Relic', 'intent': 'Attack + Debuff', 'powers': [{'power_id': 'FRAIL', 'target': 'player', 'amount': 1}], 'damage': {'normal': 13, 'ascension': 15}}, {'id': 'ENRAGE', 'name': 'Enrage', 'intent': 'Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 2}]} → {'id': 'SWIPE', 'name': 'Swipe', 'intent': 'Attack', 'damage': {'normal': 13, 'ascension': 15}}, {'id': 'SPEW_COINS', 'name': 'Spew Coins', 'intent': 'Attack', 'damage': {'normal': 2}}, {'id': 'THROW_RELIC', 'name': 'Throw Relic', 'intent': 'Attack + Debuff', 'powers': [{'power_id': 'FRAIL', 'target': 'player', 'amount': 1}], 'damage': {'normal': 9, 'ascension': 10}}, {'id': 'ENRAGE', 'name': 'Enrage', 'intent': 'Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 2}]}
- **Gas Bomb**: `min_hp_ascension`: 12 → 8; `min_hp`: 10 → 7
- **Guardbot**: `max_hp`: 25 → 20; `min_hp_ascension`: 22 → 17; `min_hp`: 21 → 16; `max_hp_ascension`: 26 → 21
- **Haunted Ship**: `moves`: {'id': 'RAMMING_SPEED', 'name': 'Ramming Speed', 'intent': 'Attack + Status', 'damage': {'normal': 10, 'ascension': 11}}, {'id': 'SWIPE', 'name': 'Swipe', 'intent': 'Attack', 'damage': {'normal': 13, 'ascension': 14}}, {'id': 'STOMP', 'name': 'Stomp', 'intent': 'Attack', 'damage': {'normal': 4, 'ascension': 5, 'hit_count': 3}}, {'id': 'HAUNT', 'name': 'Haunt', 'intent': 'Debuff', 'powers': [{'power_id': 'WEAK', 'target': 'player', 'amount': 2}, {'power_id': 'FRAIL', 'target': 'player', 'amount': 2}, {'power_id': 'VULNERABLE', 'target': 'player', 'amount': 2}]} → {'id': 'RAMMING_SPEED', 'name': 'Ramming Speed', 'intent': 'Attack + Debuff', 'powers': [{'power_id': 'WEAK', 'target': 'player', 'amount': 1}], 'damage': {'normal': 10, 'ascension': 11}}, {'id': 'SWIPE', 'name': 'Swipe', 'intent': 'Attack', 'damage': {'normal': 13, 'ascension': 14}}, {'id': 'STOMP', 'name': 'Stomp', 'intent': 'Attack', 'damage': {'normal': 4, 'ascension': 5, 'hit_count': 3}}, {'id': 'HAUNT', 'name': 'Haunt', 'intent': 'Status'}
- **Nibbit**: `damage_values`: 2 fields → 2 fields; `moves`: {'id': 'BUTT', 'name': 'Butt', 'intent': 'Attack', 'damage': {'normal': 12, 'ascension': 13}}, {'id': 'SLICE', 'name': 'Slice', 'intent': 'Attack + Defend', 'block': 5, 'damage': {'normal': 6, 'ascension': 6}}, {'id': 'HISS', 'name': 'Hiss', 'intent': 'Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 2}]} → {'id': 'BUTT', 'name': 'Butt', 'intent': 'Attack', 'damage': {'normal': 12, 'ascension': 13}}, {'id': 'SLICE', 'name': 'Slice', 'intent': 'Attack + Defend', 'block': 5, 'damage': {'normal': 6, 'ascension': 7}}, {'id': 'HISS', 'name': 'Hiss', 'intent': 'Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 2}]}
- **Noisebot**: `max_hp`: 28 → 23; `min_hp_ascension`: 24 → 19; `min_hp`: 23 → 18; `max_hp_ascension`: 29 → 24
- **Phantasmal Gardener**: `max_hp`: 32 → 31; `min_hp_ascension`: 29 → 27; `min_hp`: 28 → 26; `max_hp_ascension`: 33 → 32
- **Rocket**: `min_hp_ascension`: 199 → 209; `min_hp`: 189 → 199
- **Seapunk**: `damage_values`: 2 fields → 2 fields; `moves`: {'id': 'SEA_KICK', 'name': 'Sea Kick', 'intent': 'Attack', 'damage': {'normal': 11, 'ascension': 12}}, {'id': 'SPINNING_KICK', 'name': 'Spinning Kick', 'intent': 'Attack', 'damage': {'normal': 2, 'hit_count': 4}}, {'id': 'BUBBLE_BURP', 'name': 'Bubble Burp', 'intent': 'Buff + Defend', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 1}], 'block': 7} → {'id': 'SEA_KICK', 'name': 'Sea Kick', 'intent': 'Attack', 'damage': {'normal': 11, 'ascension': 13}}, {'id': 'SPINNING_KICK', 'name': 'Spinning Kick', 'intent': 'Attack', 'damage': {'normal': 2, 'hit_count': 4}}, {'id': 'BUBBLE_BURP', 'name': 'Bubble Burp', 'intent': 'Buff + Defend', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 1}], 'block': 7}; `encounters`: {'encounter_id': 'SEAPUNK_WEAK', 'encounter_name': 'Seapunk', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': True} → {'encounter_id': 'SEAPUNK_NORMAL', 'encounter_name': 'Underdocks Wildlife', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': False}, {'encounter_id': 'SEAPUNK_WEAK', 'encounter_name': 'Seapunk', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': True}
- **Skulking Colony**: `innate_powers`: {'power_id': 'HARDENED_SHELL', 'amount': 20} → {'power_id': 'HARDENED_SHELL', 'amount': 15}; `damage_values`: 3 fields → 4 fields; `min_hp_ascension`: 84 → 79; `moves`: {'id': 'INERTIA', 'name': 'Inertia', 'intent': 'Defend + Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 3}], 'block': 10}, {'id': 'ZOOM', 'name': 'Zoom', 'intent': 'Attack', 'damage': {'normal': 16, 'ascension': 17}}, {'id': 'SUPER_CRAB', 'name': 'Super Crab', 'intent': 'Attack', 'damage': {'normal': 6, 'ascension': 7, 'hit_count': 2}}, {'id': 'SMASH', 'name': 'Smash', 'intent': 'Attack + Status', 'damage': {'normal': 9, 'ascension': 11}} → {'id': 'SMASH', 'name': 'Smash', 'intent': 'Attack', 'damage': {'normal': 12, 'ascension': 13}}, {'id': 'ZOOM', 'name': 'Zoom', 'intent': 'Attack + Defend', 'block': 10, 'damage': {'normal': 14, 'ascension': 16}}, {'id': 'INERTIA', 'name': 'Inertia', 'intent': 'Attack + Buff', 'powers': [{'power_id': 'STRENGTH', 'target': 'self', 'amount': 2}], 'damage': {'normal': 9, 'ascension': 11}}, {'id': 'PIERCING_STABS', 'name': 'Piercing Stabs', 'intent': 'Attack', 'damage': {'normal': 7, 'ascension': 8, 'hit_count': 2}}; `min_hp`: 79 → 74
- **Stabbot**: `max_hp`: 28 → 23; `min_hp_ascension`: 24 → 19; `min_hp`: 23 → 18; `max_hp_ascension`: 29 → 24
- **Terror Eel**: `damage_values`: 2 fields → 2 fields; `moves`: {'id': 'CRASH', 'name': 'Crash', 'intent': 'Attack', 'damage': {'normal': 17, 'ascension': 19}}, {'id': 'ThrashMove', 'name': 'Thrashmove', 'intent': 'Attack + Buff', 'powers': [{'power_id': 'VIGOR', 'target': 'self', 'amount': 7}], 'damage': {'normal': 3, 'ascension': 4, 'hit_count': 3}}, {'id': 'STUN', 'name': 'Stun', 'intent': 'Stun'}, {'id': 'TERROR', 'name': 'Terror', 'intent': 'Debuff', 'powers': [{'power_id': 'VULNERABLE', 'target': 'player', 'amount': 99}]} → {'id': 'CRASH', 'name': 'Crash', 'intent': 'Attack', 'damage': {'normal': 16, 'ascension': 18}}, {'id': 'ThrashMove', 'name': 'Thrashmove', 'intent': 'Attack + Buff', 'powers': [{'power_id': 'VIGOR', 'target': 'self', 'amount': 6}], 'damage': {'normal': 3, 'ascension': 4, 'hit_count': 3}}, {'id': 'STUN', 'name': 'Stun', 'intent': 'Stun'}, {'id': 'TERROR', 'name': 'Terror', 'intent': 'Debuff', 'powers': [{'power_id': 'VULNERABLE', 'target': 'player', 'amount': 99}]}
- **Test Subject #C{Count}**: `damage_values`: 6 fields → 5 fields; `moves`: 8 items → 7 items
- **The Forgotten**: `damage_values`: 1 fields → none; `moves`: {'id': 'MIASMA', 'name': 'Miasma', 'intent': 'Debuff + Defend + Buff', 'powers': [{'power_id': 'DEXTERITY', 'target': 'self', 'amount': 2}], 'block': 8}, {'id': 'DREAD', 'name': 'Dread', 'intent': 'Attack', 'damage': {'normal': 15, 'ascension': 17}} → {'id': 'MIASMA', 'name': 'Miasma', 'intent': 'Debuff + Defend + Buff', 'powers': [{'power_id': 'DEXTERITY', 'target': 'self', 'amount': 2}], 'block': 8}, {'id': 'DREAD', 'name': 'Dread', 'intent': 'Attack'}
- **Toadpole**: `encounters`: {'encounter_id': 'TOADPOLES_NORMAL', 'encounter_name': 'Underdocks Wildlife', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': False}, {'encounter_id': 'TOADPOLES_WEAK', 'encounter_name': 'Toadpoles', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': True} → {'encounter_id': 'TOADPOLES_WEAK', 'encounter_name': 'Toadpoles', 'room_type': 'Monster', 'act': 'Underdocks', 'is_weak': True}
- **Waterfall Giant**: `min_hp_ascension`: 260 → 250; `min_hp`: 250 → 240
- **Zapbot**: `max_hp`: 28 → 23; `min_hp_ascension`: 24 → 19; `min_hp`: 23 → 18; `max_hp_ascension`: 29 → 24

## Potions

### Changed (3)
- **Fairy in a Bottle**: `description_raw`: When you would die, instead this potion is discarded and you heal to [blue]30... → When your HP would be reduced to [blue]0[/blue], instead this potion is disca...; `description`: When you would die, instead this potion is discarded and you heal to [blue]30... → When your HP would be reduced to [blue]0[/blue], instead this potion is disca...
- **Foul Potion**: `description_raw`: Deal [blue]{Damage}[/blue] damage to EVERYONE.
Can be thrown at the [gold]Mer... → Deal [blue]{Damage}[/blue] damage to ALL players and enemies.
Can be thrown a...; `description`: Deal [blue]12[/blue] damage to EVERYONE.
Can be thrown at the [gold]Merchant[... → Deal [blue]12[/blue] damage to ALL players and enemies.
Can be thrown at the ...
- **Liquid Memories**: `description_raw`: Put a card from your [gold]Discard Pile[/gold] into your [gold]Hand[/gold]. I... → Put a card from your [gold]Discard Pile[/gold] into your [gold]Hand[/gold]. I...; `description`: Put a card from your [gold]Discard Pile[/gold] into your [gold]Hand[/gold]. I... → Put a card from your [gold]Discard Pile[/gold] into your [gold]Hand[/gold]. I...

## Enchantments

### Added (1)
- **Inky** — name: Inky

### Removed (1)
- ~~Favored~~

### Changed (1)
- **Instinct**: `description`: Decrease the cost of this card by [blue]1[/blue]. → This card's attack damage is doubled.

## Encounters

### Added (1)
- **Underdocks Wildlife** — name: Underdocks Wildlife, act: Underdocks

### Removed (1)
- ~~Underdocks Wildlife~~

### Changed (2)
- **The Doormaker**: `monsters`: {'id': 'DOOR', 'name': 'Door'}, {'id': 'DOORMAKER', 'name': 'Doormaker'} → {'id': 'DOORMAKER', 'name': 'Doormaker'}
- **Tunneling Twosome**: `tags`: Burrower, Workers → Burrower, Chomper; `monsters`: {'id': 'BOWLBUG_EGG', 'name': 'Bowlbug (Egg)'}, {'id': 'BOWLBUG_SILK', 'name': 'Bowlbug (Silk)'}, {'id': 'TUNNELER', 'name': 'Tunneler'} → {'id': 'CHOMPER', 'name': 'Chomper'}, {'id': 'TUNNELER', 'name': 'Tunneler'}

## Events

### Changed (9)
- **Dense Vegetation**: `pages`: {'id': 'INITIAL', 'description': 'Having taken the wrong path for a good while, you find yourself in a thick jungle of [green]ferns[/green], [green]shrubs[/green], and [green]vines[/green]. Especially [green]vines[/green]. Exhaustion sets in, and a dark thought comes to mind:\n\n[sine][purple]“You are lost, unprepared, and the inevitability of death is approaching.”[/purple][/sine]\n\nWhat do you do?', 'options': [{'id': 'TRUDGE_ON', 'title': 'Trudge On', 'description': 'Remove a card from your [gold]Deck[/gold]. Lose [red]11[/red] HP.'}, {'id': 'REST', 'title': 'Rest', 'description': 'Heal [green]30% Max[/green] HP. Fight some [red]enemies[/red].'}]}, {'id': 'REST', 'description': "You're dead tired and take a nap...\n\n...only to be awoken by [gold][jitter]something wriggling around[/jitter][/gold] on top of you!", 'options': [{'id': 'FIGHT', 'title': 'Fight!', 'description': ''}]}, {'id': 'TRUDGE_ON', 'description': 'You hack and slash your way through the jungle but it goes on and on...\n\nYou sustain yourself on [green]strange fruits[/green], [orange]crunchy bugs[/orange], and drink the nectar of [aqua]glowing plants[/aqua] but you start feeling [jitter][red]paranoid...[/red][/jitter]\n\nBut then you find a clearing, a trail, and some drawings of maps on the ground.\nProblem solved.'} → {'id': 'INITIAL', 'description': 'Having taken the wrong path for a good while, you find yourself in a thick jungle of [green]ferns[/green], [green]shrubs[/green], and [green]vines[/green]. Especially [green]vines[/green]. Exhaustion sets in, and a dark thought comes to mind:\n\n[sine][purple]“You are lost, unprepared, and the inevitability of death is approaching.”[/purple][/sine]\n\nWhat do you do?', 'options': [{'id': 'TRUDGE_ON', 'title': 'Trudge On', 'description': 'Gain [blue]61-99[/blue] [gold]Gold[/gold]. Lose [red]8[/red] HP.'}, {'id': 'REST', 'title': 'Rest', 'description': 'Heal [green]30% Max[/green] HP. Fight some [red]enemies[/red].'}]}, {'id': 'REST', 'description': "You're dead tired and take a nap...\n\n...only to be awoken by [gold][jitter]something wriggling around[/jitter][/gold] on top of you!", 'options': [{'id': 'FIGHT', 'title': 'Fight!', 'description': ''}]}, {'id': 'TRUDGE_ON', 'description': 'You hack and slash your way through the jungle but it goes on and on...\n\nYou sustain yourself on [green]strange fruits[/green], [orange]crunchy bugs[/orange], and drink the nectar of [aqua]glowing plants[/aqua] but you start feeling [jitter][red]paranoid...[/red][/jitter]\n\nBut then you find a clearing, a trail, and some [gold]Gold[/gold] coins scattered on the ground. Amongst the coins are some crudely-drawn maps!\nProblem solved.'}; `options`: {'id': 'TRUDGE_ON', 'title': 'Trudge On', 'description': 'Remove a card from your [gold]Deck[/gold]. Lose [red]11[/red] HP.'}, {'id': 'REST', 'title': 'Rest', 'description': 'Heal [green]30% Max[/green] HP. Fight some [red]enemies[/red].'} → {'id': 'TRUDGE_ON', 'title': 'Trudge On', 'description': 'Gain [blue]61-99[/blue] [gold]Gold[/gold]. Lose [red]8[/red] HP.'}, {'id': 'REST', 'title': 'Rest', 'description': 'Heal [green]30% Max[/green] HP. Fight some [red]enemies[/red].'}
- **Endless Conveyor**: `description`: You lumber into a shack with a bright but crooked sign that reads:
[aqua]“END... → You lumber into a shack with a bright but crooked sign that reads:
[aqua]“END...; `pages`: {'id': 'ALL', 'description': None, 'options': [{'id': 'LOCKED', 'title': 'Broke', 'description': 'You could eat more but you are out of [gold]Gold[/gold].'}, {'id': 'CAVIAR', 'title': 'Grab Caviar off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. Gain [green]4[/green] Max HP. Continue feasting!'}, {'id': 'CLAM_ROLL', 'title': 'Grab Clam Roll off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. Heal [green]10[/green] HP. Continue feasting!'}, {'id': 'FRIED_EEL', 'title': 'Grab Fried Eel off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. Add a random Colorless Card to your [gold]Deck[/gold]. Continue feasting!'}, {'id': 'GOLDEN_FYSH', 'title': 'Grab Golden Fysh off the Belt', 'description': '[green]LUCKY WINNER![/green] Gain [blue]75[/blue] [gold]Gold[/gold].'}, {'id': 'JELLY_LIVER', 'title': 'Grab Jelly Liver off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. [gold]Transform[/gold] a card. Continue feasting!'}, {'id': 'SEAPUNK_SALAD', 'title': 'Grab Seapunk Salad off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. Add [gold]Feeding Frenzy[/gold] to your [gold]Deck[/gold]. Continue feasting!'}, {'id': 'SPICY_SNAPPY', 'title': 'Grab Spicy Snappy off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. [gold]Upgrade[/gold] a random card. Continue feasting!'}, {'id': 'SUSPICIOUS_CONDIMENT', 'title': 'Grab Suspicious Condiment off the Belt', 'description': 'Pay [red]35[/red] [gold]Gold[/gold]. Procure a random [gold]Potion[/gold]. Continue feasting!'}]}, {'id': 'GRAB_SOMETHING_OFF_THE_BELT', 'description': 'You grab the [gold]Last Dish Title[/gold] from the belt and scarf it down.\n[green]Tasty![/green]', 'options': [{'id': 'LEAVE', 'title': 'Leave', 'description': ''}]}, {'id': 'INITIAL', 'description': "You lumber into a shack with a bright but crooked sign that reads:\n[aqua]“ENDLESS FEAST - PAY WHAT YOU HUNGER!”[/aqua]\n\nInside, a [orange]willowy multi-armed chef[/orange] is deftly preparing [green]bites of food[/green] and placing them onto a [sine]winding chitinous belt[/sine].\n\nOne of the chef's arms point to a sign:\n[blue]35[/blue] [gold]Gold[/gold] each", 'options': [{'id': 'OBSERVE_CHEF', 'title': 'Observe the Chef', 'description': '[gold]Upgrade[/gold] a random card in your [gold]Deck[/gold].'}]}, {'id': 'LEAVE', 'description': "Now that you've had your fill, you continue on your way."}, {'id': 'OBSERVE_CHEF', 'description': "Keeping your distance from a seat, you loiter in the shadows of the establishment's entrance.\n\n[orange]The chef[/orange], unfazed, continues working. Studying this behavior and discipline, you seek to minimize unnecessary movement and emotion during combat."} → {'id': 'ALL', 'description': None, 'options': [{'id': 'LOCKED', 'title': 'Broke', 'description': 'You could eat more but you are out of [gold]Gold[/gold].'}, {'id': 'CAVIAR', 'title': 'Grab Caviar off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. Gain [green]4[/green] Max HP. Continue feasting!'}, {'id': 'CLAM_ROLL', 'title': 'Grab Clam Roll off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. Heal [green]10[/green] HP. Continue feasting!'}, {'id': 'FRIED_EEL', 'title': 'Grab Fried Eel off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. Add a random Colorless Card to your [gold]Deck[/gold]. Continue feasting!'}, {'id': 'GOLDEN_FYSH', 'title': 'Grab Golden Fysh off the Belt', 'description': '[green]LUCKY WINNER![/green] Gain [blue]75[/blue] [gold]Gold[/gold].'}, {'id': 'JELLY_LIVER', 'title': 'Grab Jelly Liver off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. [gold]Transform[/gold] a card. Continue feasting!'}, {'id': 'SEAPUNK_SALAD', 'title': 'Grab Seapunk Salad off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. Add [gold]Feeding Frenzy[/gold] to your [gold]Deck[/gold]. Continue feasting!'}, {'id': 'SPICY_SNAPPY', 'title': 'Grab Spicy Snappy off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. [gold]Upgrade[/gold] a random card. Continue feasting!'}, {'id': 'SUSPICIOUS_CONDIMENT', 'title': 'Grab Suspicious Condiment off the Belt', 'description': 'Pay [red]40[/red] [gold]Gold[/gold]. Procure a random [gold]Potion[/gold]. Continue feasting!'}]}, {'id': 'GRAB_SOMETHING_OFF_THE_BELT', 'description': 'You grab the [gold]Last Dish Title[/gold] from the belt and scarf it down.\n[green]Tasty![/green]', 'options': [{'id': 'LEAVE', 'title': 'Leave', 'description': ''}]}, {'id': 'INITIAL', 'description': "You lumber into a shack with a bright but crooked sign that reads:\n[aqua]“ENDLESS FEAST - PAY WHAT YOU HUNGER!”[/aqua]\n\nInside, a [orange]willowy multi-armed chef[/orange] is deftly preparing [green]bites of food[/green] and placing them onto a [sine]winding chitinous belt[/sine].\n\nOne of the chef's arms point to a sign:\n[blue]40[/blue] [gold]Gold[/gold] each", 'options': [{'id': 'OBSERVE_CHEF', 'title': 'Observe the Chef', 'description': '[gold]Upgrade[/gold] a random card in your [gold]Deck[/gold].'}]}, {'id': 'LEAVE', 'description': "Now that you've had your fill, you continue on your way."}, {'id': 'OBSERVE_CHEF', 'description': "Keeping your distance from a seat, you loiter in the shadows of the establishment's entrance.\n\n[orange]The chef[/orange], unfazed, continues working. Studying this behavior and discipline, you seek to minimize unnecessary movement and emotion during combat."}
- **Hungry for Mushrooms**: `pages`: {'id': 'BIG_MUSHROOM', 'description': 'You bite into the [orange]Big Mushroom[/orange]. Its flesh is firm, starchy, and satisfying. The more you eat, the hungrier you become, as if the mushroom is feeding on your hunger.\n\n[sine]So yummy... you enter a [red]food coma[/red].[/sine]\nThis gluttony will cost you.'}, {'id': 'FRAGRANT_MUSHROOM', 'description': 'You sample the [green]Fragrant One[/green], a small woody mushroom with a delicate scent of shellfish...\n\nA burst of energy spurs you to run, jump, and [gold]rigorously train[/gold]!\nThen, a sudden [red][jitter]stabbing pain[/jitter][/red] hits you as the living fungi struggles within you during its brief final moments.'}, {'id': 'INITIAL', 'description': "[sine]How long has it been since you ate?\n...wait, what's that fantastic smell?[/sine]\n\nFollowing the scent, you reach a cozy campground with all manner of [green]tasty mushrooms[/green] being cooked! You don't consider the safety of eating these mushrooms because you are so hungry.\n(So hungry that you don't notice the dead adventurer)", 'options': [{'id': 'BIG_MUSHROOM', 'title': 'Big Mushroom', 'description': 'Obtain [gold]Big Mushroom[/gold]. Upon pickup, raise your Max HP by [blue]20[/blue]. At the start of each combat, draw [blue]2[/blue] fewer cards.'}, {'id': 'FRAGRANT_MUSHROOM', 'title': 'Fragrant Mushroom', 'description': 'Obtain [gold]Fragrant Mushroom[/gold]. Upon pickup, lose [red]15[/red] HP and [gold]Upgrade[/gold] [blue]3[/blue] random cards.'}]}, {'id': 'MEDLEY', 'description': 'The [green]medley of mushrooms[/green] looks the most appetizing so you go for that.\n\n[red][jitter]“MY MUSHROOMS!!”[/jitter][/red]\n\nThe adventurer, presumably dead, attacks you! You knock them out, and with a seasoning of guilt, finish the rest of the fine meal.'} → {'id': 'BIG_MUSHROOM', 'description': 'You bite into the [orange]Big Mushroom[/orange]. Its flesh is firm, starchy, and satisfying. The more you eat, the hungrier you become, as if the mushroom is feeding on your hunger.\n\n[sine]So yummy... you enter a [red]food coma[/red].[/sine]\nThis gluttony will cost you.'}, {'id': 'FRAGRANT_MUSHROOM', 'description': 'You sample the [green]Fragrant One[/green], a small woody mushroom with a delicate scent of shellfish...\n\nA burst of energy spurs you to run, jump, and [gold]rigorously train[/gold]!\nThen, a sudden [red][jitter]stabbing pain[/jitter][/red] hits you as the living fungi struggles within you during its brief final moments.'}, {'id': 'INITIAL', 'description': "[sine]How long has it been since you ate?\n...wait, what's that fantastic smell?[/sine]\n\nFollowing the scent, you reach a cozy campground with all manner of [green]tasty mushrooms[/green] being cooked! You don't consider the safety of eating these mushrooms because you are so hungry.\n(So hungry that you don't notice the dead adventurer)", 'options': [{'id': 'BIG_MUSHROOM', 'title': 'Big Mushroom', 'description': 'Obtain [gold]Big Mushroom[/gold]. Upon pickup, raise your Max HP by [blue]20[/blue]. At the start of each combat, draw [blue]2[/blue] fewer cards.'}, {'id': 'FRAGRANT_MUSHROOM', 'title': 'Fragrant Mushroom', 'description': 'Obtain [gold]Fragrant Mushroom[/gold]. Upon pickup, lose [blue]15[/blue] HP and [gold]Upgrade[/gold] [blue]2[/blue] random cards.'}]}, {'id': 'MEDLEY', 'description': 'The [green]medley of mushrooms[/green] looks the most appetizing so you go for that.\n\n[red][jitter]“MY MUSHROOMS!!”[/jitter][/red]\n\nThe adventurer, presumably dead, attacks you! You knock them out, and with a seasoning of guilt, finish the rest of the fine meal.'}; `options`: {'id': 'BIG_MUSHROOM', 'title': 'Big Mushroom', 'description': 'Obtain [gold]Big Mushroom[/gold]. Upon pickup, raise your Max HP by [blue]20[/blue]. At the start of each combat, draw [blue]2[/blue] fewer cards.'}, {'id': 'FRAGRANT_MUSHROOM', 'title': 'Fragrant Mushroom', 'description': 'Obtain [gold]Fragrant Mushroom[/gold]. Upon pickup, lose [red]15[/red] HP and [gold]Upgrade[/gold] [blue]3[/blue] random cards.'} → {'id': 'BIG_MUSHROOM', 'title': 'Big Mushroom', 'description': 'Obtain [gold]Big Mushroom[/gold]. Upon pickup, raise your Max HP by [blue]20[/blue]. At the start of each combat, draw [blue]2[/blue] fewer cards.'}, {'id': 'FRAGRANT_MUSHROOM', 'title': 'Fragrant Mushroom', 'description': 'Obtain [gold]Fragrant Mushroom[/gold]. Upon pickup, lose [blue]15[/blue] HP and [gold]Upgrade[/gold] [blue]2[/blue] random cards.'}
- **Morphic Grove**: `pages`: {'id': 'GROUP', 'description': 'You greet the chittering [aqua]Morphics[/aqua] and they embrace you into their crystally arms.\n\nThey share their combined knowledge and inject you with [sine]Morphic Magic[/sine], changing your nature... Such lovely creatures, these [aqua]Morphics[/aqua].\n\n[red]One of them stole your[/red] [gold]gold[/gold][red].[/red]'}, {'id': 'INITIAL', 'description': 'You enter a grove of [green]crystalline trees[/green], and they begin to [jitter]quiver excitedly[/jitter]!\nA chorus of [sine]hellos and welcomes[/sine] bombard you as a group of [aqua]Morphics[/aqua] [jitter]burst[/jitter] forth from trees.\n\nOne of the [aqua]Morphics[/aqua] is fidgeting in the corner, clearly not as sociable as the others.\n\nApproach the group or the loner?', 'options': [{'id': 'GROUP', 'title': 'Group', 'description': 'Lose [red]100[/red] [gold]Gold[/gold]. [gold]Transform[/gold] [blue]2[/blue] cards.'}, {'id': 'LONER', 'title': 'Loner', 'description': 'Gain [green]5[/green] Max HP.'}]}, {'id': 'LONER', 'description': 'You reach out a hand to the lone [aqua]Morphic[/aqua], sympathizing with its nature.\nIt gifts you a tiny crystal fruit, and you consume it, as is custom.\n\nThe fruit clarifies your mind and purpose. You give thanks, then make your way onwards.'} → {'id': 'GROUP', 'description': 'You greet the chittering [aqua]Morphics[/aqua] and they embrace you into their crystally arms.\n\nThey share their combined knowledge and inject you with [sine]Morphic Magic[/sine], changing your nature... Such lovely creatures, these [aqua]Morphics[/aqua].\n\n[red]One of them stole your[/red] [gold]gold[/gold][red].[/red]'}, {'id': 'INITIAL', 'description': 'You enter a grove of [green]crystalline trees[/green], and they begin to [jitter]quiver excitedly[/jitter]!\nA chorus of [sine]hellos and welcomes[/sine] bombard you as a group of [aqua]Morphics[/aqua] [jitter]burst[/jitter] forth from trees.\n\nOne of the [aqua]Morphics[/aqua] is fidgeting in the corner, clearly not as sociable as the others.\n\nApproach the group or the loner?', 'options': [{'id': 'GROUP', 'title': 'Group', 'description': 'Lose [red]ALL[/red] of your [gold]Gold[/gold]. [gold]Transform[/gold] [blue]2[/blue] cards.'}, {'id': 'LONER', 'title': 'Loner', 'description': 'Gain [green]5[/green] Max HP.'}]}, {'id': 'LONER', 'description': 'You reach out a hand to the lone [aqua]Morphic[/aqua], sympathizing with its nature.\nIt gifts you a tiny crystal fruit, and you consume it, as is custom.\n\nThe fruit clarifies your mind and purpose. You give thanks, then make your way onwards.'}; `options`: {'id': 'GROUP', 'title': 'Group', 'description': 'Lose [red]100[/red] [gold]Gold[/gold]. [gold]Transform[/gold] [blue]2[/blue] cards.'}, {'id': 'LONER', 'title': 'Loner', 'description': 'Gain [green]5[/green] Max HP.'} → {'id': 'GROUP', 'title': 'Group', 'description': 'Lose [red]ALL[/red] of your [gold]Gold[/gold]. [gold]Transform[/gold] [blue]2[/blue] cards.'}, {'id': 'LONER', 'title': 'Loner', 'description': 'Gain [green]5[/green] Max HP.'}
- **Neow**: `relics`: 20 items → 22 items
- **Spirit Grafter**: `pages`: {'id': 'INITIAL', 'description': 'Above, a cocoon is [jitter]shaking and wriggling[/jitter], about to burst forth!\n\n...it stops wriggling. [orange][sine]The cocoon ignites[/sine][/orange]! [jitter]What is going on?[/jitter]\nIn a flash of [gold]light[/gold] and [red]flame[/red], a [orange]Spirit Grafter[/orange] rushes into you, threatening to merge with your being to become complete.', 'options': [{'id': 'LET_IT_IN', 'title': 'Let It In', 'description': 'Heal [green]25[/green] HP. Add [gold]Metamorphosis[/gold] to your [gold]Deck[/gold].'}, {'id': 'REJECTION', 'title': 'Rejection', 'description': 'Lose [red]9[/red] HP. Remove a card from your [gold]Deck[/gold].'}]}, {'id': 'LET_IT_IN', 'description': 'The [orange]Spirit Grafter[/orange] merges with you. The vital kindred spirit swiftly [green]heals[/green] you up.\n\nYou are [blue]reborn[/blue].'}, {'id': 'REJECTION', 'description': 'The [orange]Spirit Grafter[/orange] is easily stopped by your will.\n\nHowever, it repeatedly flies into you, desperate for a host. Its strength runs out and it dissolves with a [purple][sine]poof[/sine][/purple].\n\n[sine]A fleeting spirit.[/sine]'} → {'id': 'INITIAL', 'description': 'Above, a cocoon is [jitter]shaking and wriggling[/jitter], about to burst forth!\n\n...it stops wriggling. [orange][sine]The cocoon ignites[/sine][/orange]! [jitter]What is going on?[/jitter]\nIn a flash of [gold]light[/gold] and [red]flame[/red], a [orange]Spirit Grafter[/orange] rushes into you, threatening to merge with your being to become complete.', 'options': [{'id': 'LET_IT_IN', 'title': 'Let It In', 'description': 'Heal [green]25[/green] HP. Add [gold]Metamorphosis[/gold] to your [gold]Deck[/gold].'}, {'id': 'REJECTION', 'title': 'Rejection', 'description': 'Lose [red]10[/red] HP. [gold]Upgrade[/gold] a card.'}]}, {'id': 'LET_IT_IN', 'description': 'The [orange]Spirit Grafter[/orange] merges with you. The vital kindred spirit swiftly [green]heals[/green] you up.\n\nYou are [blue]reborn[/blue].'}, {'id': 'REJECTION', 'description': 'The [orange]Spirit Grafter[/orange] is easily stopped by your will.\n\nHowever, it repeatedly flies into you, desperate for a host. Its strength runs out and it dissolves with a [purple][sine]poof[/sine][/purple].\n\n[sine]A fleeting spirit.[/sine]'}; `options`: {'id': 'LET_IT_IN', 'title': 'Let It In', 'description': 'Heal [green]25[/green] HP. Add [gold]Metamorphosis[/gold] to your [gold]Deck[/gold].'}, {'id': 'REJECTION', 'title': 'Rejection', 'description': 'Lose [red]9[/red] HP. Remove a card from your [gold]Deck[/gold].'} → {'id': 'LET_IT_IN', 'title': 'Let It In', 'description': 'Heal [green]25[/green] HP. Add [gold]Metamorphosis[/gold] to your [gold]Deck[/gold].'}, {'id': 'REJECTION', 'title': 'Rejection', 'description': 'Lose [red]10[/red] HP. [gold]Upgrade[/gold] a card.'}
- **Tinker Time**: `pages`: {'id': 'CHOOSE_CARD_TYPE', 'description': '“What kind of tool will help you [red][jitter]kill everyone[/jitter][/red]?”', 'options': [{'id': 'ATTACK', 'title': 'Weapon', 'description': 'Make an Attack.'}, {'id': 'SKILL', 'title': 'Protector', 'description': 'Make a Skill.'}, {'id': 'POWER', 'title': 'Gadget', 'description': 'Make a Power.'}]}, {'id': 'CHOOSE_RIDER', 'description': '“Excellent choice! Now what should it [sine]DO[/sine]?”\nThe [orange]scientist[/orange] rubs her hands together with glee.', 'options': [{'id': 'SAPPING', 'title': 'Sapping', 'description': 'Apply [blue]2[/blue] [gold]Weak[/gold]. Apply [blue]2[/blue] [gold]Vulnerable[/gold].'}, {'id': 'VIOLENCE', 'title': 'Violence', 'description': 'Hits [blue]2[/blue] additional times.'}, {'id': 'CHOKING', 'title': 'Choking', 'description': 'Whenever you play a card this turn, the enemy loses [blue]6[/blue] HP.'}, {'id': 'ENERGIZED', 'title': 'Energized', 'description': 'Gain [energy:2].'}, {'id': 'WISDOM', 'title': 'Wisdom', 'description': 'Draw [blue]3[/blue] cards.'}, {'id': 'CHAOS', 'title': 'Chaos', 'description': 'Add a random card into your [gold]Hand[/gold]. It costs [blue]0[/blue] [energy:1] this turn.'}, {'id': 'EXPERTISE', 'title': 'Expertise', 'description': 'Gain [blue]2[/blue] [gold]Strength[/gold]. Gain [blue]2[/blue] [gold]Dexterity[/gold].'}, {'id': 'CURIOUS', 'title': 'Curious', 'description': 'Powers cost [blue]1[/blue] [energy:1] less.'}, {'id': 'IMPROVEMENT', 'title': 'Improvement', 'description': 'At the end of combat, [gold]Upgrade[/gold] a random card.'}]}, {'id': 'DONE', 'description': '“Whew! All done. This is for you! Now get out there and [red][jitter]slaughter[/jitter][/red]!!”\n\nLittle did you know, that [orange]scientist[/orange] went on to create hundreds of weapons, resulting in several thousand deaths within the Spire.'}, {'id': 'INITIAL', 'description': 'Navigating through an [red][sine]endless sea of corpses[/sine][/red], you find a [orange]mad scientist[/orange] scavenging for various scraps.\n\n“Yes. Hi, hello! You look like a capable fighter... I need a tester for my next [green]atrocity device[/green]! How about it?”', 'options': [{'id': 'CHOOSE_CARD_TYPE', 'title': 'Accept', 'description': 'Create a custom card to add to your [gold]Deck[/gold].'}]} → {'id': 'CHOOSE_CARD_TYPE', 'description': '“What kind of tool will help you [red][jitter]kill everyone[/jitter][/red]?”', 'options': [{'id': 'ATTACK', 'title': 'Weapon', 'description': 'Make an Attack.'}, {'id': 'SKILL', 'title': 'Protector', 'description': 'Make a Skill.'}, {'id': 'POWER', 'title': 'Gadget', 'description': 'Make a Power.'}]}, {'id': 'CHOOSE_RIDER', 'description': '“Excellent choice! Now what should it [sine]DO[/sine]?”\nThe [orange]scientist[/orange] rubs her hands together with glee.', 'options': [{'id': 'SAPPING', 'title': 'Sapping', 'description': 'Apply [blue]2[/blue] [gold]Weak[/gold]. Apply [blue]2[/blue] [gold]Vulnerable[/gold].'}, {'id': 'VIOLENCE', 'title': 'Violence', 'description': 'Hits [blue]2[/blue] additional times.'}, {'id': 'CHOKING', 'title': 'Choking', 'description': 'Whenever you play a card this turn, the enemy loses [blue]6[/blue] HP.'}, {'id': 'ENERGIZED', 'title': 'Energized', 'description': 'Gain [energy:2].'}, {'id': 'WISDOM', 'title': 'Wisdom', 'description': 'Draw [blue]3[/blue] cards.'}, {'id': 'CHAOS', 'title': 'Chaos', 'description': "Add a random card into your [gold]Hand[/gold]. It's free to play this turn."}, {'id': 'EXPERTISE', 'title': 'Expertise', 'description': 'Gain [blue]2[/blue] [gold]Strength[/gold]. Gain [blue]2[/blue] [gold]Dexterity[/gold].'}, {'id': 'CURIOUS', 'title': 'Curious', 'description': 'Powers cost [blue]1[/blue] [energy:1] less.'}, {'id': 'IMPROVEMENT', 'title': 'Improvement', 'description': 'At the end of combat, [gold]Upgrade[/gold] a random card.'}]}, {'id': 'DONE', 'description': '“Whew! All done. This is for you! Now get out there and [red][jitter]slaughter[/jitter][/red]!!”\n\nLittle did you know, that [orange]scientist[/orange] went on to create hundreds of weapons, resulting in several thousand deaths within the Spire.'}, {'id': 'INITIAL', 'description': 'Navigating through an [red][sine]endless sea of corpses[/sine][/red], you find a [orange]mad scientist[/orange] scavenging for various scraps.\n\n“Yes. Hi, hello! You look like a capable fighter... I need a tester for my next [green]atrocity device[/green]! How about it?”', 'options': [{'id': 'CHOOSE_CARD_TYPE', 'title': 'Accept', 'description': 'Create a custom card to add to your [gold]Deck[/gold].'}]}
- **Waterlogged Scriptorium**: `pages`: {'id': 'BLOODY_INK', 'description': 'The [aqua]scribe[/aqua] carefully picks up the vial filled with a [red]bright red ink[/red] and gives it a shake, then gestures with their own hand a dipping motion.\n\nYou dip your fingers into the ink and a [green][jitter]jolt of vitality[/jitter][/green] courses through you!\n\nPleased with your reaction, the [aqua]scribe[/aqua] gives a polite bow and waves you goodbye.'}, {'id': 'INITIAL', 'description': 'Navigating the murky passages, you stumble upon a [aqua]withered figure[/aqua] working a small shop. The multitude of shelves are [sine]stuffed[/sine] full of damp scrolls and parchment.\n\nNoticing a patron has entered, the [aqua]scribe-shopkeeper[/aqua] snaps to attention and gestures at some [gold]implements[/gold] arranged on a desk.', 'options': [{'id': 'BLOODY_INK', 'title': 'Bloody Ink', 'description': 'Gain [green]6[/green] Max HP.'}, {'id': 'TENTACLE_QUILL', 'title': 'Tentacle Quill', 'description': 'Pay [red]65[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] a card with [purple]Steady[/purple].'}, {'id': 'TENTACLE_QUILL_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]65[/blue] [gold]Gold[/gold].'}, {'id': 'PRICKLY_SPONGE', 'title': 'Prickly Sponge', 'description': 'Pay [red]155[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] [blue]2[/blue] cards with [purple]Steady[/purple].'}, {'id': 'PRICKLY_SPONGE_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]155[/blue] [gold]Gold[/gold].'}]}, {'id': 'PRICKLY_SPONGE', 'description': 'The [aqua]scribe[/aqua] grabs the [gold]prickly sponge[/gold] (it squeaks) and dabs it across your scrolls.\n\n[jitter][blue]*squeak squeak squeak*[/blue][/jitter]\n\nThe prickly texture leaves behind [purple][sine]shimmering marks[/sine][/purple] that seem to stabilize the ink...'}, {'id': 'TENTACLE_QUILL', 'description': 'The [aqua]scribe[/aqua] lifts the [jitter][gold]wriggly quill[/gold][/jitter] and with swift, practiced movements, etches a strange mark unto your head.\n\nThe mark [purple][sine]glows bright[/sine][/purple], then vanishes...'} → {'id': 'BLOODY_INK', 'description': 'The [aqua]scribe[/aqua] carefully picks up the vial filled with a [red]bright red ink[/red] and gives it a shake, then gestures with their own hand a dipping motion.\n\nYou dip your fingers into the ink and a [green][jitter]jolt of vitality[/jitter][/green] courses through you!\n\nPleased with your reaction, the [aqua]scribe[/aqua] gives a polite bow and waves you goodbye.'}, {'id': 'INITIAL', 'description': 'Navigating the murky passages, you stumble upon a [aqua]withered figure[/aqua] working a small shop. The multitude of shelves are [sine]stuffed[/sine] full of damp scrolls and parchment.\n\nNoticing a patron has entered, the [aqua]scribe-shopkeeper[/aqua] snaps to attention and gestures at some [gold]implements[/gold] arranged on a desk.', 'options': [{'id': 'BLOODY_INK', 'title': 'Bloody Ink', 'description': 'Gain [green]6[/green] Max HP.'}, {'id': 'TENTACLE_QUILL', 'title': 'Tentacle Quill', 'description': 'Pay [red]55[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] a card with [purple]Steady[/purple].'}, {'id': 'TENTACLE_QUILL_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]55[/blue] [gold]Gold[/gold].'}, {'id': 'PRICKLY_SPONGE', 'title': 'Prickly Sponge', 'description': 'Pay [red]99[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] [blue]2[/blue] cards with [purple]Steady[/purple].'}, {'id': 'PRICKLY_SPONGE_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]99[/blue] [gold]Gold[/gold].'}]}, {'id': 'PRICKLY_SPONGE', 'description': 'The [aqua]scribe[/aqua] grabs the [gold]prickly sponge[/gold] (it squeaks) and dabs it across your scrolls.\n\n[jitter][blue]*squeak squeak squeak*[/blue][/jitter]\n\nThe prickly texture leaves behind [purple][sine]shimmering marks[/sine][/purple] that seem to stabilize the ink...'}, {'id': 'TENTACLE_QUILL', 'description': 'The [aqua]scribe[/aqua] lifts the [jitter][gold]wriggly quill[/gold][/jitter] and with swift, practiced movements, etches a strange mark unto your head.\n\nThe mark [purple][sine]glows bright[/sine][/purple], then vanishes...'}; `options`: {'id': 'BLOODY_INK', 'title': 'Bloody Ink', 'description': 'Gain [green]6[/green] Max HP.'}, {'id': 'TENTACLE_QUILL', 'title': 'Tentacle Quill', 'description': 'Pay [red]65[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] a card with [purple]Steady[/purple].'}, {'id': 'TENTACLE_QUILL_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]65[/blue] [gold]Gold[/gold].'}, {'id': 'PRICKLY_SPONGE', 'title': 'Prickly Sponge', 'description': 'Pay [red]155[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] [blue]2[/blue] cards with [purple]Steady[/purple].'}, {'id': 'PRICKLY_SPONGE_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]155[/blue] [gold]Gold[/gold].'} → {'id': 'BLOODY_INK', 'title': 'Bloody Ink', 'description': 'Gain [green]6[/green] Max HP.'}, {'id': 'TENTACLE_QUILL', 'title': 'Tentacle Quill', 'description': 'Pay [red]55[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] a card with [purple]Steady[/purple].'}, {'id': 'TENTACLE_QUILL_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]55[/blue] [gold]Gold[/gold].'}, {'id': 'PRICKLY_SPONGE', 'title': 'Prickly Sponge', 'description': 'Pay [red]99[/red] [gold]Gold[/gold]. [gold]Enchant[/gold] [blue]2[/blue] cards with [purple]Steady[/purple].'}, {'id': 'PRICKLY_SPONGE_LOCKED', 'title': 'Locked', 'description': 'Requires [blue]99[/blue] [gold]Gold[/gold].'}
- **Whispering Hollow**: `pages`: {'id': 'GOLD', 'description': 'You scatter some [gold]gold[/gold] at the base of the tree and two of the clay vessels drop to the floor soundlessly.\n\nThey break open, and contain [green]perfectly intact potions[/green] within.\n\nYou nab the potions and flee.'}, {'id': 'HUG', 'description': 'The [blue][sine]whispering[/sine][/blue] compels you to give it [gold]gold[/gold] but you resist and give the tree a big hug instead!\n\nIt [red][jitter]thrashes about[/jitter][/red], scratching you with its branches, but eventually calms down. The [green]tree-hugging experience[/green] [gold]transforms[/gold] you.\n\n[purple][sine]...make hug.....?[/sine][/purple]'}, {'id': 'INITIAL', 'description': 'Making your way through a [red]hollow of dead trees[/red] you happen upon a single bone-white tree. Clay baubles hang off its branches, which curve inward like protective ribs.\n\nSuch a [purple]creepy tree[/purple]. It whispers.\n\n[sine][blue]...make exchange.....[/blue][/sine]', 'options': [{'id': 'GOLD', 'title': 'Exchange Gold', 'description': 'Lose [red]50[/red] [gold]Gold[/gold]. Procure [blue]2[/blue] random [gold]Potions[/gold].'}, {'id': 'HUG', 'title': 'Hug the Tree', 'description': 'Lose [red]9[/red] HP. Choose a card to [gold]Transform[/gold].'}]} → {'id': 'GOLD', 'description': 'You scatter some [gold]gold[/gold] at the base of the tree and two of the clay vessels drop to the floor soundlessly.\n\nThey break open, and contain [green]perfectly intact potions[/green] within.\n\nYou nab the potions and flee.'}, {'id': 'HUG', 'description': 'The [blue][sine]whispering[/sine][/blue] compels you to give it [gold]gold[/gold] but you resist and give the tree a big hug instead!\n\nIt [red][jitter]thrashes about[/jitter][/red], scratching you with its branches, but eventually calms down. The [green]tree-hugging experience[/green] [gold]transforms[/gold] you.\n\n[purple][sine]...make hug.....?[/sine][/purple]'}, {'id': 'INITIAL', 'description': 'Making your way through a [red]hollow of dead trees[/red] you happen upon a single bone-white tree. Clay baubles hang off its branches, which curve inward like protective ribs.\n\nSuch a [purple]creepy tree[/purple]. It whispers.\n\n[sine][blue]...make exchange.....[/blue][/sine]', 'options': [{'id': 'GOLD', 'title': 'Exchange Gold', 'description': 'Lose [red]26-44[/red] [gold]Gold[/gold]. Procure [blue]2[/blue] random [gold]Potions[/gold].'}, {'id': 'HUG', 'title': 'Hug the Tree', 'description': 'Lose [red]9[/red] HP. Choose a card to [gold]Transform[/gold].'}]}; `options`: {'id': 'GOLD', 'title': 'Exchange Gold', 'description': 'Lose [red]50[/red] [gold]Gold[/gold]. Procure [blue]2[/blue] random [gold]Potions[/gold].'}, {'id': 'HUG', 'title': 'Hug the Tree', 'description': 'Lose [red]9[/red] HP. Choose a card to [gold]Transform[/gold].'} → {'id': 'GOLD', 'title': 'Exchange Gold', 'description': 'Lose [red]26-44[/red] [gold]Gold[/gold]. Procure [blue]2[/blue] random [gold]Potions[/gold].'}, {'id': 'HUG', 'title': 'Hug the Tree', 'description': 'Lose [red]9[/red] HP. Choose a card to [gold]Transform[/gold].'}

## Powers (257 → 260)

### Added (5)
- **Borrowed Time** — name: Borrowed Time, type: Debuff
- **Grasp** — name: Grasp, type: Buff
- **Hunger** — name: Hunger, type: Buff
- **No Energy Gain** — name: No Energy Gain, type: Debuff
- **Scrutiny** — name: Scrutiny, type: Buff

### Removed (2)
- ~~Blade of Ink~~
- ~~Door Revival~~

### Changed (4)
- **Arsenal**: `description`: Whenever you play a Colorless card, gain [blue]1[/blue] [gold]Strength[/gold]. → Whenever you create a card, gain [blue]1[/blue] [gold]Strength[/gold].
- **Beacon of Hope**: `stack_type`: Counter → Single
- **Crab Rage**: `description`: When an ally dies, [gold]this creature[/gold] gains [blue]5[/blue] [gold]Stre... → When an ally dies, [gold]this creature[/gold] gains [blue]6[/blue] [gold]Stre...
- **Sword Sage**: `description`: Increase the cost of [gold]Sovereign Blade[/gold] by [blue]1[/blue]. [gold]So... → [gold]Sovereign Blade[/gold] now hits [blue]1[/blue] additional time.

## Afflictions (6 → 8)

### Added (2)
- **Devoured**
- **Weighted**

---
**Summary:** +11 added, -5 removed, ~323 changed
Spire Codex Update Pipeline
  OS: Darwin (arm64)
  Python: 3.10.4
  Project: /Users/peterlord/Documents/Projects/spire-codex
  $ /usr/local/bin/python3 /Users/peterlord/Documents/Projects/spire-codex/tools/diff_data.py /Users/peterlord/Documents/Projects/spire-codex/data/eng /Users/peterlord/Documents/Projects/spire-codex/data-beta/eng --format md
