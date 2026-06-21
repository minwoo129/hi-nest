# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Development
yarn start:dev        # Start with hot-reload (watch mode)
yarn start:debug      # Start with debugger attached

# Build & Production
yarn build            # Compile TypeScript to dist/
yarn start:prod       # Run compiled output

# Testing
yarn test             # Run unit tests (src/**/*.spec.ts)
yarn test:watch       # Run unit tests in watch mode
yarn test:cov         # Run unit tests with coverage
yarn test:e2e         # Run end-to-end tests (test/*.e2e-spec.ts)

# To run a single test file:
yarn test -- --testPathPattern=app.controller

# Code quality
yarn lint             # ESLint with auto-fix
yarn format           # Prettier format src/ and test/
```

## Architecture

Standard NestJS application using the module/controller/service pattern:

- **Module** (`*.module.ts`) — declares which controllers and providers belong together; wires dependencies
- **Controller** (`*.controller.ts`) — handles HTTP routing and request/response; delegates logic to services
- **Service** (`*.service.ts`) — contains business logic; injected via NestJS DI

Entry point is `src/main.ts`, which bootstraps `AppModule` and listens on port **3000**.

Unit tests live alongside source files as `*.spec.ts`. E2e tests are in `test/` and use a separate Jest config (`test/jest-e2e.json`).

The package manager is **yarn**. Build output goes to `dist/`; `deleteOutDir: true` clears it on each build.
