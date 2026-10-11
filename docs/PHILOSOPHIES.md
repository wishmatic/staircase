# Philosophies/Decisions

## Responding

The problem: if the LLM is not allowed to act for your character, it will often come up with a lengthy reply that does
not give you room to react to things as they happen or as they're stated.

The solution: the agent can think, and when it's ready to reply, it can send a message with a tool call. This will
_interrupt_ the roleplay which allows the user to either hit a "continue" button or type a response. The agent will
receive this message, and the agent will not lose its thinking block, allowing it to continue with whatever it had
planned.

## Skill Checks

The problems: skill checks have some flaws. Either they roll by the agent without input, or they stop roleplay dead
when the player needs to roll before something can happen.

The solution: interpret every single thing the player says with an LLM (not a classification model like Jev; read on
for why). This way, the player can roll multiple dice whenever they need to as determined by the engine.

### Additionally

The player determines skills entirely.

## Locations

The problem: keeping track of location is challenging for the LLM, and locations it invents are often derivative,
contrived, and/or boring.

The solution: define locations ahead of time, also via LLM, and define a node-based map to travel between areas
without calling the LLM.

### Additionally

"Danger Level" is a concept based on location and time (explained next). Travel duration also influences the likelihood
of a random event when travelling from place to place.

## Date and Time

The problem: date and time are both complex constructs that the LLM often has trouble keeping track of. If it can keep
track of it, it often doesn't know how fast or slow to advance time. It also often isn't fun; time is fun, but date is
not.

The solution: don't include date at all, and make time part of the game engine, not something the agent needs to know
about. The agent sees the current phase and can reduce "fatigue" values. Running out of fatigue values moves to the
next phase of the day, e.g. Early Morning to Late Morning.

### Additionally

The player has the choice to "wait", which may roll an event depending on the current scene's Danger Level.

## Currencies

The problem: fantasy currency maths is annoying to keep track of; the player hardly remembers exactly how much money
they actually have.

The solution: a single weightless integer currency called "pieces". References to it are handwaved away.

## Inventory

The problem: like with location, as items are invented over time, the storyteller doesn't know how important some items
are, forgets about others, and generally makes dealing with inventory annoying. This applies to armour and weapons,
too.

The solution: the agent realises it is in a game and no longer can manage item use. Instead of dramatically
illustrating you only have two potions left, it now doesn't even know how many potions you have as it won't know what
that even means without a lengthy system prompt.

### Additionally

There exist three types of inventory: equipment, consumables, and key items.

All except key items must conform to one of the items on a Classification Table. This table includes "baseline" items
that any unique items are a variation of, e.g. the baseline might be Iron Sword +2, and the unique item the LLM
invents might be Sword of the Fallen Star. The player will be able to see the baseline item in a tooltip.

Armour and weapons are full sets. No mixing and matching of armour pieces and weapons on each hand.

Key items are purely quest items, and you are not expected to have many of them. "Tent" and travel items (mounts, for
instance) are also equipment.

Consumables are refilled at rest points on long rest.

## Needs

The problem: while fun at first, managing hunger, thirst, and the need to pee is not fun to many, and can kill the pace
of a good story, even slice of life, in its tracks.

The solution: don't include it. Sleeping is interesting thematically as it requires finding a safe place to stay, e.g.
nighttime is dangerous. However, that's handled by the time system.

## Combat

The problem: combat is "player always wins" or "player always loses" in typical LLM handwaved combat scenarios.

The solution: don't let the LLM decide. We've created an actual combat system/minigame that reports the outcome of the
fight to the LLM. Not all fights end in total victory or death.

## Lorebook

The problem: lorebooks are complex and the layperson doesn't know what regular expressions are.

The solution: let the agent handle it via RAG and a simple "match case-insensitive" keyword approach.
