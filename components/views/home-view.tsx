"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, ChevronRight, Twitter, Send, Shield, Zap, Coins, Apple, Smartphone } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LoadingFeatures, LoadingSteps, FeaturesContent, StepsContent } from "@/components/loading-states"
import DarkVeil from "@/components/dark-veil"

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

  return (
    <div className="min-h-screen pt-16">
      <section className="w-full py-16 sm:py-24 md:py-32 lg:py-40 relative overflow-hidden">
        <div className="absolute inset-0 opacity-80">
          <DarkVeil
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            speed={1}
            scanlineFrequency={0.5}
            warpAmount={0}
            resolutionScale={1}
          />
        </div>
        <div className="absolute inset-0 bg-black/40" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12 text-center">
              <div className="space-y-6 md:space-y-8">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-breathe px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium rounded-lg"
                  variant="secondary"
                >
                  Permissionless Protocol
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-5xl transition-all duration-300 ease-in-out px-4">
                  Trade Crypto Volatility. <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Without Permission.</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-auto transition-all duration-300 ease-in-out hover:text-foreground/90 px-4">
                  A community-driven options exchange that empowers users to purchase call and put options — no limits, no
                  gatekeepers.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4">
                <GlassButton
                  size="lg"
                  className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-6 py-3 md:px-8 md:py-4 text-base md:text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg hover:animate-pulse-glow w-full sm:w-auto"
                  onClick={onDappNavigation}
                >
                  Launch Terminal
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-4 w-4 md:h-5 md:w-5" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-6 py-3 md:px-8 md:py-4 text-base md:text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg w-full sm:w-auto"
                  onClick={() => onNavigate("presale")}
                >
                  <AnimatedIcon icon={Coins} variant="3d" className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                  Buy $RELY
                </GlassButton>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm md:text-base pt-4 md:pt-6">
                <div
                  className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 group cursor-pointer animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: "200ms" }}
                >
                  <AnimatedIcon
                    icon={Shield}
                    variant="glow"
                    className="h-4 w-4 md:h-5 md:w-5 text-green-500 drop-shadow-[0_0_8px_rgba(34,197,94,0.5)] group-hover:drop-shadow-[0_0_16px_rgba(34,197,94,0.8)] transition-all duration-300"
                  />
                  <span className="font-medium">On-chain Execution</span>
                </div>
                <div
                  className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 group cursor-pointer animate-in fade-in slide-in-from-right-4"
                  style={{ animationDelay: "400ms" }}
                >
                  <AnimatedIcon
                    icon={Zap}
                    variant="glow"
                    className="h-4 w-4 md:h-5 md:w-5 text-yellow-500 drop-shadow-[0_0_8px_rgba(234,179,8,0.5)] group-hover:drop-shadow-[0_0_16px_rgba(234,179,8,0.8)] transition-all duration-300"
                  />
                  <span className="font-medium">Transparent Pricing</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section id="features" className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  OUr Mission
                </div>
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[0.3px] leading-[1.3] transition-all duration-300 ease-in-out hover:text-primary/90 max-w-3xl mx-auto">
                  Built for Traders. Run by the Community.
                </h2>
                <p className="mx-auto max-w-[750px] text-[18px] leading-[1.6] text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground/90">
                  A community-governed exchange where traders have the power to shape the platform. Every decision-ranging from fee structutres to the introduction of new markets-is subject to collective scriutiny, ensuring transparency
                  and accountability. Operating on-chain and fully owned by the community, Our platform empowers you to take control of your trading experience.
              </div>
            </div>
          </ScrollReveal>
          {!featuresLoaded ? <LoadingFeatures onLoadComplete={() => setFeaturesLoaded(true)} /> : <FeaturesContent />}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section id="community" className="w-full py-[100px] md:py-[120px] bg-muted relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`,
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  The Collective
                </div>
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[0.3px] leading-[1.3] transition-all duration-300 ease-in-out hover:text-primary/90 max-w-3xl mx-auto">
                  The Market Belongs to You.
                </h2>
                <p className="text-[18px] leading-[1.6] text-muted-foreground max-w-[750px] mx-auto transition-all duration-300 ease-in-out hover:text-foreground/90">
                  Join the Collective — traders, developers, and analysts shaping the next evolution of decentralized
                  derivatives.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row">
                <GlassButton
                  className="gap-2 group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-4 text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg"
                  onClick={() => window.open("https://x.com/rely_exchange", "_blank")}
                >
                  <AnimatedIcon icon={Twitter} variant="3d" className="h-5 w-5 text-blue-400" />
                  <span>Follow on X</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </GlassButton>

                <GlassButton
                  variant="outline"
                  className="gap-2 group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-4 text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg"
                  onClick={() => window.open("https://t.me/rely_exchange", "_blank")}
                >
                  <AnimatedIcon icon={Send} variant="3d" className="h-5 w-5 text-blue-500" />
                  <span>Join the DAO</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section id="how-it-works" className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  How It Works
                </div>
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[0.3px] leading-[1.3] transition-all duration-300 ease-in-out hover:text-primary/90 max-w-3xl mx-auto">
                  Buy Calls. Drop Puts. Stay in Control.
                </h2>
                <p className="mx-auto max-w-[750px] text-[18px] leading-[1.6] text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground/90">
                  Trade crypto volatility directly from your wallet. Choose your strike, define your expiry, and let the
                  chain handle execution — fast, transparent, and trustless.
                </p>
              </div>
            </div>
          </ScrollReveal>
          {!stepsLoaded ? <LoadingSteps onLoadComplete={() => setStepsLoaded(true)} /> : <StepsContent />}
          {stepsLoaded && (
            <ScrollReveal delay={400}>
              <div className="flex justify-center mt-12">
                <GlassButton
                  size="lg"
                  className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-4 text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg"
                  onClick={onDappNavigation}
                >
                  Launch Terminal
                  <AnimatedIcon icon={ChevronRight} variant="bounce" className="h-5 w-5" />
                </GlassButton>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <section className="w-full py-[100px] md:py-[120px] bg-muted relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `repeating-linear-gradient(-45deg, transparent, transparent 35px, currentColor 35px, currentColor 36px)`,
          }}
        />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-10 text-center">
              <div className="space-y-6">
                <div className="inline-block rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg">
                  Trade On The Go
                </div>
                <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[0.3px] leading-[1.3] transition-all duration-300 ease-in-out hover:text-primary/90 max-w-3xl mx-auto">
                  Download Our Mobile App
                </h2>
                <p className="mx-auto max-w-[750px] text-[18px] leading-[1.6] text-muted-foreground transition-all duration-300 ease-in-out hover:text-foreground/90">
                  Execute trades, monitor positions, and manage your portfolio from anywhere. Available on iOS and
                  Android.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto max-w-md sm:max-w-none px-4 sm:px-0">
                <GlassButton
                  size="lg"
                  className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg w-full sm:w-auto"
                  onClick={() => window.open("#", "_blank")}
                >
                  <AnimatedIcon icon={Apple} variant="3d" className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="truncate">Download for iOS</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </GlassButton>

                <GlassButton
                  size="lg"
                  variant="outline"
                  className="gap-2 group shadow-md hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg w-full sm:w-auto"
                  onClick={() => window.open("#", "_blank")}
                >
                  <AnimatedIcon icon={Smartphone} variant="3d" className="h-5 w-5 sm:h-6 sm:w-6 flex-shrink-0" />
                  <span className="truncate">Download for Android</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="w-full py-[100px] md:py-[120px] bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-start justify-start space-y-10">
              <div className="space-y-6 max-w-3xl">
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-[0.3px] leading-[1.3] transition-all duration-300 ease-in-out hover:scale-[1.02]">
                  Ready to Trade Without Permission?
                </h2>
              </div>
              <GlassButton
                size="lg"
                variant="secondary"
                className="gap-2 group shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-4 text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg"
                onClick={onDappNavigation}
              >
                Launch Terminal
                <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-5 w-5" />
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
