"use client"

import type React from "react"
import { useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface GlareCardProps {
  children: React.ReactNode
  className?: string
}

export default function GlareCard({ children, className }: GlareCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cardRef = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return

    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x, y })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
  }

  return (
    <div
      ref={cardRef}
      className={cn(
        "relative overflow-hidden rounded-lg border bg-card/50 backdrop-blur-sm transition-all duration-300",
        "hover:scale-[1.02] hover:shadow-2xl",
        className,
      )}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}

      {/* Glare effect - only visible on hover */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          background: `radial-gradient(circle 200px at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 40%, transparent 70%)`,
        }}
      />

      {/* Border glow - only visible on hover */}
      <div
        className={cn(
          "pointer-events-none absolute inset-0 rounded-lg transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0",
        )}
        style={{
          background: `linear-gradient(45deg, transparent 30%, rgba(255,255,255,0.1) 50%, transparent 70%)`,
          backgroundSize: "200% 200%",
          animation: isHovered ? "shimmer 2s infinite" : "none",
        }}
      />
    </div>
  )
}
