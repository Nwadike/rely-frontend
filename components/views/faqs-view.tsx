"use client"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, ChevronDown } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"
import DarkVeil from "@/components/dark-veil"

interface FAQsViewProps {
  onDappNavigation?: () => void
}

export function FAQsView({ onDappNavigation }: FAQsViewProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "What is Rely Exchange?",
      answer:
        "Rely Exchange is a decentralized options trading platform built on blockchain. It allows traders to buy and sell call and put options on any asset without traditional brokers or gatekeepers.",
    },
    {
      question: "How do I get started?",
      answer:
        "Connect your Web3 wallet or sign up with email, deposit collateral, and you're ready to start trading. The process takes just a few minutes.",
    },
    {
      question: "What wallets are supported?",
      answer:
        "We support MetaMask, WalletConnect, and all major Web3 wallets. You can also sign up with email for a custodial account.",
    },
    {
      question: "Are there any trading fees?",
      answer:
        "Yes, Rely Exchange charges competitive trading fees. These fees are community-voted and completely transparent. Check the app for current fee structures.",
    },
    {
      question: "Is my money safe on Rely?",
      answer:
        "All assets are held in audited non-custodial smart contracts. You maintain full control of your keys and funds. Your collateral is secure and verifiable on-chain.",
    },
    {
      question: "Can I trade 24/7?",
      answer:
        "Yes, as a blockchain-based platform, Rely Exchange operates 24/7/365. Trade whenever you want, from anywhere in the world.",
    },
    {
      question: "What expiries are available?",
      answer:
        "We offer a range of expiries from daily to quarterly options. The community votes on available expirations for each asset.",
    },
    {
      question: "How do I manage risk?",
      answer:
        "Use stop-losses, position sizing, and diversification. We provide tools and educational resources to help you manage risk effectively.",
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
                  Frequently Asked Questions
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-4xl transition-all duration-300 ease-in-out px-4 md:px-0">
                  Your Questions <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Answered</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-0 transition-all duration-300 ease-in-out hover:text-foreground/90 px-4 md:px-0">
                  Find quick answers to common questions about Rely Exchange, trading, and security.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* FAQs Section */}
      <section className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border border-border rounded-lg bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full p-6 md:p-8 flex items-center justify-between text-left hover:bg-card/50 transition-colors"
                  >
                    <span className="text-base md:text-lg font-semibold text-foreground">{faq.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 text-muted-foreground transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="px-6 md:px-8 pb-6 md:pb-8 border-t border-border">
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
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
                  Still Have Questions?
                </h2>
                <p className="text-lg md:text-[18px] text-primary-foreground/90 max-w-2xl">
                  Our support team is ready to help. Reach out directly and we'll provide personalized assistance.
                </p>
              </div>
              <GlassButton
                size="lg"
                variant="secondary"
                className="gap-2 group shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97] px-8 py-4 text-[18px] font-medium tracking-[0.5px] leading-[1.4] rounded-lg"
                onClick={() => window.open("https://t.me/relyexchange", "_blank")}
              >
                Contact Us
                <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-5 w-5" />
              </GlassButton>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
