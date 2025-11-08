"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface PreloaderProps {
  onLoadComplete: () => void
}

export function Preloader({ onLoadComplete }: PreloaderProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true)
      setTimeout(() => {
        setIsLoading(false)
        onLoadComplete()
      }, 500) // Wait for fade out animation
    }, 2000) // Show preloader for 2 seconds

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  if (!isLoading) return null

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background ${fadeOut ? "fade-out" : ""}`}
    >
      <div className="flex flex-col items-center space-y-6">
        <div className="relative">
          <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping scale-110"></div>
          <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse scale-125"></div>
          <Image
            src="/logo.png"
            alt="Rely Logo"
            width={80}
            height={80}
            className="w-20 h-20 logo-pulse relative z-10"
            priority
          />
          {/* </CHANGE> */}
        </div>
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
        </div>
      </div>
    </div>
  )
}
