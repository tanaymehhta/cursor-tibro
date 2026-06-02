# AGENTS.md

Guidance for AI agents working in this repository.

## Cursor Cloud specific instructions

This repository is a **greenfield stub**: it currently contains only `README.md` and has no application source, dependency manifests, Docker/Compose files, or CI configuration. There is nothing to lint, test, build, or run as a service yet.

### Services

| Service | Required? | Notes |
|---------|-----------|--------|
| *(none defined)* | No | Add `package.json`, `docker-compose.yml`, or similar when the real app lands |

### Toolchain on the VM

The cloud VM already provides common tooling (no repo-specific install step):

- **Node.js** via nvm (v22.x) with `npm` and `pnpm`
- **Python** 3.12
- **Git** 2.x

When you add a stack, document the exact lint/test/dev commands here and extend the VM update script accordingly (for example `npm install` or `uv sync`).

### Standard commands (today)

There are no project scripts yet. Useful checks until code exists:

```bash
git status
cat README.md
```

### Gotchas

- Do not assume `node_modules`, virtualenvs, or Docker services exist; they are not in the repo.
- The Neon MCP server may be configured in Cursor for future database work; it is not wired into this repository.
- After adding dependencies, confirm whether dev servers hot-reload dependency changes; note any quirks in this section.
