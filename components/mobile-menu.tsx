"use client"
import Image from "next/image"
import type React from "react"

import { GlassButton } from "@/components/ui/glass-button"
import { useEffect, useState, useRef } from "react"
import { Home, Rocket, Dice6, Video, Vote, Coins, Users, X } from "lucide-react"

interface MobileMenuProps {
  isOpen: boolean
  onToggle: () => void
  currentView: string
  onNavigate: (view: "home" | "launch" | "bet" | "dare" | "governance" | "token" | "community") => void
}

export function MobileMenu({ isOpen, onToggle, currentView, onNavigate }: MobileMenuProps) {
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)
  const [pressedButton, setPressedButton] = useState<string | null>(null)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50

  // Prevent body scroll when menu is open and restore when closed
  useEffect(() => {
    if (isOpen) {
      // Store current scroll position
      const scrollY = window.scrollY
      document.body.style.position = "fixed"
      document.body.style.top = `-${scrollY}px`
      document.body.style.width = "100%"
      document.body.style.overflow = "hidden"
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0") * -1)
      }
      setDragOffset(0)
      setIsDragging(false)
    }

    return () => {
      // Cleanup on unmount
      document.body.style.position = ""
      document.body.style.top = ""
      document.body.style.width = ""
      document.body.style.overflow = ""
    }
  }, [isOpen])

  // Touch handlers for swipe gestures
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    if (!touchStart) return

    const currentTouch = e.targetTouches[0].clientX
    const diff = touchStart - currentTouch

    // Only allow dragging to the right (closing direction)
    if (diff > 0) {
      setDragOffset(Math.min(diff, 300)) // Max drag distance
      setTouchEnd(currentTouch)
    }
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) {
      setIsDragging(false)
      setDragOffset(0)
      return
    }

    const distance = touchStart - touchEnd
    const isRightSwipe = distance > minSwipeDistance

    if (isRightSwipe) {
      onToggle() // Close menu
    }

    setIsDragging(false)
    setDragOffset(0)
    setTouchStart(null)
    setTouchEnd(null)
  }

  const navigationItems = [
    { key: "home", label: "Home", icon: Home },
    { key: "launch", label: "Launch", icon: Rocket },
    { key: "bet", label: "Bet", icon: Dice6 },
    { key: "dare", label: "Dare", icon: Video },
    { key: "governance", label: "Governance", icon: Vote },
    { key: "token", label: "Token", icon: Coins },
    { key: "community", label: "Community", icon: Users },
  ]

  const handleNavigation = (view: any) => {
    onNavigate(view)
    onToggle() // Close menu after navigation
  }

  const handleLaunchApp = () => {
    window.open("about:blank", "_blank")
    onToggle() // Close menu after opening
  }

  // Micro-interaction handlers
  const handleButtonPress = (buttonId: string) => {
    setPressedButton(buttonId)
    // Add haptic feedback if available
    if (navigator.vibrate) {
      navigator.vibrate(10)
    }
    setTimeout(() => setPressedButton(null), 150)
  }

  // Prevent event bubbling on sidebar clicks
  const handleSidebarClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  // Ensure menu is completely hidden when closed
  if (!isOpen) {
    return null
  }

  return (
    <>
      {/* Backdrop overlay with gesture support */}
      <div
        className={`fixed inset-0 z-[60] transition-all duration-150 ease-out md:hidden ${
          isOpen ? "opacity-100 bg-black/30 backdrop-blur-sm" : "opacity-0 pointer-events-none"
        }`}
        onClick={onToggle}
        aria-hidden="true"
      />

      {/* Mobile menu sidebar with enhanced glass effect */}
      <div
        ref={sidebarRef}
        className={`fixed top-0 right-0 z-[65] h-screen w-72 max-w-[80vw] transform transition-all duration-150 ease-out md:hidden ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
        style={{
          transform: `translateX(${isOpen ? dragOffset : "100%"}px)`,
          transition: isDragging ? "none" : "transform 0.15s ease-out, opacity 0.15s ease-out",
        }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
        onClick={handleSidebarClick}
      >
        <div className="h-full w-full bg-background/50 backdrop-blur-xl border-l border-border/30 shadow-xl flex flex-col">
          {/* Swipe indicator */}
          <div className="absolute top-4 left-2 w-1 h-8 bg-border/30 rounded-full">
            <div className="w-full h-2 bg-primary/50 rounded-full animate-pulse" />
          </div>

          {/* Header with enhanced micro-interactions */}
          <div
            className={`flex items-center justify-between p-4 border-b border-border/20 bg-background/30 backdrop-blur-xl transition-all duration-300 ease-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
            }`}
          >
            <div
              className="flex items-center gap-2 group cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95"
              onClick={() => {
                handleButtonPress("logo")
                handleNavigation("home")
              }}
            >
              <div className="relative">
                <Image
                  src="/logo.png"
                  alt="Rely Exchange Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 group-active:scale-90"
                />
                {pressedButton === "logo" && (
                  <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" />
                )}
              </div>
              <span className="text-lg font-semibold transition-all duration-300 group-hover:text-primary group-active:scale-95">
                Rely Exchange
              </span>
            </div>
            <GlassButton
              variant="ghost"
              size="sm"
              onClick={onToggle}
              className={`transition-all duration-300 hover:scale-110 active:scale-90 hover:rotate-90 h-8 w-8 p-0 relative rounded-md hover:bg-destructive/10 flex items-center justify-center ${
                pressedButton === "close" ? "bg-destructive/20" : ""
              }`}
            >
              <X className="h-4 w-4 transition-all duration-300" />
            </GlassButton>
          </div>

          {/* Navigation with enhanced micro-interactions */}
          <div
            className={`flex-1 overflow-y-auto py-4 bg-background/20 backdrop-blur-xl transition-all duration-300 ease-out ${
              isOpen ? "opacity-100" : "opacity-0"
            }`}
          >
            <nav className="px-4">
              <div className="space-y-1">
                {navigationItems.map((item, index) => {
                  const IconComponent = item.icon
                  const isActive = currentView === item.key
                  const isPressed = pressedButton === item.key

                  return (
                    <GlassButton
                      key={item.key}
                      variant={isActive ? "default" : "ghost"}
                      onClick={() => {
                        handleButtonPress(item.key)
                        setTimeout(() => handleNavigation(item.key), 100)
                      }}
                      className={`group relative w-full text-left p-3 rounded-lg transition-all duration-300 ease-out transform overflow-hidden justify-start ${
                        isActive
                          ? "bg-primary/15 text-primary backdrop-blur-sm scale-[1.02] shadow-lg"
                          : "text-foreground/80 hover:text-foreground hover:bg-background/15 hover:backdrop-blur-sm hover:scale-[1.01] hover:shadow-md active:scale-95"
                      } ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"} ${
                        isPressed ? "scale-95 bg-primary/25" : ""
                      }`}
                      style={{
                        transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      {/* Ripple effect */}
                      {isPressed && <div className="absolute inset-0 bg-primary/20 rounded-lg animate-ping" />}

                      <div className="flex items-center gap-3 relative z-10">
                        <div
                          className={`transition-all duration-300 ${
                            isPressed ? "scale-110 rotate-12" : "group-hover:scale-110 group-hover:rotate-12"
                          }`}
                        >
                          <IconComponent className="h-4 w-4" />
                        </div>
                        <span className="text-sm font-medium transition-all duration-300">{item.label}</span>
                        {isActive && (
                          <div className="ml-auto w-1.5 h-1.5 bg-primary rounded-full animate-pulse transition-all duration-300" />
                        )}
                      </div>

                      {/* Hover indicator */}
                      <div className="absolute left-0 top-0 h-full w-1 bg-primary transform scale-y-0 transition-transform duration-300 group-hover:scale-y-100 origin-center" />
                    </GlassButton>
                  )
                })}
              </div>
            </nav>
          </div>

          {/* Footer with micro-interactions */}
          <div
            className={`p-4 border-t border-border/20 bg-background/30 backdrop-blur-xl transition-all duration-300 ease-out ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <GlassButton
              size="sm"
              className={`w-full gap-2 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95 relative overflow-hidden ${
                pressedButton === "launch" ? "scale-95 shadow-inner" : ""
              }`}
              onClick={() => {
                handleButtonPress("launch")
                setTimeout(handleLaunchApp, 100)
              }}
            >
              {/* Button ripple effect */}
              {pressedButton === "launch" && <div className="absolute inset-0 bg-white/20 animate-ping rounded-md" />}

              <Rocket
                className={`h-4 w-4 transition-all duration-300 ${
                  pressedButton === "launch" ? "rotate-45 scale-110" : "group-hover:rotate-12"
                }`}
              />
              <span className="relative z-10">Launch App</span>
            </GlassButton>
          </div>
        </div>
      </div>
    </>
  )
}
