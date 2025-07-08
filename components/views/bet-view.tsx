"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { TrendingUp, Users, Shield, Zap, Target, BarChart3, Play, DollarSign } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import GlareCard from "@/components/ui/glare-card"

interface BetViewProps {
  onDappNavigation?: () => void
}

export function BetView({ onDappNavigation }: BetViewProps) {
  const activeBets: any[] = []
  // const activeBets = [
  //   {
  //     id: "BET-001",
  //     title: "Will PEPE reach $0.01 by end of month?",
  //     category: "Crypto",
  //     totalPool: "15,420 RELY",
  //     yesOdds: "2.4x",
  //     noOdds: "1.6x",
  //     participants: 234,
  //     timeLeft: "12 days",
  //   },
  // ]

  const categories = [
    {
      icon: TrendingUp,
      title: "Crypto Prices",
      description: "Bet on cryptocurrency price movements and market predictions",
      color: "from-orange-500/20 to-orange-500/10",
      iconColor: "text-orange-500",
      count: "0",
    },
    {
      icon: Users,
      title: "Social Events",
      description: "Predict outcomes of social media events and viral trends",
      color: "from-blue-500/20 to-blue-500/10",
      iconColor: "text-blue-500",
      count: "0",
    },
    {
      icon: Shield,
      title: "DeFi Protocols",
      description: "Bet on DeFi protocol launches, updates, and performance",
      color: "from-green-500/20 to-green-500/10",
      iconColor: "text-green-500",
      count: "0",
    },
    {
      icon: Zap,
      title: "Market Events",
      description: "Predict major market events and economic indicators",
      color: "from-purple-500/20 to-purple-500/10",
      iconColor: "text-purple-500",
      count: "0",
    },
    {
      icon: Target,
      title: "Gaming & NFTs",
      description: "Bet on gaming outcomes and NFT collection performance",
      color: "from-pink-500/20 to-pink-500/10",
      iconColor: "text-pink-500",
      count: "0",
    },
    {
      icon: BarChart3,
      title: "Custom Bets",
      description: "Create your own prediction markets for any event",
      color: "from-cyan-500/20 to-cyan-500/10",
      iconColor: "text-cyan-500",
      count: "0",
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  variant="secondary"
                >
                  Prediction Markets
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl">
                  Bet on <span className="rainbow-text">Anything</span> You Want
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  Create custom prediction markets, bet on crypto prices, social events, and more. Put your knowledge to
                  the test and earn RELY tokens.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton
                  size="lg"
                  className="gap-1 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
                  onClick={onDappNavigation}
                >
                  Start Betting
                  <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5 active:scale-95"
                  onClick={onDappNavigation}
                >
                  Create Market
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Active Bets Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Active Prediction Markets</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join active prediction markets and put your forecasting skills to the test.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl space-y-6">
            {activeBets.length > 0 ? (
              activeBets.map((bet, i) => (
                <ScrollReveal key={i} delay={300 + i * 100}>
                  <GlareCard className="glass-card transition-all duration-300 hover:scale-[1.01] group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {bet.category}
                            </Badge>
                            <span className="text-sm text-muted-foreground">{bet.timeLeft} left</span>
                          </div>
                          <div className="text-sm text-muted-foreground">{bet.participants} participants</div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {bet.title}
                          </h3>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <span>Total Pool: {bet.totalPool}</span>
                          </div>
                        </div>

                        <div className="flex gap-2 pt-2">
                          <GlassButton
                            size="sm"
                            className="flex-1 transition-all duration-300 hover:scale-105"
                            onClick={onDappNavigation}
                          >
                            Yes ({bet.yesOdds})
                          </GlassButton>
                          <GlassButton
                            size="sm"
                            variant="outline"
                            className="flex-1 transition-all duration-300 hover:scale-105"
                            onClick={onDappNavigation}
                          >
                            No ({bet.noOdds})
                          </GlassButton>
                        </div>
                      </div>
                    </CardContent>
                  </GlareCard>
                </ScrollReveal>
              ))
            ) : (
              <ScrollReveal delay={300}>
                <Card className="glass-card">
                  <CardContent className="p-12 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Target className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">No Active Markets</h3>
                        <p className="text-muted-foreground max-w-md">
                          There are currently no active prediction markets. Be the first to create one and start
                          earning!
                        </p>
                      </div>
                      <GlassButton className="mt-4" onClick={onDappNavigation}>
                        Create Market
                      </GlassButton>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal delay={600}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Bet on Rely?</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Advanced prediction markets with transparent odds and instant payouts.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Shield,
                title: "Transparent Odds",
                description: "All odds are calculated transparently on-chain with no hidden fees or manipulation.",
              },
              {
                icon: Zap,
                title: "Instant Payouts",
                description: "Automatic payouts when markets resolve, no waiting for manual processing.",
              },
              {
                icon: DollarSign,
                title: "Low Fees",
                description: "Minimal platform fees mean more winnings go directly to successful predictors.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={700 + i * 150}>
                <GlareCard className="glass-card transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110">
                        <feature.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-6" />
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
                </GlareCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal delay={1000}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Betting Categories</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Explore different types of prediction markets and find your expertise.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((category, i) => (
              <ScrollReveal key={i} delay={1100 + i * 100}>
                <GlareCard className="glass-card transition-all duration-300 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${category.color} transition-all duration-300 group-hover:scale-110`}
                        >
                          <category.icon
                            className={`h-6 w-6 ${category.iconColor} transition-transform duration-300 group-hover:rotate-6`}
                          />
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{category.count}</div>
                          <div className="text-xs text-muted-foreground">Active</div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-primary">
                          {category.title}
                        </h3>
                        <p className="text-sm text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90">
                          {category.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </GlareCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
