"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import {
  Coins,
  TrendingUp,
  Shield,
  Zap,
  ArrowUpRight,
  DollarSign,
  Unlock,
  Activity,
  CheckCircle,
  Network,
  Percent,
} from "lucide-react"

export function StakeView() {
  const stakingPairs = [
    {
      pair: "BTC/USDT",
      roi: "12.5%",
      tvl: "$2,450,000",
      risk: "Low",
      color: "text-orange-500",
      bgColor: "from-orange-500/20 to-orange-500/10",
      borderColor: "border-orange-500/20",
    },
    {
      pair: "ETH/USDT",
      roi: "15.8%",
      tvl: "$1,850,000",
      risk: "Low",
      color: "text-blue-500",
      bgColor: "from-blue-500/20 to-blue-500/10",
      borderColor: "border-blue-500/20",
    },
    {
      pair: "SOL/USDT",
      roi: "22.3%",
      tvl: "$980,000",
      risk: "Medium",
      color: "text-purple-500",
      bgColor: "from-purple-500/20 to-purple-500/10",
      borderColor: "border-purple-500/20",
    },
    {
      pair: "DOGE/USDT",
      roi: "35.7%",
      tvl: "$450,000",
      risk: "High",
      color: "text-yellow-500",
      bgColor: "from-yellow-500/20 to-yellow-500/10",
      borderColor: "border-yellow-500/20",
    },
  ]

  const benefits = [
    {
      icon: Shield,
      title: "Guaranteed Returns",
      description:
        "Your staked capital is protected with guaranteed returns based on the selected trading pair's performance.",
    },
    {
      icon: Percent,
      title: "Automatic ROI Calculation",
      description:
        "Returns are automatically calculated and distributed based on pool performance and your stake percentage.",
    },
    {
      icon: Network,
      title: "Multi-Level Rewards",
      description: "Earn from both winning trades (shared profits) and losing trades (trader losses) in your pool.",
    },
    {
      icon: Unlock,
      title: "Flexible Withdrawal",
      description: "Withdraw your stake and accumulated rewards at any time with no lock-up periods.",
    },
  ]

  const howItWorks = [
    {
      step: "1",
      title: "Select a Trading Pair",
      description:
        "Choose from available pairs like BTC/USDT, ETH/USDT, SOL/USDT. Each pair has different APY rates based on trading volume and volatility.",
    },
    {
      step: "2",
      title: "Stake Your Capital",
      description:
        "Deposit USDT into the liquidity pool. Your stake provides the reserves needed to pay out winning traders.",
    },
    {
      step: "3",
      title: "Earn from Trading Activity",
      description:
        "When traders lose their predictions, their investment is added to the pool and distributed among all stakers proportionally.",
    },
    {
      step: "4",
      title: "Pool Pays Winners",
      description:
        "When traders win, their 85% profit is paid from the pool reserves. Your stake helps maintain liquidity for instant payouts.",
    },
    {
      step: "5",
      title: "Collect Guaranteed Returns",
      description:
        "Regardless of individual trade outcomes, you earn guaranteed returns based on overall pool performance and trading fees.",
    },
  ]

  const revenueStreams = [
    {
      icon: TrendingUp,
      title: "Trader Losses",
      description:
        "When traders make incorrect predictions, 100% of their investment is distributed among pool stakers.",
      percentage: "60-70%",
      color: "text-green-500",
    },
    {
      icon: DollarSign,
      title: "Trading Fees",
      description: "A small percentage of every trade is collected as fees and distributed to liquidity providers.",
      percentage: "20-25%",
      color: "text-blue-500",
    },
    {
      icon: Activity,
      title: "Spread Revenue",
      description: "Profit from the difference between entry and settlement prices on high-volume trading pairs.",
      percentage: "10-15%",
      color: "text-purple-500",
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
                  Liquidity Staking
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-5xl transition-all duration-300 ease-in-out px-4">
                  Earn <span className="text-foreground">Guaranteed Returns</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-auto transition-all duration-300 ease-in-out hover:text-foreground/90 px-4">
                  Stake your capital to provide liquidity reserves for binary options trading. Earn guaranteed returns
                  from trader losses, trading fees, and pool performance across multiple trading pairs.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto px-4">
                <GlassButton
                  size="lg"
                  className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-6 py-3 md:px-8 md:py-4 text-base md:text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg hover:animate-pulse-glow w-full sm:w-auto"
                >
                  Start Staking
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-4 w-4 md:h-5 md:w-5" />
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Available Staking Pairs */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Available Staking Pairs</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Choose from multiple trading pairs with varying APY rates and risk profiles.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
            {stakingPairs.map((pair, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card
                  className={`glass-card transition-all duration-500 hover:scale-[1.02] group cursor-pointer border ${pair.borderColor}`}
                >
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="flex items-start sm:items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${pair.bgColor} border ${pair.borderColor}`}
                          >
                            <Coins className={`h-6 w-6 ${pair.color}`} />
                          </div>
                          <div>
                            <h3 className="text-xl font-bold">{pair.pair}</h3>
                            <Badge variant="outline" className="text-xs mt-1">
                              {pair.risk} Risk
                            </Badge>
                          </div>
                        </div>
                        <div className="text-right shrink-0">
                          <div className={`text-xl sm:text-2xl font-bold ${pair.color} leading-tight`}>{pair.roi}</div>
                          <div className="text-[10px] sm:text-xs text-muted-foreground whitespace-nowrap">
                            Monthly ROI
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t border-border/50">
                        <div>
                          <div className="text-sm text-muted-foreground">Total Value Locked</div>
                          <div className="text-lg font-bold blur-sm select-none">{pair.tvl}</div>
                        </div>
                        <GlassButton size="sm" variant="outline" className="gap-2">
                          Stake Now
                          <ArrowUpRight className="h-4 w-4" />
                        </GlassButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How Staking Works */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How Liquidity Staking Works</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Understand the complete staking mechanism and how you earn guaranteed returns.
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

      {/* Revenue Streams */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Revenue Streams</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Your staking rewards come from multiple sources, ensuring consistent and guaranteed returns.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {revenueStreams.map((stream, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-500 hover:scale-[1.02] group">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:scale-110">
                        <stream.icon
                          className={`h-8 w-8 ${stream.color} transition-transform duration-300 group-hover:rotate-6`}
                        />
                      </div>
                      <div className="space-y-2">
                        <div className={`text-3xl font-bold ${stream.color}`}>{stream.percentage}</div>
                        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                          {stream.title}
                        </h3>
                        <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 text-sm">
                          {stream.description}
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

      {/* Staking Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Staking Benefits</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Professional liquidity provision with institutional-grade features and protections.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col space-y-4">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:scale-110">
                        <benefit.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 text-sm">
                          {benefit.description}
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

      {/* Example Scenario */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Example Scenario</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                See how staking works in practice with a real-world example.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl">
            <ScrollReveal>
              <Card className="glass-card">
                <CardContent className="p-8">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="p-6 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="text-sm text-muted-foreground mb-2">Your Stake</div>
                        <div className="text-3xl font-bold text-primary">$10,000</div>
                        <div className="text-sm text-muted-foreground mt-1">in BTC/USDT Pool</div>
                      </div>
                      <div className="p-6 rounded-lg bg-blue-500/10 border border-blue-500/20">
                        <div className="text-sm text-muted-foreground mb-2">Pool Share</div>
                        <div className="text-3xl font-bold text-blue-500">5%</div>
                        <div className="text-sm text-muted-foreground mt-1">of Total Pool</div>
                      </div>
                      <div className="p-6 rounded-lg bg-green-500/10 border border-green-500/20">
                        <div className="text-sm text-muted-foreground mb-2">Monthly ROI</div>
                        <div className="text-3xl font-bold text-green-500">12.5%</div>
                        <div className="text-sm text-muted-foreground mt-1">Guaranteed Return</div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                        <CheckCircle className="h-6 w-6 text-green-500 shrink-0 mt-1" />
                        <div>
                          <div className="font-bold mb-1">Trader Makes Losing Prediction</div>
                          <div className="text-sm text-muted-foreground">
                            A trader invests $1,000 on a CALL option for BTC/USDT and loses. The $1,000 is added to the
                            pool. Your 5% share earns you $50 instantly.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                        <CheckCircle className="h-6 w-6 text-blue-500 shrink-0 mt-1" />
                        <div>
                          <div className="font-bold mb-1">Trader Makes Winning Prediction</div>
                          <div className="text-sm text-muted-foreground">
                            Another trader invests $500 and wins, earning $425 (85% profit). This is paid from the pool
                            reserves. Your guaranteed returns remain unaffected due to pool diversification.
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 rounded-lg bg-muted/50">
                        <CheckCircle className="h-6 w-6 text-purple-500 shrink-0 mt-1" />
                        <div>
                          <div className="font-bold mb-1">Monthly Earnings</div>
                          <div className="text-sm text-muted-foreground">
                            After 30 days with consistent trading activity, you've earned approximately $104 (1.04%
                            monthly return) from your $10,000 stake, with your principal fully protected.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Start Earning Today</h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl">
                  Join our liquidity pools and start earning guaranteed returns from binary options trading activity.
                </p>
              </div>
              <GlassButton
                size="lg"
                className="gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105"
              >
                View All Staking Pools
                <AnimatedIcon icon={Zap} variant="bounce" className="h-5 w-5" />
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
