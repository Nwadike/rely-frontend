"use client"
import { useState, useRef } from "react"
import type React from "react"

import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface GestureCardProps extends CardProps {
  onSwipeLeft?: () => void
  onSwipeRight?: () => void
  onLongPress?: () => void
  swipeThreshold?: number
}

export function GestureCard({
  children,
  className,
  onSwipeLeft,
  onSwipeRight,
  onLongPress,
  swipeThreshold = 50,
  ...props
}: GestureCardProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isPressed, setIsPressed] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const longPressTimer = useRef<NodeJS.Timeout>()

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsPressed(true)

    // Long press detection
    if (onLongPress) {
      longPressTimer.current = setTimeout(() => {
        onLongPress()
        if (navigator.vibrate) {
          navigator.vibrate(50)
        }
      }, 500)
    }
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentTouch = e.targetTouches[0].clientX
    const diff = touchStart - currentTouch
    setDragOffset(diff)
    setTouchEnd(currentTouch)

    // Clear long press if moving
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }
  }

  const onTouchEnd = () => {
    if (longPressTimer.current) {
      clearTimeout(longPressTimer.current)
    }

    if (!touchStart || !touchEnd) {
      setIsPressed(false)
      setDragOffset(0)
      return
    }

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > swipeThreshold
    const isRightSwipe = distance < -swipeThreshold

    if (isLeftSwipe && onSwipeLeft) {
      onSwipeLeft()
    }
    if (isRightSwipe && onSwipeRight) {
      onSwipeRight()
    }

    setIsPressed(false)
    setDragOffset(0)
    setTouchStart(null)
    setTouchEnd(null)
  }

  return (
    <Card
      className={cn(
        "transition-all duration-300 cursor-pointer select-none",
        "hover:scale-[1.02] hover:shadow-lg",
        "active:scale-[0.98]",
        isPressed && "scale-[0.98] shadow-inner",
        className,
      )}
      style={{
        transform: `translateX(${-dragOffset * 0.1}px) scale(${isPressed ? 0.98 : 1})`,
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      {...props}
    >
      {children}
    </Card>
  )
}
