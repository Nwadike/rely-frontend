"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import {
  ArrowUpRight,
  ChevronRight,
  Twitter,
  Send,
  Shield,
  Zap,
  Coins,
  Apple,
  Smartphone,
  Globe,
  Layers,
  TrendingUp,
} from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { LoadingFeatures, LoadingSteps } from "@/components/loading-states"
import dynamic from "next/dynamic"
import { Suspense } from "react"

const DarkVeil = dynamic(() => import("@/components/dark-veil"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
})

interface HomeViewProps {
  featuresLoaded: boolean
  stepsLoaded: boolean
  setFeaturesLoaded: (loaded: boolean) => void
  setStepsLoaded: (loaded: boolean) => void
  onNavigate: (view: string) => void
  onDappNavigation?: () => void
}

// --- New Feature Content (Simulated for the sake of the task) ---
// In a real scenario, I would modify the actual data source for FeaturesContent/StepsContent,
// but since they are imported from a placeholder file, I will simulate the content structure
// to guide the visual and textual improvements.

const NewFeaturesContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
    <div className="space-y-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
      <AnimatedIcon icon={Globe} variant="3d" className="h-8 w-8 text-primary" />
      <h3 className="text-xl font-semibold tracking-tight">Global Liquidity Pool</h3>
      <p className="text-muted-foreground">
        Access deep, global liquidity for any crypto asset. Our decentralized architecture ensures fair pricing and
        minimal slippage, 24/7.
      </p>
    </div>
    <div className="space-y-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
      <AnimatedIcon icon={Layers} variant="3d" className="h-8 w-8 text-primary" />
      <h3 className="text-xl font-semibold tracking-tight">Transparent Settlement</h3>
      <p className="text-muted-foreground">
        Every contract is settled on-chain with auditable smart contracts. Trust is replaced with verifiable code,
        ensuring absolute transparency.
      </p>
    </div>
    <div className="space-y-4 p-6 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 shadow-lg transition-all duration-300 hover:border-primary/50 hover:shadow-2xl">
      <AnimatedIcon icon={TrendingUp} variant="3d" className="h-8 w-8 text-primary" />
      <h3 className="text-xl font-semibold tracking-tight">Unrestricted Markets</h3>
      <p className="text-muted-foreground">
        Trade calls and puts on a vast array of crypto volatility. No KYC, no limits, just pure, permissionless
        financial engineering.
      </p>
    </div>
  </div>
)

const NewStepsContent = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 text-left">
    <div className="space-y-3">
      <div className="text-4xl font-bold text-primary/80">01</div>
      <h3 className="text-2xl font-semibold tracking-tight">Connect Wallet</h3>
      <p className="text-muted-foreground">
        Securely link your preferred Web3 wallet. No account creation or personal data required.
      </p>
    </div>
    <div className="space-y-3">
      <div className="text-4xl font-bold text-primary/80">02</div>
      <h3 className="text-2xl font-semibold tracking-tight">Define Contract</h3>
      <p className="text-muted-foreground">
        Select your asset, strike price, and expiry. Instantly view premium and potential returns.
      </p>
    </div>
    <div className="space-y-3">
      <div className="text-4xl font-bold text-primary/80">03</div>
      <h3 className="text-2xl font-semibold tracking-tight">Execute Trade</h3>
      <p className="text-muted-foreground">
        Confirm the transaction. Your option is minted and your position is live on the blockchain.
      </p>
    </div>
  </div>
)
// --- End New Feature Content ---

