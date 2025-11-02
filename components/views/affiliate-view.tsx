"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, Users, TrendingUp, Network, DollarSign } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import DarkVeil from "@/components/dark-veil"

interface AffiliateViewProps {
  onDappNavigation?: () => void
}

export function AffiliateView({ onDappNavigation }: AffiliateViewProps) {
  const benefits = [
    {
      title: "Fixed Referral Bonus",
      description: "Earn a fixed bonus every time someone you referred makes their first deposit.",
      icon: DollarSign,
    },
    {
      title: "Trading Fee Commission",
      description:
        "Earn a percentage of trading fees from all trades made by your referrals - not just on the first day, but continuously.",
      icon: TrendingUp,
    },
    {
      title: "Multi-Level Rewards",
      description:
        "Earn from your downliners too! When people referred by your referrals trade, you earn rewards from their activity as well.",
      icon: Network,
    },
    {
      title: "Visual Tree Chart",
      description:
        "Track your entire referral network with an interactive tree chart showing all your downliners when you login.",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
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
            <div className="flex flex-col items-start justify-start space-y-8 md:space-y-12">
              <div className="space-y-6 md:space-y-8">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg animate-breathe px-3 py-1 md:px-4 md:py-1.5 text-xs md:text-sm font-medium rounded-lg"
                  variant="secondary"
                >
                  Affiliate Program
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-4xl transition-all duration-300 ease-in-out px-4 md:px-0">
                  Earn While You <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Share</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-0 transition-all duration-300 ease-in-out hover:text-foreground/90 px-4 md:px-0">
                  Join our multi-level referral program and earn continuous rewards from your network's trading
                  activity.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Benefits Section */}
      <section className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-4">How It Works</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Our referral program is designed to reward you for growing the Rely Exchange community.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    className="p-8 rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 rounded-lg p-8 md:p-12">
              <div className="max-w-3xl">
                <h3 className="text-2xl font-semibold mb-4">Multi-Level Referral System</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our unique multi-level system means you don't just earn from your direct referrals. When the people
                  you referred bring in their own referrals, you earn from their trading activity too. Track your entire
                  network with our interactive tree chart that visualizes all your downliners and their performance.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span>Unlimited earning potential</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span>Real-time tracking</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span>Transparent rewards</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* CTA Section */}
      <section className="w-full py-[100px] md:py-[120px] bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-start justify-start space-y-10">
              <div className="space-y-6 max-w-3xl">
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-[0.3px] leading-[1.3]">
                  Start Earning Today
                </h2>
                <p className="text-lg text-primary-foreground/90">
                  Join the program and start building your referral network. The more you share, the more you earn.
                </p>
              </div>
              <GlassButton
                size="lg"
                variant="secondary"
                className="gap-2 group shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-4 text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg"
                onClick={onDappNavigation}
              >
                Get Your Referral Link
                <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-5 w-5" />
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
