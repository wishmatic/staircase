# Staircase

> This repository is not fully read to be used. Documentation does not yet reflect the truth.

FOSS LLM-powered opinionated story/scenario player.

## Features

- UX as a priority.
  - A lot of the problems with SillyTavern, in our opinion, are just how hard it is to get set up.
- Image generation as a first-class citizen via popular providers.
- Custom MCP connectors for any agent you want.
- Recursive low-compression summaries with actual RAG (BYO embeddings model and reranker).
- As wide and deep as you like; lorebooks, maps, and so on are optional, easy-to-use features.
  - Lorebooks automatically create links when they're detected in output.

### Okay, but what actually sets you apart on a gameplay level?

Details can be found in [Philosophies](./docs/PHILOSOPHIES.md), but in short:

- We lean much more into the game engine than the LLM part.
  - This is a full game engine with LLMs handling many parts of it. This means you can move around actual locations,
    use actual items, and take part in combat without any LLM calls. When an LLM does need to be called, it has a log
    of everything that happened recently.
  - Souls-like flask system for healing, unified stamina/mana system, archery/firearms with ammunition, currency system,
    travelling a world map, mechanical time of day, item economy, combat engine, and more!
- Skill checks are made by a fast agent before your input is sent to the LLM.
- Dialogue is not just plain LLM output but a chained tool call. This way, you actually get to interject when the
  agent goes on monologues and doesn't give you a chance to roleplay.
- We cut anything that doesn't test well (feel good) personally to us.
  - While this may initially feel more restrictive, it leads to fewer points of failure and means anything we do
    include is polished to a mirror's shine.
- We allow editing the world lorebook granularly and do the same with characters.
- Lightweight scorer agent to fix rule-following by the agents.

## Getting Started

To be written.

### Desktop App

We have plans in the future to expand Staircase to run self-contained in a packaged Go-based executable. For this to
happen, we need to have the Go binary also host the pre-compiled static files and act as a simple (but secure) file
server.

### Mobile App

We will not support a mobile deployment. If you want this, deploy as a web app and add the PWA to your home screen.

## Local Development

The core of this repository is a Vite + React client frontend that requires a running backend. The Go backend does not
deploy the React frontend; you will need to run them independently.

Run the frontend UI:

```shell
pnpm install
pnpm run dev
```

The environment variables read from the root `.env` file.

Run the backend API:

```shell
cd api
go run ./...
```

The environment variables are more privileged and read from the `./api/.env` file.
