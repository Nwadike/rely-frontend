"use client"

import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import type { ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  direction?: "up" | "down" | "left" | "right" | "fade"
}

export function ScrollReveal({ children, className = "", delay = 0, direction = "up" }: ScrollRevealProps) {
  const { ref, isVisible } = useScrollAnimation()

  const getAnimationClass = () => {
    const baseClass = "transition-all duration-700 ease-out"

    if (!isVisible) {
      switch (direction) {
        case "up":
          return `${baseClass} opacity-0 translate-y-8`
        case "down":
          return `${baseClass} opacity-0 -translate-y-8`
        case "left":
          return `${baseClass} opacity-0 translate-x-8`
        case "right":
          return `${baseClass} opacity-0 -translate-x-8`
        case "fade":
          return `${baseClass} opacity-0`
        default:
          return `${baseClass} opacity-0 translate-y-8`
      }
    }

    return `${baseClass} opacity-100 translate-y-0 translate-x-0`
  }

  return (
    <div ref={ref} className={`${getAnimationClass()} ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  )
}
