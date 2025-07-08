"use client"

import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface AnimatedIconProps {
  icon: LucideIcon
  className?: string
  variant?: "default" | "3d" | "glow" | "bounce"
}

export function AnimatedIcon({ icon: Icon, className, variant = "default" }: AnimatedIconProps) {
  const variants = {
    default: "transition-all duration-300 hover:scale-110 hover:rotate-12",
    "3d": "transition-all duration-300 hover:scale-110 hover:rotate-12 drop-shadow-lg hover:drop-shadow-xl filter hover:brightness-110",
    glow: "transition-all duration-300 hover:scale-110 hover:rotate-12 hover:drop-shadow-[0_0_8px_currentColor]",
    bounce:
      "transition-all duration-300 hover:scale-110 hover:-translate-y-1 hover:rotate-12 animate-pulse hover:animate-bounce",
  }

  return (
    <div className="relative group">
      <Icon className={cn(variants[variant], className)} />
      {variant === "3d" && (
        <>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-md -z-10" />
        </>
      )}
    </div>
  )
}
