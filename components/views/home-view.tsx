"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { RotatingText } from "@/components/ui/rotating-text"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, ChevronRight, Twitter, Send, Shield, Zap, Coins } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LoadingFeatures, LoadingSteps, FeaturesContent, StepsContent } from "@/components/loading-states"

interface HomeViewProps {
  featuresLoaded: boolean
  stepsLoaded: boolean
  setFeaturesLoaded: (loaded: boolean) => void
  setStepsLoaded: (loaded: boolean) => void
  onNavigate: (view: string) => void
  onDappNavigation?: () => void
}

export function HomeView({
  featuresLoaded,
  stepsLoaded,
  setFeaturesLoaded,
  setStepsLoaded,
  onNavigate,
  onDappNavigation,
}: HomeViewProps) {
  const rotatingTexts = [
    "Long & Short Memecoins",
    "Bet on Anything",
    "Get Paid to Perform Dares Live",
    "Launch Your Own Perp Memecoin",
  ]

  return (
    <div className="min-h-screen pt-16">
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse"
                  variant="secondary"
                >
                  Now Live
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl transition-all duration-500 hover:text-primary/90">
                  <span className="text-foreground">Your Playground for Degen Innovation:</span>
                  <br />
                  <RotatingText texts={rotatingTexts} className="mt-4 block min-h-[1.2em]" interval={2500} />
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto transition-all duration-300 hover:text-foreground/80">
                  Trade with leverage on the first DEX built exclusively for memecoins. No KYC. No limits.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton size="lg" className="gap-1 group" onClick={onDappNavigation}>
                  Launch App
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-4 w-4" />
                </GlassButton>
                <GlassButton size="lg" variant="outline" onClick={() => onNavigate("presale")}>
                  <AnimatedIcon icon={Coins} variant="3d" className="h-4 w-4 mr-1" />
                  Buy $RELY
                </GlassButton>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-1 transition-all duration-300 hover:scale-105 group">
                  <AnimatedIcon icon={Shield} variant="glow" className="h-4 w-4 text-green-500" />
                  <span>Audited & Secure</span>
                </div>
                <div className="flex items-center gap-1 transition-all duration-300 hover:scale-105 group">
                  <AnimatedIcon icon={Zap} variant="glow" className="h-4 w-4 text-yellow-500" />
                  <span>Lightning Fast</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Features
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight transition-all duration-300 hover:text-primary/90">
                  Trade Memecoins Like Never Before
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl transition-all duration-300 hover:text-foreground/80">
                  Rely Exchange gives you the power to maximize your gains with advanced trading features built
                  specifically for the memecoin market.
                </p>
              </div>
            </div>
          </ScrollReveal>
          {!featuresLoaded ? <LoadingFeatures onLoadComplete={() => setFeaturesLoaded(true)} /> : <FeaturesContent />}
        </div>
      </section>

      <section id="community" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  Community
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight transition-all duration-300 hover:text-primary/90">
                  Join the Rely Exchange Community
                </h2>
                <p className="text-muted-foreground md:text-xl max-w-[700px] mx-auto transition-all duration-300 hover:text-foreground/80">
                  Connect with fellow traders, get the latest updates, and participate in exclusive events and airdrops.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <GlassButton
                  className="gap-2 group"
                  onClick={() => window.open("https://x.com/rely_exchange", "_blank")}
                >
                  <AnimatedIcon icon={Twitter} variant="3d" className="h-4 w-4 text-blue-400" />
                  Follow on Twitter
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </GlassButton>

                <GlassButton
                  variant="outline"
                  className="gap-2 group"
                  onClick={() => window.open("https://t.me/rely_exchange", "_blank")}
                >
                  <AnimatedIcon icon={Send} variant="3d" className="h-4 w-4 text-blue-500" />
                  Join our Telegram
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section id="how-it-works" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  How It Works
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight transition-all duration-300 hover:text-primary/90">
                  Start Trading in Minutes
                </h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl transition-all duration-300 hover:text-foreground/80">
                  Our platform is designed to be simple and intuitive, even for beginners.
                </p>
              </div>
            </div>
          </ScrollReveal>
          {!stepsLoaded ? <LoadingSteps onLoadComplete={() => setStepsLoaded(true)} /> : <StepsContent />}
          {stepsLoaded && (
            <ScrollReveal delay={400}>
              <div className="flex justify-center">
                <GlassButton size="lg" className="gap-1 group" onClick={onDappNavigation}>
                  Launch Trading Platform
                  <AnimatedIcon icon={ChevronRight} variant="bounce" className="h-4 w-4" />
                </GlassButton>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight transition-all duration-300 hover:scale-105">
                  Ready to Trade Memecoins Like a Pro?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl transition-all duration-300 hover:text-primary-foreground/80">
                  Join thousands of traders already using Rely Exchange to long and short the memecoin market.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton size="lg" variant="secondary" className="gap-1 group" onClick={onDappNavigation}>
                  Launch App
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-4 w-4" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
                >
                  Learn More
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