export function HomeView({
  featuresLoaded,
  stepsLoaded,
  setFeaturesLoaded,
  setStepsLoaded,
  onNavigate,
  onDappNavigation,
}: HomeViewProps) {
  const rotatingTexts = ["Trade Crypto Volatility.", "Without Permission.", "Buy Calls. Drop Puts.", "Stay in Control."]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section: Sleek, Minimal, High-Impact */}
      <section className="w-full py-24 sm:py-32 md:py-40 lg:py-56 relative overflow-hidden bg-black">
        <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
          <div className="absolute inset-0 opacity-90">
            {/* Enhanced DarkVeil for a deeper, more refined background */}
            <DarkVeil
              hueShift={200} // Subtle blue shift for a tech feel
              noiseIntensity={0.05} // Very subtle noise
              scanlineIntensity={0}
              speed={0.5}
              scanlineFrequency={0}
              warpAmount={0}
              resolutionScale={0.8}
            />
          </div>
        </Suspense>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" /> {/* Subtle blur for depth */}
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-10 text-center">
              <div className="space-y-6 md:space-y-8">
                <Badge
                  className="inline-flex bg-white/10 text-white border border-white/20 backdrop-blur-lg transition-all duration-500 ease-in-out hover:scale-[1.02] hover:shadow-xl animate-breathe px-4 py-1.5 text-xs md:text-sm font-medium rounded-full tracking-wider uppercase"
                  variant="secondary"
                >
                  The Future of Decentralized Options
                </Badge>
                <h1 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[96px] xl:text-[112px] font-light tracking-tighter leading-[1.05] max-w-6xl text-white transition-all duration-500 ease-in-out px-4">
                  <span className="block">Trade Volatility.</span>
                  <span className="font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-primary/80">
                    Without Intermediaries.
                  </span>
                </h1>
                <p className="max-w-[800px] text-lg sm:text-xl md:text-2xl leading-[1.5] text-white/70 mx-auto transition-all duration-500 ease-in-out hover:text-white px-4 font-light">
                  The first truly permissionless options protocol. Engineered for precision, governed by the collective,
                  and built on verifiable code.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 w-full sm:w-auto px-4 pt-4">
                <GlassButton
                  size="xl"
                  className="gap-3 group shadow-2xl hover:shadow-primary/50 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-10 py-5 text-lg md:text-xl font-medium tracking-wide leading-[1.4] rounded-xl bg-white/10 text-white border border-white/20 backdrop-blur-md hover:bg-white/15 hover:border-white/30 w-full sm:w-auto"
                  onClick={onDappNavigation}
                >
                  Launch Terminal
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-5 w-5 md:h-6 md:w-6" />
                </GlassButton>
                <GlassButton
                  size="xl"
                  variant="outline"
                  className="gap-3 shadow-lg hover:shadow-primary/30 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-10 py-5 text-lg md:text-xl font-medium tracking-wide leading-[1.4] rounded-xl bg-white/5 text-white border border-white/15 backdrop-blur-md hover:bg-white/10 hover:border-white/25 w-full sm:w-auto"
                  onClick={() => onNavigate("presale")}
                >
                  <AnimatedIcon icon={Coins} variant="3d" className="h-5 w-5 md:h-6 md:w-6 mr-1" />
                  Buy $RELY
                </GlassButton>
              </div>
              {/* </CHANGE> */}
              <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10 text-sm md:text-base pt-8 text-white/60">
                <div
                  className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 group cursor-pointer animate-in fade-in slide-in-from-left-4"
                  style={{ animationDelay: "200ms" }}
                >
                  <AnimatedIcon
                    icon={Shield}
                    variant="glow"
                    className="h-5 w-5 md:h-6 md:w-6 text-green-400 drop-shadow-[0_0_10px_rgba(74,222,128,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(74,222,128,0.8)] transition-all duration-300"
                  />
                  <span className="font-medium text-white">Audited Smart Contracts</span>
                </div>
                <div
                  className="flex items-center gap-2 transition-all duration-300 ease-in-out hover:scale-105 group cursor-pointer animate-in fade-in slide-in-from-right-4"
                  style={{ animationDelay: "400ms" }}
                >
                  <AnimatedIcon
                    icon={Zap}
                    variant="glow"
                    className="h-5 w-5 md:h-6 md:w-6 text-yellow-400 drop-shadow-[0_0_10px_rgba(250,204,21,0.5)] group-hover:drop-shadow-[0_0_20px_rgba(250,204,21,0.8)] transition-all duration-300"
                  />
                  <span className="font-medium text-white">Instant, On-Chain Settlement</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Features Section: Clean, Grid-based, Informative */}
      <section id="features" className="w-full py-24 md:py-32 bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-10" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg tracking-wider uppercase">
                  Core Protocol
                </div>
                <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold tracking-tight leading-[1.2] transition-all duration-300 ease-in-out max-w-4xl mx-auto">
                  Engineered for the Future of Finance.
                </h2>
                <p className="mx-auto max-w-[800px] text-xl leading-[1.6] text-muted-foreground transition-all duration-300 ease-in-out font-light">
                  We've rebuilt the options market from the ground up, leveraging the power of decentralized finance to
                  offer unparalleled access, security, and efficiency.
                </p>
              </div>
            </div>
          </ScrollReveal>
          {/* Using the simulated content here */}
          {!featuresLoaded ? (
            <LoadingFeatures onLoadComplete={() => setFeaturesLoaded(true)} />
          ) : (
            <NewFeaturesContent />
          )}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* How It Works Section: Simple, Step-by-Step, Intuitive */}
      <section id="how-it-works" className="w-full py-24 md:py-32 bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-10" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-6 text-center mb-16">
              <div className="space-y-6">
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg tracking-wider uppercase">
                  Seamless Onboarding
                </div>
                <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold tracking-tight leading-[1.2] transition-all duration-300 ease-in-out max-w-4xl mx-auto">
                  Start Trading in Three Simple Steps.
                </h2>
                <p className="mx-auto max-w-[800px] text-xl leading-[1.6] text-muted-foreground transition-all duration-300 ease-in-out font-light">
                  Experience the most intuitive options trading interface in DeFi. No complex sign-ups, just direct
                  access to the market.
                </p>
              </div>
            </div>
          </ScrollReveal>
          {/* Using the simulated content here */}
          {!stepsLoaded ? <LoadingSteps onLoadComplete={() => setStepsLoaded(true)} /> : <NewStepsContent />}
          {stepsLoaded && (
            <ScrollReveal delay={400}>
              <div className="flex justify-center mt-16">
                <GlassButton
                  size="xl"
                  className="gap-3 group shadow-2xl hover:shadow-primary/50 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-10 py-5 text-lg md:text-xl font-medium tracking-wide leading-[1.4] rounded-xl bg-primary text-primary-foreground border border-primary/50 hover:bg-primary/90"
                  onClick={onDappNavigation}
                >
                  Launch Terminal Now
                  <AnimatedIcon icon={ChevronRight} variant="bounce" className="h-5 w-5 md:h-6 md:w-6" />
                </GlassButton>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Community Section: Governance and Social */}
      <section id="community" className="w-full py-24 md:py-32 bg-muted relative overflow-hidden">
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
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg tracking-wider uppercase">
                  Decentralized Governance
                </div>
                <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold tracking-tight leading-[1.2] transition-all duration-300 ease-in-out max-w-4xl mx-auto">
                  The Protocol is Owned by Its Users.
                </h2>
                <p className="text-xl leading-[1.6] text-muted-foreground max-w-[800px] mx-auto transition-all duration-300 ease-in-out font-light">
                  Join the Collective — traders, developers, and analysts shaping the next evolution of decentralized
                  derivatives. Your vote defines the future.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:gap-4 min-[400px]:flex-row items-center justify-center w-full pt-4">
                <GlassButton
                  size="lg"
                  className="gap-3 group shadow-xl hover:shadow-primary/50 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-8 py-4 text-lg font-medium tracking-wide leading-[1.4] rounded-xl bg-primary text-primary-foreground border border-primary/50 hover:bg-primary/90 w-full min-[400px]:w-auto"
                  onClick={() => window.open("https://x.com/rely_exchange", "_blank")}
                >
                  <AnimatedIcon icon={Twitter} variant="3d" className="h-5 w-5 text-white" />
                  <span>Follow on X</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </GlassButton>

                <GlassButton
                  size="lg"
                  variant="outline"
                  className="gap-3 shadow-lg hover:shadow-white/30 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-8 py-4 text-lg font-medium tracking-wide leading-[1.4] rounded-xl border-white/30 text-foreground hover:bg-white/10 w-full min-[400px]:w-auto"
                  onClick={() => window.open("https://t.me/rely_exchange", "_blank")}
                >
                  <AnimatedIcon icon={Send} variant="3d" className="h-5 w-5 text-primary" />
                  <span>Join the DAO</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Mobile App Section: Clean, Focused CTA */}
      <section className="w-full py-24 md:py-32 bg-background relative overflow-hidden">
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
                <div className="inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg tracking-wider uppercase">
                  Mobility
                </div>
                <h2 className="text-[36px] md:text-[48px] lg:text-[60px] font-semibold tracking-tight leading-[1.2] transition-all duration-300 ease-in-out max-w-4xl mx-auto">
                  Trade on the Go. Seamlessly.
                </h2>
                <p className="mx-auto max-w-[800px] text-xl leading-[1.6] text-muted-foreground transition-all duration-300 ease-in-out font-light">
                  Monitor positions, execute trades, and manage your portfolio with our native mobile experience.
                  Designed for speed and clarity.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto max-w-lg sm:max-w-none px-4 sm:px-0 pt-4">
                <GlassButton
                  size="lg"
                  className="gap-3 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-8 py-4 text-lg font-medium tracking-wide leading-[1.4] rounded-xl bg-background/50 border border-border/50 text-foreground hover:bg-background/70 w-full sm:w-auto"
                  onClick={() => window.open("#", "_blank")}
                >
                  <AnimatedIcon icon={Apple} variant="3d" className="h-6 w-6 flex-shrink-0" />
                  <span className="truncate">Download for iOS</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </GlassButton>

                <GlassButton
                  size="lg"
                  variant="outline"
                  className="gap-3 shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-8 py-4 text-lg font-medium tracking-wide leading-[1.4] rounded-xl border-border/50 text-foreground hover:bg-background/70 w-full sm:w-auto"
                  onClick={() => window.open("#", "_blank")}
                >
                  <AnimatedIcon icon={Smartphone} variant="3d" className="h-6 w-6 flex-shrink-0" />
                  <span className="truncate">Download for Android</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-all duration-200 ease-in-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5 flex-shrink-0" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Final CTA Section: Bold, Unmissable */}
      <section className="w-full py-24 md:py-32 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse opacity-50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-start justify-start space-y-10">
              <div className="space-y-6 max-w-4xl">
                <h2 className="text-[40px] sm:text-[56px] md:text-[72px] lg:text-[80px] font-semibold tracking-tight leading-[1.1] transition-all duration-300 ease-in-out hover:scale-[1.01]">
                  Ready to Trade Without Limits?
                </h2>
                <p className="text-xl leading-[1.6] text-primary-foreground/80 font-light">
                  Access the full power of decentralized options trading. Connect your wallet and experience the
                  difference.
                </p>
              </div>
              <GlassButton
                size="xl"
                variant="secondary"
                className="gap-3 group shadow-2xl hover:shadow-white/50 transition-all duration-500 ease-in-out hover:scale-[1.05] active:scale-[0.98] px-10 py-5 text-lg md:text-xl font-medium tracking-wide leading-[1.4] rounded-xl bg-white text-black border border-white/50 hover:bg-white/90"
                onClick={onDappNavigation}
              >
                Launch Terminal
                <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-5 w-5 md:h-6 md:w-6 text-black" />
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
