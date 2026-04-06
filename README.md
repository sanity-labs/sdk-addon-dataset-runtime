# `@sanity-labs/sdk-addon-dataset-runtime`

This package provides the narrow runtime values that `@sanity-labs/sdk-comments` and
`@sanity-labs/sdk-tasks` both need:

- `addonDataset`
- `contentDataset?`
- `projectId`
- `workspaceId?`
- `workspaceTitle?`

## Installation

```bash
pnpm add @sanity-labs/sdk-addon-dataset-runtime react react-dom
```

## Usage

```tsx
import { AddonDatasetRuntimeProvider } from "@sanity-labs/sdk-addon-dataset-runtime";

<AddonDatasetRuntimeProvider
  addonDataset="production-comments"
  contentDataset="production"
  projectId="myProjectId"
  workspaceId="news_and_media"
  workspaceTitle="News and Media"
>
  <App />
</AddonDatasetRuntimeProvider>;
```

Use this provider when multiple components should share the same addon runtime
identity. Feature hooks in `@sanity-labs/sdk-comments` and `@sanity-labs/sdk-tasks`
also support direct configuration, so this package is recommended shared
infrastructure rather than a mandatory prerequisite for every integration.

## Primary Exports

- `AddonDatasetRuntimeProvider`
- `useAddonDatasetRuntime()`
- `useOptionalAddonDatasetRuntime()`
- `AddonDatasetRuntimeValue`

## What Is Not Included

This package intentionally does not ship:

- task caches
- optimistic feature state
- task mutation helpers
- comment mutation helpers

Feature behavior lives in `@sanity-labs/sdk-comments` and `@sanity-labs/sdk-tasks`.
