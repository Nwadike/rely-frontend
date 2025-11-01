"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, Globe, Users, Target } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import DarkVeil from "@/components/dark-veil"

interface AboutViewProps {
  onDappNavigation?: () => void
}

export function AboutView({ onDappNavigation }: AboutViewProps) {
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
                  Our Story
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-4xl transition-all duration-300 ease-in-out px-4 md:px-0">
                  Building the Future of <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Decentralized Trading</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-0 transition-all duration-300 ease-in-out hover:text-foreground/90 px-4 md:px-0">
                  Rely Exchange is a community-driven platform redefining how traders access crypto derivatives with
                  transparency, fairness, and true ownership.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Mission Section */}
      <section className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[0.3px] leading-[1.3]">
                    Our Mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    We believe that trading should be accessible to everyone, without gatekeepers or restrictions. Rely
                    Exchange empowers traders to own their financial destiny through permissionless options trading on
                    the blockchain.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Global Access</h3>
                      <p className="text-muted-foreground">
                        Trade from anywhere, without geographic restrictions or regulatory barriers.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Users className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Community Owned</h3>
                      <p className="text-muted-foreground">
                        Every decision is made by the collective, ensuring fair governance and alignment with traders'
                        interests.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                        <Target className="h-6 w-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Transparent</h3>
                      <p className="text-muted-foreground">
                        All transactions and decisions live on-chain for complete transparency and auditability.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-medium tracking-[0.3px] leading-[1.3]">
                    Our Values
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Founded on principles of decentralization, transparency, and user empowerment, Rely Exchange is
                    built by traders, for traders.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors">
                    <h3 className="text-lg font-semibold mb-3">Decentralization</h3>
                    <p className="text-muted-foreground">
                      No single entity controls the platform. Decisions are made collectively by the community.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors">
                    <h3 className="text-lg font-semibold mb-3">Innovation</h3>
                    <p className="text-muted-foreground">
                      We continuously improve and evolve based on community feedback and market demands.
                    </p>
                  </div>

                  <div className="p-6 rounded-lg border border-border bg-card hover:bg-card/80 transition-colors">
                    <h3 className="text-lg font-semibold mb-3">Security First</h3>
                    <p className="text-muted-foreground">
                      Your assets and data security are paramount. All smart contracts are audited and maintained.
                    </p>
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1),transparent_70%)]" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-start justify-start space-y-10">
              <div className="space-y-6 max-w-3xl">
                <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-medium tracking-[0.3px] leading-[1.3]">
                  Join the Revolution
                </h2>
                <p className="text-lg md:text-[18px] text-primary-foreground/90 max-w-2xl">
                  Be part of a community reshaping the future of decentralized finance. Start trading without permission
                  today.
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
