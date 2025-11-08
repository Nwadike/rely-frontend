"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import {
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  AlertTriangle,
  Shield,
  Target,
  BarChart3,
  Clock,
  Activity,
  Zap,
  CheckCircle,
  XCircle,
} from "lucide-react"

export function TradeView() {
  const features = [
    {
      icon: TrendingUp,
      title: "CALL Contracts (Up)",
      description: "Acquire a CALL contract to speculate on an asset's price increase over a defined period. Fixed payout of up to 85% on expiry.",
      color: "text-green-500",
      bgColor: "from-green-500/20 to-green-500/10",
      borderColor: "border-green-500/20",
    },
    {
      icon: TrendingDown,
      title: "PUT Contracts (Down)",
      description: "Acquire a PUT contract to speculate on an asset's price decrease over a defined period. Fixed payout of up to 85% on expiry.",
      color: "text-red-500",
      bgColor: "from-red-500/20 to-red-500/10",
      borderColor: "border-red-500/20",
    },
    {
      icon: Clock,
      title: "Flexible Expiry Windows",
      description: "Define your contract duration, from short-term volatility captures to longer-term market views. Full control over expiry.",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      icon: Activity,
      title: "Instant On-Chain Settlement",
      description: "Leverage decentralized oracles for transparent, tamper-proof price feeds and instant, trustless settlement upon contract expiry.",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/20",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Select Your Asset",
      description: "Choose from a wide range of cryptocurrency pairs including BTC/USDT, ETH/USDT, SOL/USDT, and more.",
    },
    {
      step: "2",
      title: "Define Contract Direction",
      description: "Choose CALL (Up) or PUT (Down) based on your market conviction. This defines the contract's strike condition.",
    },
    {
      step: "3",
      title: "Determine Collateral",
      description: "Specify the amount of collateral to secure your position. Your maximum risk is limited to this amount.",
    },
    {
      step: "4",
      title: "Set Expiry Time",
      description: "Select the precise time for the contract to be evaluated against the oracle price.",
    },
    {
      step: "5",
      title: "Execute and Settle",
      description: "Confirm the transaction. The contract is minted on-chain and automatically settles upon expiry.",
    },
  ]

  const riskFactors = [
    {
      icon: AlertTriangle,
      title: "Fixed-Risk Exposure",
      description:
        "Your maximum loss is capped at the collateral you commit to the contract. The potential for high returns is balanced by the risk of total loss of collateral.",
    },
    {
      icon: Target,
      title: "Binary Outcome Structure",
      description:
        "The contract is binary: it either expires 'In-the-Money' for a fixed return, or 'Out-of-the-Money,' resulting in the loss of the collateral.",
    },
    {
      icon: BarChart3,
      title: "Volatility and Expiry",
      description: "The short-term nature of these contracts means high market volatility can rapidly impact the outcome at the moment of expiry.",
    },
    {
      icon: Shield,
      title: "Strict Expiry Condition",
      description:
        "The contract must meet the exact condition at the moment of expiry. Near-misses still result in an unsuccessful contract.",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="w-full py-16 sm:py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background via-background to-muted relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808018_1px,transparent_1px),linear-gradient(to_bottom,#80808018_1px,transparent_1px)] bg-[size:32px_32px] opacity-30 animate-parallax" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,119,198,0.1),transparent_50%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 md:space-y-12 text-center">
              <div className="space-y-6 md:space-y-8">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-breathe px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium rounded-lg"
                  variant="secondary"
                >
                  Fixed-Return Options (FRO)
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-5xl transition-all duration-300 ease-in-out px-4">
                  Trade Volatility with <span className="text-foreground">Decentralized Precision</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-auto transition-all duration-300 ease-in-out hover:text-foreground/90 px-4">
                  Execute Execute fully collateralized, on-chain options contracts on cryptocurrency pairs. Predict market direction with CALL (Up) and PUT (Down) contracts and achieve up to 85% fixed return on successful trades.imeframes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4">
                <GlassButton
                  size="lg"
                  className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-6 py-3 md:px-8 md:py-4 text-base md:text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg hover:animate-pulse-glow w-full sm:w-auto"
                >
                  Start Trading
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-4 w-4 md:h-5 md:w-5" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Trading Features */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Trading Features</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Professional-grade binary options trading with transparent mechanics and instant execution.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div
                        className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.bgColor} border ${feature.borderColor} transition-all duration-300 group-hover:scale-110`}
                      >
                        <feature.icon
                          className={`h-8 w-8 ${feature.color} transition-transform duration-300 group-hover:rotate-6`}
                        />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 text-sm">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Profit & Loss Explanation */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Transparent Payout Mechanics</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Clarity on every trade. Our fixed-return structure ensures you know your maximum profit and loss before execution.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8">
            <ScrollReveal delay={100}>
              <Card className="glass-card border-green-500/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-green-500/20 to-green-500/10">
                        <CheckCircle className="h-6 w-6 text-green-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-green-500">Successful Contract Expiry</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="text-sm text-muted-foreground mb-2">Investment</div>
                        <div className="text-3xl font-bold text-green-500">$100</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <ArrowUpRight className="h-6 w-6 text-green-500" />
                      </div>
                      <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="text-sm text-muted-foreground mb-2">Total Return</div>
                        <div className="text-3xl font-bold text-green-500">$185</div>
                        <div className="text-sm text-green-500 mt-1">+85% Profit ($85)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <Card className="glass-card border-red-500/20">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-500/20 to-red-500/10">
                        <XCircle className="h-6 w-6 text-red-500" />
                      </div>
                      <h3 className="text-2xl font-bold text-red-500">Unsuccessful Contract Expiry</h3>
                    </div>
                    <div className="space-y-4">
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <div className="text-sm text-muted-foreground mb-2">Investment</div>
                        <div className="text-3xl font-bold text-red-500">$100</div>
                      </div>
                      <div className="flex items-center justify-center">
                        <TrendingDown className="h-6 w-6 text-red-500" />
                      </div>
                      <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20">
                        <div className="text-sm text-muted-foreground mb-2">Total Return</div>
                        <div className="text-3xl font-bold text-red-500">$0</div>
                        <div className="text-sm text-red-500 mt-1">-100% Loss ($100)</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Trading Workflow */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">The Trading Workflow</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A streamlined, intuitive process to execute your first decentralized options contract. From wallet connection to settlement.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-3xl space-y-6">
            {howItWorks.map((item, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-300 hover:scale-[1.01] group">
                  <CardContent className="p-6">
                    <div className="flex gap-6 items-start">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/20 transition-all duration-300 group-hover:scale-110">
                        <span className="text-2xl font-bold text-primary">{item.step}</span>
                      </div>
                      <div className="space-y-2 flex-1">
                        <h3 className="text-xl font-bold group-hover:text-primary transition-colors">{item.title}</h3>
                        <p className="text-muted-foreground group-hover:text-foreground/90 transition-colors text-sm">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Risk Warning */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge variant="destructive" className="text-sm px-4 py-1.5">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Important Risk Disclosure
              </Badge>
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Risk Disclosure and Transparency</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
           Trading Fixed-Return Options involves significant risk. We prioritize transparency so you can trade responsibly.             trading.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
            {riskFactors.map((risk, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card border-orange-500/20">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500/20 to-orange-500/10 border border-orange-500/20">
                        <risk.icon className="h-6 w-6 text-orange-500" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold">{risk.title}</h3>
                        <p className="text-muted-foreground text-sm">{risk.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={400}>
            <div className="mt-12 mx-auto max-w-3xl">
              <Card className="glass-card border-red-500/20 bg-red-500/5">
                <CardContent className="p-8">
                  <div className="space-y-4 text-center">
                    <AlertTriangle className="h-12 w-12 text-red-500 mx-auto" />
                    <h3 className="text-xl font-bold">Risk Warning</h3>
                    <p className="text-muted-foreground">
                      Trading binary options carries a high level of risk and may not be suitable for all investors. You
                      should never invest money that you cannot afford to lose. Before trading, please ensure you fully
                      understand the risks involved and seek independent financial advice if necessary. Past performance
                      is not indicative of future results.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Trade with Confidence?</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join thousanJoin the decentralized revolution. Experience the power of fixed-return options with transparent, on-chain mechanics and instant, trustless settlement.ments.
                </p>
              </div>
              <GlassButton
                size="lg"
                className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                Launch Terminal
                <AnimatedIcon icon={Zap} variant="bounce" className="h-5 w-5" />
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
