"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Video, Users, Coins, Play, Eye, Heart } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import GlareCard from "@/components/ui/glare-card"

interface DareViewProps {
  onDappNavigation?: () => void
}

export function DareView({ onDappNavigation }: DareViewProps) {
  const liveStreamers: any[] = []
  // const liveStreamers = [
  //   {
  //     name: "CryptoKing",
  //     viewers: 1247,
  //     title: "Trading PEPE live - dare me to do crazy trades!",
  //     avatar: "👑",
  //     darePool: "2,450 RELY",
  //     category: "Trading",
  //   },
  //   {
  //     name: "MemeLord",
  //     viewers: 892,
  //     title: "Reacting to new memecoins - send dares!",
  //     avatar: "🚀",
  //     darePool: "1,890 RELY",
  //     category: "Entertainment",
  //   },
  //   {
  //     name: "DeFiDaredevil",
  //     viewers: 543,
  //     title: "Extreme DeFi challenges - what's your dare?",
  //     avatar: "💎",
  //     darePool: "3,120 RELY",
  //     category: "DeFi",
  //   },
  // ]

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
                  Live Streaming
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl">
                  <span className="rainbow-text">Dare Streamers</span> to Do Anything
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  Watch live streamers and dare them to do challenges by paying with RELY tokens. Interactive
                  entertainment meets DeFi rewards.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton
                  size="lg"
                  className="gap-1 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
                  onClick={onDappNavigation}
                >
                  Start Watching
                  <Play className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5 active:scale-95"
                  onClick={onDappNavigation}
                >
                  Go Live
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Live Streamers Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Live Streamers</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Join live streams and dare creators to do challenges with RELY tokens.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl space-y-6">
            {liveStreamers.length > 0 ? (
              liveStreamers.map((streamer, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <GlareCard className="glass-card transition-all duration-300 hover:scale-[1.01] group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex items-center gap-4">
                          <div className="relative">
                            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-2xl">
                              {streamer.avatar}
                            </div>
                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                                {streamer.name}
                              </h3>
                              <Badge variant="outline" className="text-xs">
                                {streamer.category}
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-2">{streamer.title}</p>
                            <div className="flex items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Eye className="h-4 w-4" />
                                {streamer.viewers} watching
                              </div>
                              <div className="flex items-center gap-1">
                                <Coins className="h-4 w-4" />
                                {streamer.darePool} in dares
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <GlassButton
                            variant="outline"
                            size="sm"
                            className="transition-all duration-300 hover:scale-105"
                          >
                            <Heart className="h-4 w-4 mr-1" />
                            Follow
                          </GlassButton>
                          <GlassButton
                            className="transition-all duration-300 hover:scale-105"
                            onClick={onDappNavigation}
                          >
                            Watch & Dare
                          </GlassButton>
                        </div>
                      </div>
                    </CardContent>
                  </GlareCard>
                </ScrollReveal>
              ))
            ) : (
              <ScrollReveal>
                <Card className="glass-card">
                  <CardContent className="p-12 text-center">
                    <div className="flex flex-col items-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                        <Video className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">No Live Streamers</h3>
                        <p className="text-muted-foreground max-w-md">
                          There are currently no live streamers online. Check back soon or be the first to go live!
                        </p>
                      </div>
                      <GlassButton className="mt-4" onClick={onDappNavigation}>
                        Go Live
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
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Video,
                title: "Live Streaming",
                description: "High-quality live streaming platform with integrated dare functionality.",
              },
              {
                icon: Coins,
                title: "Token Rewards",
                description: "Streamers earn RELY tokens when they accept and complete dares.",
              },
              {
                icon: Users,
                title: "Interactive Community",
                description: "Engage with streamers and community through dares and challenges.",
              },
            ].map((feature, i) => (
              <ScrollReveal key={i} delay={i * 100}>
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
    </div>
  )
}
