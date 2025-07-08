"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface AnimatedCoinProps {
  className?: string
  delay?: number
  size?: "sm" | "md" | "lg"
}

export function AnimatedCoin({ className, delay = 0, size = "md" }: AnimatedCoinProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
  }

  return (
    <div
      className={cn(
        "relative transition-all duration-1000 ease-out",
        sizeClasses[size],
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4",
        className,
      )}
    >
      <div className="relative w-full h-full animate-bounce">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 animate-pulse" />
        <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-primary/20 shadow-lg">
          <Image
            src="/coin-icon.png"
            alt="RELY Coin"
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <div className="absolute inset-0 rounded-full bg-gradient-to-t from-transparent via-white/10 to-white/20 pointer-events-none" />
      </div>
    </div>
  )
}
