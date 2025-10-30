"use client"

import { useEffect, useState } from "react"
import { GlassButton } from "@/components/ui/glass-button"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TokenRowSkeleton, FeatureCardSkeleton, StepSkeleton } from "@/components/loading-skeleton"
import { Loader2, TrendingUp, TrendingDown, Link2, Eye, Users, Unlock } from "lucide-react"

interface LoadingTokensProps {
  onLoadComplete: () => void
}

export function LoadingTokens({ onLoadComplete }: LoadingTokensProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete()
    }, 2000) // 2 second loading simulation

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="rounded-lg border bg-card shadow-sm">
        <div className="p-4 md:p-6">
          <div className="grid grid-cols-4 gap-4 font-medium text-muted-foreground text-sm">
            <div>Token</div>
            <div className="text-right">Price</div>
            <div className="text-right">24h Change</div>
            <div className="text-right">Market Cap</div>
          </div>
        </div>
        <div className="divide-y">
          {Array.from({ length: 5 }).map((_, i) => (
            <TokenRowSkeleton key={i} />
          ))}
        </div>
        <div className="p-4 border-t flex items-center justify-center">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Loader2 className="h-4 w-4 animate-spin" />
            Loading market data...
          </div>
        </div>
      </div>
    </div>
  )
}

interface LoadingFeaturesProps {
  onLoadComplete: () => void
}

export function LoadingFeatures({ onLoadComplete }: LoadingFeaturesProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete()
    }, 1500) // 1.5 second loading simulation

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
      {Array.from({ length: 4 }).map((_, i) => (
        <ScrollReveal key={i} delay={i * 100}>
          <FeatureCardSkeleton />
        </ScrollReveal>
      ))}
    </div>
  )
}

interface LoadingStepsProps {
  onLoadComplete: () => void
}

export function LoadingSteps({ onLoadComplete }: LoadingStepsProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onLoadComplete()
    }, 1000) // 1 second loading simulation

    return () => clearTimeout(timer)
  }, [onLoadComplete])

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
      {Array.from({ length: 3 }).map((_, i) => (
        <ScrollReveal key={i} delay={i * 100}>
          <StepSkeleton />
        </ScrollReveal>
      ))}
    </div>
  )
}

