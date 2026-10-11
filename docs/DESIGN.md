# Design Documentation

This document is to be deleted once it has been implemented as-written and tested on all supported device aspect ratios
and viewport sizes.

## Main Page Flow

- Authorisation page. Login is straightforward; just email and password.
  - I might expand this in the future as it could be a security issue if people are storing their LLM keys in-database.
- Mobile-first design. Sidebar of status, and right side with large space for content. Sidebar must contain
  collapsible sections as it must contain all information on the HUD. The content part must be able to hold all action,
  including messages, message history, combat, and other elements that may appear over the message content.
- On top of that, the options menu (like a pause menu of a video game) contains configuration in different sidebar tabs
  that can be used to redo the first time setup (or tweak settings).

## First Time Setup

It is a good UX to create a wizard which allows first-time setup.

- Wizard A: provider setup or import.
- Wizard B: world setup or import.
- Wizard C: character setup or import.
- Wizard D: style rule setup or import.

The wizard then gives a button to review all changes.
