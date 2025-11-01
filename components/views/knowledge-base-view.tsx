"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, BookOpen, Zap, Shield, TrendingUp } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import DarkVeil from "@/components/dark-veil"

interface KnowledgeBaseViewProps {
  onDappNavigation?: () => void
}

export function KnowledgeBaseView({ onDappNavigation }: KnowledgeBaseViewProps) {
  const articles = [
    {
      category: "Getting Started",
      icon: BookOpen,
      items: [
        "What is Rely Exchange?",
        "How to Connect Your Wallet",
        "Creating Your First Account",
        "Understanding the Dashboard",
      ],
    },
    {
      category: "Trading Basics",
      icon: TrendingUp,
      items: [
        "Call and Put Options Explained",
        "How to Place a Trade",
        "Managing Your Positions",
        "Understanding Strike Prices",
      ],
    },
    {
      category: "Advanced Strategies",
      icon: Zap,
      items: [
        "Multi-leg Option Strategies",
        "Risk Management",
        "Technical Analysis on Rely",
        "Optimizing Your Returns",
      ],
    },
    {
      category: "Security & Safety",
      icon: Shield,
      items: [
        "Wallet Security Best Practices",
        "Protecting Your Account",
        "Understanding Smart Contracts",
        "On-chain Verification",
      ],
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
                  Knowledge Base
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-4xl transition-all duration-300 ease-in-out px-4 md:px-0">
                  Learn Everything About <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Decentralized Trading</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-0 transition-all duration-300 ease-in-out hover:text-foreground/90 px-4 md:px-0">
                  Comprehensive guides, tutorials, and resources to help you master Rely Exchange.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Articles Grid */}
      <section className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {articles.map((category, idx) => {
                const Icon = category.icon
                return (
                  <div key={idx} className="space-y-6">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <h3 className="text-xl font-semibold">{category.category}</h3>
                    </div>
                    <div className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <div
                          key={itemIdx}
                          className="p-4 rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-300 cursor-pointer group hover:shadow-md hover:-translate-y-0.5"
                        >
                          <p className="text-base text-foreground group-hover:text-primary transition-colors">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
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
                  Start Your Trading Journey
                </h2>
                <p className="text-lg md:text-[18px] text-primary-foreground/90 max-w-2xl">
                  Armed with knowledge and ready to trade? Launch the terminal and start making your first options
                  trades today.
                </p>
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
