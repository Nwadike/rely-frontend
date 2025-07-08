"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface RotatingTextProps {
  texts: string[]
  className?: string
  interval?: number
}

export function RotatingText({ texts, className, interval = 2500 }: RotatingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setInterval(() => {
      setIsVisible(false)

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setIsVisible(true)
      }, 150)
    }, interval)

    return () => clearInterval(timer)
  }, [texts.length, interval])

  return (
    <div className={cn("relative inline-block", className)}>
      <span
        className={cn(
          "transition-all duration-300 ease-in-out",
          "bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient-x",
          isVisible ? "opacity-100 transform translate-y-0" : "opacity-0 transform -translate-y-2",
        )}
      >
        {texts[currentIndex]}
      </span>
    </div>
  )
}
