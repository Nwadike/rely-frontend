"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, MessageSquare, Clock, Search, AlertCircle } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"
import DarkVeil from "@/components/dark-veil"

interface SupportViewProps {
  onDappNavigation?: () => void
}

export function SupportView({ onDappNavigation }: SupportViewProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const supportTopics = [
    {
      title: "Getting Started",
      description: "Learn how to create an account, connect your wallet, and make your first trade.",
      icon: MessageSquare,
    },
    {
      title: "Trading Guide",
      description: "Understand how to buy calls and puts, manage positions, and execute strategies.",
      icon: Search,
    },
    {
      title: "Account & Security",
      description: "Manage your account settings, security features, and recovery options.",
      icon: AlertCircle,
    },
    {
      title: "Troubleshooting",
      description: "Find solutions to common issues and technical problems.",
      icon: Clock,
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
                  Support Center
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-4xl transition-all duration-300 ease-in-out px-4 md:px-0">
                  How Can We <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Help You?</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-0 transition-all duration-300 ease-in-out hover:text-foreground/90 px-4 md:px-0">
                  Get answers to your questions, resolve issues, and learn how to make the most of Rely Exchange.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Support Topics */}
      <section className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-16">
              {supportTopics.map((topic, index) => {
                const Icon = topic.icon
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
                          {topic.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">{topic.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="bg-muted/50 border border-border rounded-lg p-8 md:p-12 text-center">
              <h3 className="text-2xl font-semibold mb-4">Can't Find What You're Looking For?</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our support team is here to help. Reach out to us directly and we'll get back to you as soon as
                possible.
              </p>
              <GlassButton
                className="gap-2 group shadow-md hover:shadow-lg transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-3 text-base font-medium rounded-lg"
                onClick={() => window.open("https://t.me/relyexchange", "_blank")}
              >
                Contact Support
                <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </GlassButton>
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
                  Ready to Trade?
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