// Actual content components with real-time price simulation
export function TokensContent() {
  const [tokens, setTokens] = useState([
    {
      name: "DOGE",
      fullName: "Dogecoin",
      price: 0.1234,
      change: 5.67,
      positive: true,
      marketCap: 16.2,
    },
    {
      name: "SHIB",
      fullName: "Shiba Inu",
      price: 0.00001234,
      change: 12.34,
      positive: true,
      marketCap: 7.3,
    },
    {
      name: "PEPE",
      fullName: "Pepe",
      price: 0.0000089,
      change: -3.45,
      positive: false,
      marketCap: 3.7,
    },
    {
      name: "FLOKI",
      fullName: "Floki Inu",
      price: 0.0002345,
      change: 8.91,
      positive: true,
      marketCap: 2.2,
    },
    {
      name: "BONK",
      fullName: "Bonk",
      price: 0.00000123,
      change: -2.34,
      positive: false,
      marketCap: 0.724,
    },
  ])

  // Simulate real-time price updates
  useEffect(() => {
    const interval = setInterval(() => {
      setTokens((prevTokens) =>
        prevTokens.map((token) => {
          // Random price change between -5% and +5%
          const changePercent = (Math.random() - 0.5) * 10
          const newPrice = token.price * (1 + changePercent / 100)
          const newChange = token.change + (Math.random() - 0.5) * 2

          return {
            ...token,
            price: Math.max(newPrice, token.price * 0.01), // Prevent negative prices
            change: newChange,
            positive: newChange > 0,
          }
        }),
      )
    }, 3000) // Update every 3 seconds

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number) => {
    if (price < 0.001) {
      return `$${price.toFixed(8)}`
    } else if (price < 1) {
      return `$${price.toFixed(6)}`
    } else {
      return `$${price.toFixed(4)}`
    }
  }

  const formatMarketCap = (cap: number) => {
    if (cap >= 1) {
      return `$${cap.toFixed(1)}B`
    } else {
      return `$${(cap * 1000).toFixed(0)}M`
    }
  }

  return (
    <div className="mx-auto max-w-4xl py-12">
      <div className="rounded-lg border bg-card shadow-sm transition-all duration-300 hover:shadow-xl hover:border-primary/20">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="grid grid-cols-4 gap-4 font-medium text-muted-foreground text-sm flex-1">
              <div>Token</div>
              <div className="text-right">Price</div>
              <div className="text-right">24h Change</div>
              <div className="text-right">Market Cap</div>
            </div>
            <div className="ml-4 flex items-center gap-2 text-xs text-muted-foreground">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              Live
            </div>
          </div>
        </div>
        <div className="divide-y">
          {tokens.map((token, i) => (
            <div
              key={i}
              className="grid grid-cols-4 gap-4 p-4 md:p-6 items-center transition-all duration-300 hover:bg-primary/5 cursor-pointer group animate-in fade-in slide-in-from-left-4"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/30">
                  <span className="font-bold text-primary">{token.name.charAt(0)}</span>
                </div>
                <div>
                  <div className="font-medium transition-colors duration-300 group-hover:text-primary">
                    {token.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{token.fullName}</div>
                </div>
              </div>
              <div className="text-right font-medium transition-colors duration-300 group-hover:text-primary">
                {formatPrice(token.price)}
              </div>
              <div
                className={`text-right font-medium transition-all duration-300 flex items-center justify-end gap-1 ${
                  token.positive ? "text-green-500 group-hover:text-green-400" : "text-red-500 group-hover:text-red-400"
                }`}
              >
                {token.positive ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {token.positive ? "+" : ""}
                {token.change.toFixed(2)}%
              </div>
              <div className="text-right font-medium transition-colors duration-300 group-hover:text-primary">
                {formatMarketCap(token.marketCap)}
              </div>
            </div>
          ))}
        </div>
        <div className="p-4 border-t">
          <GlassButton variant="outline" className="w-full">
            View All Tokens
          </GlassButton>
        </div>
      </div>
    </div>
  )
}

export function FeaturesContent() {
  const features = [
    {
      icon: Link2,
      title: "On-chain Execution",
      description:
        "No middlemen or delays. Every trade executes directly on-chain with full transparency and trustless settlement.",
      color: "from-blue-500/20 to-cyan-500/10",
      iconColor: "text-blue-500",
      glowColor: "group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.5)]",
    },
    {
      icon: Eye,
      title: "Transparent Pricing",
      description:
        "Real-time market data for every asset. See live pricing, implied volatility, and order book depth before you trade.",
      color: "from-purple-500/20 to-pink-500/10",
      iconColor: "text-purple-500",
      glowColor: "group-hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.5)]",
    },
    {
      icon: Users,
      title: "Community Governance",
      description:
        "The rules evolve through DAO proposals. Vote on new markets, fee structures, and protocol upgrades.",
      color: "from-green-500/20 to-emerald-500/10",
      iconColor: "text-green-500",
      glowColor: "group-hover:drop-shadow-[0_0_12px_rgba(34,197,94,0.5)]",
    },
    {
      icon: Unlock,
      title: "Permissionless Access",
      description:
        "Trade from anywhere, anytime. No KYC, no restrictions. Just connect your wallet and start trading options.",
      color: "from-orange-500/20 to-yellow-500/10",
      iconColor: "text-orange-500",
      glowColor: "group-hover:drop-shadow-[0_0_12px_rgba(249,115,22,0.5)]",
    },
  ]

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
      {features.map((feature, i) => (
        <ScrollReveal key={i} delay={i * 100}>
          <div
            className="glass-card rounded-2xl p-8 transition-all duration-500 hover:scale-[1.02] group cursor-pointer animate-in fade-in slide-in-from-bottom-4 relative overflow-hidden"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex flex-col items-center space-y-6 text-center relative z-10">
              <div
                className={`flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.color} transition-all duration-300 group-hover:scale-110 animate-float`}
              >
                <feature.icon
                  className={`h-10 w-10 ${feature.iconColor} ${feature.glowColor} transition-all duration-300 group-hover:rotate-6 group-hover:scale-110`}
                />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-bold transition-colors duration-300 group-hover:text-primary">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}

export function StepsContent() {
  const steps = [
    {
      number: 1,
      title: "Create Account",
      description:
        "Connect your Web3 wallet or sign up with email. Trade your way — MetaMask, WalletConnect, or traditional login.",
    },
    {
      number: 2,
      title: "Deposit Collateral",
      description: "Fund your account with USDC or ETH. Start trading with as little as $10 in collateral.",
    },
    {
      number: 3,
      title: "Trade Options",
      description: "Select your asset, strike price, and expiry. Execute calls and puts with a single click.",
    },
  ]

  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-3">
      {steps.map((step, i) => (
        <ScrollReveal key={i} delay={i * 100} direction={i === 0 ? "left" : i === 2 ? "right" : "up"}>
          <div
            className="flex flex-col items-center space-y-2 text-center group cursor-pointer transition-all duration-300 hover:scale-105 animate-in fade-in slide-in-from-bottom-4"
            style={{ animationDelay: `${i * 200}ms` }}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
              {step.number}
            </div>
            <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
            <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/80">
              {step.description}
            </p>
          </div>
        </ScrollReveal>
      ))}
    </div>
  )
}
