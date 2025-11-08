'use client'

import { createContext, useContext, useState } from 'react'

interface PreloaderContextType {
  isPreloading: boolean
  setPreloading: (isLoading: boolean) => void
}

const PreloaderContext = createContext<PreloaderContextType | undefined>(undefined)

export const PreloaderProvider = ({ children }: { children: React.ReactNode }) => {
  const [isPreloading, setPreloading] = useState(true)

  return (
    <PreloaderContext.Provider value={{ isPreloading, setPreloading }}>
      {children}
    </PreloaderContext.Provider>
  )
}

export const usePreloader = () => {
  const context = useContext(PreloaderContext)
  if (context === undefined) {
    throw new Error('usePreloader must be used within a PreloaderProvider')
  }
  return context
}