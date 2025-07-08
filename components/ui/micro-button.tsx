"use client"
import { Button, type ButtonProps } from "@/components/ui/button"
import type React from "react"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface MicroButtonProps extends ButtonProps {
  ripple?: boolean
  haptic?: boolean
}

export function MicroButton({
  children,
  className,
  onClick,
  ripple = true,
  haptic = true,
  ...props
}: MicroButtonProps) {
  const [isPressed, setIsPressed] = useState(false)
  const [rippleEffect, setRippleEffect] = useState(false)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsPressed(true)

    if (ripple) {
      setRippleEffect(true)
      setTimeout(() => setRippleEffect(false), 300)
    }

    if (haptic && navigator.vibrate) {
      navigator.vibrate(10)
    }

    setTimeout(() => setIsPressed(false), 150)

    if (onClick) {
      onClick(e)
    }
  }

  return (
    <Button
      className={cn(
        "relative overflow-hidden transition-all duration-200",
        "hover:scale-105 active:scale-95",
        "hover:shadow-lg active:shadow-inner",
        isPressed && "scale-95 shadow-inner",
        className,
      )}
      onClick={handleClick}
      {...props}
    >
      {/* Ripple effect */}
      {rippleEffect && <div className="absolute inset-0 bg-white/20 animate-ping rounded-md" />}

      {/* Content */}
      <span className="relative z-10 transition-all duration-200">{children}</span>
    </Button>
  )
}
