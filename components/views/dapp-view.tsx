"use client"

import { useState } from "react"
import Image from "next/image"
import { GlassButton } from "@/components/ui/glass-button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Settings, RefreshCw, ArrowLeft, Twitter, Send, TrendingUp, Dice6, Vote } from "lucide-react"

export function DappView() {
  const [isRotating, setIsRotating] = useState(false)

  const handleRefresh = () => {
    setIsRotating(true)
    setTimeout(() => {
      setIsRotating(false)
      window.location.reload()
    }, 1000)
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      window.history.back()
    } else {
      window.close()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/50 to-background flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <ScrollReveal direction="fade">
          <div className="text-center space-y-8">
            {/* Logo and Status */}
            <div className="space-y-4">
              <div className="relative mx-auto w-20 h-20">
                <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping"></div>
                <div className="absolute inset-0 rounded-full bg-primary/20 animate-pulse scale-110"></div>
                <Image
                  src="/logo.png"
                  alt="Rely Exchange Logo"
                  width={80}
                  height={80}
                  className="w-20 h-20 relative z-10 animate-pulse"
                  priority
                />
              </div>

              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight">Exchange Under Maintenance</h1>
                <p className="text-muted-foreground text-lg">
                  We're working hard to bring you the best trading experience
                </p>
              </div>
            </div>

            {/* Maintenance Icon */}
            <div className="flex justify-center">
              <div className="relative">
                <AnimatedIcon
                  icon={Settings}
                  variant="3d"
                  className={`h-16 w-16 text-primary ${isRotating ? "animate-spin" : "animate-pulse"}`}
                />
                <div className="absolute -inset-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-lg animate-pulse"></div>
              </div>
            </div>

            {/* Loading Dots */}
            <div className="flex justify-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce"></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></div>
            </div>

            {/* Status Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <AnimatedIcon icon={TrendingUp} variant="glow" className="h-5 w-5 text-red-500" />
                  <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">Offline</span>
                </div>
                <h3 className="font-semibold">Trading</h3>
                <p className="text-sm text-muted-foreground">Perpetual contracts</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <AnimatedIcon icon={Dice6} variant="glow" className="h-5 w-5 text-red-500" />
                  <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">Offline</span>
                </div>
                <h3 className="font-semibold">Betting</h3>
                <p className="text-sm text-muted-foreground">Prediction markets</p>
              </div>

              <div className="bg-card/50 backdrop-blur-sm border rounded-lg p-4 space-y-2">
                <div className="flex items-center justify-between">
                  <AnimatedIcon icon={Vote} variant="glow" className="h-5 w-5 text-red-500" />
                  <span className="text-xs bg-red-500/20 text-red-500 px-2 py-1 rounded-full">Offline</span>
                </div>
                <h3 className="font-semibold">Governance</h3>
                <p className="text-sm text-muted-foreground">DAO voting</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GlassButton size="lg" variant="outline" className="gap-2 group" onClick={handleGoBack}>
                <AnimatedIcon icon={ArrowLeft} variant="bounce" className="h-4 w-4" />
                Go Back
              </GlassButton>

              <GlassButton size="lg" className="gap-2 group" onClick={handleRefresh}>
                <AnimatedIcon
                  icon={RefreshCw}
                  variant="bounce"
                  className={`h-4 w-4 ${isRotating ? "animate-spin" : ""}`}
                />
                Refresh
              </GlassButton>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-border/50">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-sm text-muted-foreground">Follow us for updates on maintenance progress</p>
                <div className="flex gap-2">
                  <GlassButton
                    size="sm"
                    variant="ghost"
                    className="gap-1"
                    onClick={() => window.open("https://x.com/relyexchange", "_blank")}
                  >
                    <AnimatedIcon icon={Twitter} variant="3d" className="h-4 w-4 text-blue-400" />
                    Twitter
                  </GlassButton>
                  <GlassButton
                    size="sm"
                    variant="ghost"
                    className="gap-1"
                    onClick={() => window.open("https://t.me/relyexchange", "_blank")}
                  >
                    <AnimatedIcon icon={Send} variant="3d" className="h-4 w-4 text-blue-500" />
                    Telegram
                  </GlassButton>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
