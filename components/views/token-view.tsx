"use client"

import { useState } from "react"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import {
  Coins,
  TrendingUp,
  Users,
  Shield,
  Zap,
  ArrowUpRight,
  PieChart,
  BarChart3,
  Target,
  Layers,
  DollarSign,
  CheckCircle,
  Calendar,
  Lock,
  Rocket,
} from "lucide-react"

type TokenSubView = "info" | "presale"

export function TokenView() {
  const [currentSubView, setCurrentSubView] = useState<TokenSubView>("info")

  // Updated tokenomics based on presale page
  const tokenomics = [
    { label: "Presale", value: "700,000,000 RELY", percentage: 70, color: "bg-green-500" },
    { label: "Liquidity", value: "150,000,000 RELY", percentage: 15, color: "bg-blue-500" },
    { label: "Team", value: "100,000,000 RELY", percentage: 10, color: "bg-purple-500" },
    { label: "Marketing", value: "50,000,000 RELY", percentage: 5, color: "bg-orange-500" },
  ]

  const vestingSchedule = [
    {
      category: "Team Tokens",
      totalTokens: "100,000,000 RELY",
      cliff: "12 months",
      vesting: "24 months linear",
      released: "0 RELY",
      nextUnlock: "TBD",
      status: "Locked",
    },
    {
      category: "Marketing Tokens",
      totalTokens: "50,000,000 RELY",
      cliff: "6 months",
      vesting: "18 months linear",
      released: "0 RELY",
      nextUnlock: "TBD",
      status: "Locked",
    },
    {
      category: "Liquidity Tokens",
      totalTokens: "150,000,000 RELY",
      cliff: "0 months",
      vesting: "Immediate",
      released: "0 RELY",
      nextUnlock: "At Launch",
      status: "Locked",
    },
  ]

  const useCases = [
    {
      icon: TrendingUp,
      title: "Trading Fee Discounts",
      description: "Hold RELY tokens to get up to 50% discount on trading fees across all perpetual contracts.",
    },
    {
      icon: Users,
      title: "Governance Voting",
      description: "Vote on platform upgrades, new token listings, and protocol parameters with your RELY tokens.",
    },
    {
      icon: Coins,
      title: "Staking Rewards",
      description: "Stake RELY tokens to earn rewards from platform fees and participate in revenue sharing.",
    },
    {
      icon: Shield,
      title: "Insurance Fund",
      description: "RELY holders contribute to and benefit from the platform's insurance fund for added security.",
    },
    {
      icon: Zap,
      title: "Premium Features",
      description: "Access advanced trading tools, analytics, and priority customer support with RELY tokens.",
    },
    {
      icon: Rocket,
      title: "Launchpad Access",
      description: "Get early access to new memecoin launches and exclusive investment opportunities.",
    },
  ]

  const handleBuyRelyClick = () => {
    // Navigate to presale page in new tab
    window.open("/presale", "_blank")
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  variant="secondary"
                >
                  Governance Token
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl">
                  Meet <span className="rainbow-text">$RELY</span> Token
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  The governance token that powers Rely Exchange. Stake, vote, and earn rewards while shaping the future
                  of memecoin trading.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton size="lg" onClick={handleBuyRelyClick} className="gap-1 group">
                  Buy $RELY
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </GlassButton>
                <GlassButton size="lg" variant="outline">
                  View Whitepaper
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Enhanced Tokenomics Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Enhanced Tokenomics</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transparent and sustainable token distribution designed for long-term growth with advanced analytics.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              {/* Enhanced Pie Chart Visualization */}
              <ScrollReveal delay={100}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <PieChart className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold">Token Distribution</h3>
                      </div>

                      {/* Visual Pie Chart Representation */}
                      <div className="relative w-64 h-64 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-green-500 via-blue-500 via-purple-500 via-orange-500 to-yellow-500 animate-spin-slow"></div>
                        <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-primary">1.5B</div>
                            <div className="text-sm text-muted-foreground">Total Supply</div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3">
                        {tokenomics.map((item, i) => (
                          <div key={i} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <div className="flex items-center gap-2">
                                <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                                <span className="font-medium">{item.label}</span>
                              </div>
                              <span className="text-primary font-bold">{item.percentage.toFixed(1)}%</span>
                            </div>
                            <div className="flex justify-between items-center text-sm text-muted-foreground">
                              <span>{item.value}</span>
                            </div>
                            <Progress value={item.percentage} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Enhanced Token Metrics */}
              <ScrollReveal delay={200}>
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div className="flex items-center gap-3">
                        <BarChart3 className="h-8 w-8 text-primary" />
                        <h3 className="text-2xl font-bold">Token Metrics</h3>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-lg bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Target className="h-5 w-5 text-primary" />
                            <span className="text-sm font-medium">Market Cap</span>
                          </div>
                          <div className="text-2xl font-bold text-primary">$0</div>
                          <div className="text-xs text-muted-foreground">Not Listed Yet</div>
                        </div>

                        <div className="p-4 rounded-lg bg-gradient-to-br from-green-500/10 to-green-500/5 border border-green-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <TrendingUp className="h-5 w-5 text-green-500" />
                            <span className="text-sm font-medium">Circulating</span>
                          </div>
                          <div className="text-2xl font-bold text-green-500">0</div>
                          <div className="text-xs text-muted-foreground">Presale Phase</div>
                        </div>

                        <div className="p-4 rounded-lg bg-gradient-to-br from-purple-500/10 to-purple-500/5 border border-purple-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <Layers className="h-5 w-5 text-purple-500" />
                            <span className="text-sm font-medium">Staked</span>
                          </div>
                          <div className="text-2xl font-bold text-purple-500">0</div>
                          <div className="text-xs text-muted-foreground">Not Available Yet</div>
                        </div>

                        <div className="p-4 rounded-lg bg-gradient-to-br from-orange-500/10 to-orange-500/5 border border-orange-500/20">
                          <div className="flex items-center gap-2 mb-2">
                            <DollarSign className="h-5 w-5 text-orange-500" />
                            <span className="text-sm font-medium">Price</span>
                          </div>
                          <div className="text-2xl font-bold text-orange-500">$0.001</div>
                          <div className="text-xs text-green-500">Presale Price</div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span className="font-medium">Token Name</span>
                          <span className="text-primary font-bold">Rely Token</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span className="font-medium">Symbol</span>
                          <span className="text-primary font-bold">$RELY</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span className="font-medium">Blockchain</span>
                          <span className="text-primary font-bold">Solana</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span className="font-medium">Token Type</span>
                          <span className="text-primary font-bold">SPL Token</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Vesting Schedule Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Token Vesting Schedule</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Transparent token release schedule ensuring long-term commitment and stability.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-6xl space-y-6">
            {vestingSchedule.map((schedule, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-300 hover:scale-[1.01] group">
                  <CardContent className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-center">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                            {schedule.category}
                          </h3>
                          <Badge variant={schedule.status === "Active" ? "default" : "secondary"} className="text-xs">
                            {schedule.status === "Active" && <CheckCircle className="h-3 w-3 mr-1" />}
                            {schedule.status === "Locked" && <Lock className="h-3 w-3 mr-1" />}
                            {schedule.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{schedule.totalTokens}</p>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Vesting Details</div>
                        <div className="text-sm text-muted-foreground">
                          <div>Cliff: {schedule.cliff}</div>
                          <div>Vesting: {schedule.vesting}</div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="text-sm font-medium">Progress</div>
                        <div className="text-sm text-muted-foreground">
                          <div>Released: {schedule.released}</div>
                          <div className="flex items-center gap-1">
                            <Calendar className="h-3 w-3" />
                            Next: {schedule.nextUnlock}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-end">
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">0%</div>
                          <div className="text-xs text-muted-foreground">Released</div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Token Utility</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                $RELY tokens have multiple use cases within the Rely Exchange ecosystem.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110">
                        <useCase.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                          {useCase.title}
                        </h3>
                        <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 text-sm">
                          {useCase.description}
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
    </div>
  )
}
