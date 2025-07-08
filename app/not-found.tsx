"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { GlassButton } from "@/components/ui/glass-button"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ScrollReveal } from "@/components/scroll-reveal"
import GlareCard from "@/components/ui/glare-card"
import { Home, ArrowLeft, TrendingUp, Search, Sparkles } from "lucide-react"

export default function NotFound() {
  const router = useRouter()
  const [glitchActive, setGlitchActive] = useState(false)
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([])

  // Generate floating particles
  useEffect(() => {
    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 2,
    }))
    setParticles(newParticles)
  }, [])

  // Glitch effect
  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true)
      setTimeout(() => setGlitchActive(false), 200)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const handleGoHome = () => {
    router.push("/")
  }

  const handleGoBack = () => {
    if (window.history.length > 1) {
      router.back()
    } else {
      router.push("/")
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4 relative overflow-hidden">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-primary/30 rounded-full animate-pulse"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: "3s",
          }}
        />
      ))}

      <div className="w-full max-w-4xl relative z-10">
        <ScrollReveal direction="fade">
          <div className="text-center space-y-12">
            {/* 404 with Glitch Effect */}
            <div className="space-y-4">
              <div className="relative">
                <h1
                  className={`text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent ${
                    glitchActive ? "animate-pulse" : ""
                  }`}
                  style={{
                    textShadow: glitchActive ? "2px 2px 0px #ff0000, -2px -2px 0px #00ff00" : "none",
                  }}
                >
                  404
                </h1>
                {glitchActive && (
                  <div className="absolute inset-0 text-8xl md:text-9xl font-black tracking-tighter text-red-500/50 animate-ping">
                    404
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl md:text-3xl font-bold">Page Not Found</h2>
                <p className="text-muted-foreground text-lg max-w-md mx-auto">
                  The page you're looking for doesn't exist or has been moved to a different location.
                </p>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              <ScrollReveal delay={200}>
                <GlareCard className="p-6 space-y-4 group cursor-pointer" onClick={handleGoHome}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/20 rounded-lg">
                      <AnimatedIcon icon={TrendingUp} variant="3d" className="h-6 w-6 text-primary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Trading Platform</h3>
                      <p className="text-sm text-muted-foreground">Access our trading features</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>Go to Platform</span>
                    <AnimatedIcon icon={Sparkles} variant="bounce" className="h-4 w-4" />
                  </div>
                </GlareCard>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <GlareCard className="p-6 space-y-4 group cursor-pointer" onClick={handleGoHome}>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-secondary/20 rounded-lg">
                      <AnimatedIcon icon={Search} variant="3d" className="h-6 w-6 text-secondary" />
                    </div>
                    <div className="text-left">
                      <h3 className="font-semibold group-hover:text-primary transition-colors">Explore Features</h3>
                      <p className="text-sm text-muted-foreground">Discover what we offer</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-primary">
                    <span>Start Exploring</span>
                    <AnimatedIcon icon={Sparkles} variant="bounce" className="h-4 w-4" />
                  </div>
                </GlareCard>
              </ScrollReveal>
            </div>

            {/* Action Buttons */}
            <ScrollReveal delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <GlassButton size="lg" className="gap-2 group" onClick={handleGoHome}>
                  <AnimatedIcon icon={Home} variant="bounce" className="h-4 w-4" />
                  Return Home
                </GlassButton>

                <GlassButton size="lg" variant="outline" className="gap-2 group" onClick={handleGoBack}>
                  <AnimatedIcon icon={ArrowLeft} variant="bounce" className="h-4 w-4" />
                  Go Back
                </GlassButton>
              </div>
            </ScrollReveal>

            {/* Help Message */}
            <ScrollReveal delay={600}>
              <div className="pt-8 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  If you believe this is an error, please contact our support team.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </ScrollReveal>
      </div>
    </div>
  )
}
