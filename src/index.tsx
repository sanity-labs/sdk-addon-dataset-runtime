import {createContext, useContext, useMemo, type ReactNode} from 'react'

export interface AddonDatasetRuntimeValue {
  addonDataset: string
  contentDataset?: string
  projectId: string
  workspaceId?: string
  workspaceTitle?: string
}

interface AddonDatasetRuntimeProviderProps extends AddonDatasetRuntimeValue {
  children: ReactNode
}

const AddonDatasetRuntimeContext = createContext<AddonDatasetRuntimeValue | null>(null)

export function AddonDatasetRuntimeProvider({
  addonDataset,
  children,
  contentDataset,
  projectId,
  workspaceId,
  workspaceTitle,
}: AddonDatasetRuntimeProviderProps) {
  const value = useMemo(
    () => ({
      addonDataset,
      contentDataset,
      projectId,
      workspaceId,
      workspaceTitle,
    }),
    [addonDataset, contentDataset, projectId, workspaceId, workspaceTitle],
  )

  return (
    <AddonDatasetRuntimeContext.Provider value={value}>
      {children}
    </AddonDatasetRuntimeContext.Provider>
  )
}

export function useAddonDatasetRuntime(): AddonDatasetRuntimeValue {
  const runtime = useContext(AddonDatasetRuntimeContext)
  if (!runtime) {
    throw new Error('useAddonDatasetRuntime must be used inside <AddonDatasetRuntimeProvider>')
  }

  return runtime
}

export function useOptionalAddonDatasetRuntime(): AddonDatasetRuntimeValue | null {
  return useContext(AddonDatasetRuntimeContext)
}
