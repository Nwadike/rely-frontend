"use client"

import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Vote, Shield, CheckCircle, Clock, TrendingUp } from "lucide-react"
import { GlassButton } from "@/components/ui/glass-button"
import GlareCard from "@/components/ui/glare-card"
import { Card, CardContent } from "@/components/ui/card"

interface GovernanceViewProps {
  onDappNavigation?: () => void
}

export function GovernanceView({ onDappNavigation }: GovernanceViewProps) {
  const proposals: any[] = []
  // const proposals = [
  //   {
  //     id: "REP-001",
  //     title: "Increase maximum leverage to 150x",
  //     description:
  //       "Proposal to increase the maximum leverage available on the platform from 100x to 150x for experienced traders.",
  //     status: "Active",
  //     votes: { for: 12450, against: 3200 },
  //     timeLeft: "5 days",
  //     quorum: "75%",
  //   },
  //   {
  //     id: "REP-002",
  //     title: "Add new memecoin: BONK",
  //     description: "Community proposal to add BONK token to the trading platform with perpetual contracts.",
  //     status: "Active",
  //     votes: { for: 8900, against: 1100 },
  //     timeLeft: "2 days",
  //     quorum: "85%",
  //   },
  //   {
  //     id: "REP-003",
  //     title: "Reduce trading fees by 0.1%",
  //     description: "Proposal to reduce platform trading fees from 0.3% to 0.2% to increase competitiveness.",
  //     status: "Passed",
  //     votes: { for: 15600, against: 2400 },
  //     timeLeft: "Ended",
  //     quorum: "90%",
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
                  Governance
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl">
                  Shape the Future of <span className="rainbow-text">Rely Exchange</span>
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  Participate in governance decisions, vote on proposals, and help steer the direction of the platform
                  with RELY tokens.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton
                  size="lg"
                  className="gap-1 transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95 group"
                  onClick={onDappNavigation}
                >
                  Vote Now
                  <Vote className="h-4 w-4 transition-transform duration-300 group-hover:rotate-12" />
                </GlassButton>
                <GlassButton
                  size="lg"
                  variant="outline"
                  className="transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-primary/5 active:scale-95"
                  onClick={onDappNavigation}
                >
                  Create Proposal
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Active Proposals Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Active Proposals</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Vote on proposals that shape the future of Rely Exchange.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto max-w-4xl space-y-6">
            {proposals.length > 0 ? (
              proposals.map((proposal, i) => (
                <ScrollReveal key={i} delay={i * 100}>
                  <GlareCard className="glass-card transition-all duration-300 hover:scale-[1.01] group cursor-pointer">
                    <CardContent className="p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <Badge variant="outline" className="text-xs">
                              {proposal.id}
                            </Badge>
                            <Badge
                              variant={
                                proposal.status === "Passed"
                                  ? "default"
                                  : proposal.status === "Active"
                                    ? "secondary"
                                    : "outline"
                              }
                              className="text-xs"
                            >
                              {proposal.status === "Passed" && <CheckCircle className="h-3 w-3 mr-1" />}
                              {proposal.status === "Active" && <Clock className="h-3 w-3 mr-1" />}
                              {proposal.status}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground">{proposal.timeLeft}</div>
                        </div>

                        <div>
                          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                            {proposal.title}
                          </h3>
                          <p className="text-sm text-muted-foreground">{proposal.description}</p>
                        </div>

                        <div className="space-y-3">
                          <div className="flex items-center justify-between text-sm">
                            <span>Voting Progress</span>
                            <span className="text-muted-foreground">Quorum: {proposal.quorum}</span>
                          </div>

                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                              <span className="text-green-500">For: {proposal.votes.for.toLocaleString()}</span>
                              <span className="text-red-500">Against: {proposal.votes.against.toLocaleString()}</span>
                            </div>

                            <div className="w-full bg-muted rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-green-500 to-primary h-2 rounded-full transition-all duration-300"
                                style={{
                                  width: `${(proposal.votes.for / (proposal.votes.for + proposal.votes.against)) * 100}%`,
                                }}
                              ></div>
                            </div>
                          </div>
                        </div>

                        {proposal.status === "Active" && (
                          <div className="flex gap-2 pt-2">
                            <GlassButton
                              size="sm"
                              className="flex-1 transition-all duration-300 hover:scale-105"
                              onClick={onDappNavigation}
                            >
                              Vote For
                            </GlassButton>
                            <GlassButton
                              size="sm"
                              variant="outline"
                              className="flex-1 transition-all duration-300 hover:scale-105"
                              onClick={onDappNavigation}
                            >
                              Vote Against
                            </GlassButton>
                          </div>
                        )}
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
                        <Vote className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-semibold">No Active Proposals</h3>
                        <p className="text-muted-foreground max-w-md">
                          There are currently no active governance proposals. Be the first to create one and shape the
                          platform's future!
                        </p>
                      </div>
                      <GlassButton className="mt-4" onClick={onDappNavigation}>
                        Create Proposal
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
                icon: Vote,
                title: "Democratic Voting",
                description: "Every RELY token holder has a voice in platform governance decisions.",
              },
              {
                icon: Shield,
                title: "Transparent Process",
                description: "All proposals and voting results are transparent and verifiable on-chain.",
              },
              {
                icon: TrendingUp,
                title: "Platform Growth",
                description: "Community-driven decisions help the platform evolve and improve continuously.",
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
