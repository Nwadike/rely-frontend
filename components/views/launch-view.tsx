"use client"
import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { ArrowUpRight, Rocket, TrendingUp, Users, DollarSign, Settings, BarChart3 } from "lucide-react"
import GlareCard from "@/components/ui/glare-card"
import { GlassButton } from "@/components/ui/glass-button"

interface LaunchViewProps {
  onDappNavigation?: () => void
}

export function LaunchView({ onDappNavigation }: LaunchViewProps) {
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
                  Launch Platform
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl">
                  Launch Your Own <span className="rainbow-text">Perpetual Memecoin</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  Create, deploy, and manage your own perpetual memecoin contracts with advanced trading features and
                  community tools.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton
                  size="lg"
                  className="gap-1 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
                  onClick={onDappNavigation}
                >
                  Launch Now
                  <Rocket className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5 active:scale-95"
                  onClick={onDappNavigation}
                >
                  View Examples
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal delay={200}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Everything You Need to Launch</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Comprehensive tools and features to create successful perpetual memecoin contracts.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Settings,
                title: "Custom Parameters",
                description: "Set leverage limits, funding rates, and trading parameters tailored to your memecoin.",
              },
              {
                icon: TrendingUp,
                title: "Liquidity Management",
                description: "Advanced liquidity pools and market making tools to ensure smooth trading.",
              },
              {
                icon: Users,
                title: "Community Tools",
                description: "Built-in governance, voting, and community engagement features.",
              },
              {
                icon: DollarSign,
                title: "Revenue Sharing",
                description: "Earn fees from trading activity and distribute rewards to token holders.",
              },
              {
                icon: BarChart3,
                title: "Analytics Dashboard",
                description: "Real-time metrics, trading volume, and performance analytics.",
              },
              {
                icon: Rocket,
                title: "Instant Deployment",
                description: "Deploy your perpetual contract in minutes with our streamlined process.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={600 + i * 100}>
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

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <ScrollReveal direction="fade" delay={1000}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Launch Your Memecoin?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl">
                  Join the next generation of DeFi with perpetual memecoin contracts.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton
                  size="lg"
                  variant="secondary"
                  className="gap-1 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
                  onClick={onDappNavigation}
                >
                  Start Building
                  <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10 transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  onClick={onDappNavigation}
                >
                  Documentation
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
