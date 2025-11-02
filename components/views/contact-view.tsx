"use client"
import { GlassButton } from "@/components/ui/glass-button"
import type React from "react"

import { Badge } from "@/components/ui/badge"
import { AnimatedIcon } from "@/components/ui/animated-icon"
import { ArrowUpRight, Mail, MessageCircle, Twitter, Send } from "lucide-react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { useState } from "react"
import DarkVeil from "@/components/dark-veil"

interface ContactViewProps {
  onDappNavigation?: () => void
}

export function ContactView({ onDappNavigation }: ContactViewProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const contactMethods = [
    {
      icon: Twitter,
      title: "Twitter",
      description: "Follow us and reach out on X",
      link: "https://x.com/rely_exchange",
      action: "Follow @rely_exchange",
    },
    {
      icon: Send,
      title: "Telegram",
      description: "Join our community on Telegram",
      link: "https://t.me/rely_exchange",
      action: "Join DAO",
    },
    {
      icon: Mail,
      title: "Email",
      description: "Send us an email directly",
      email: "support@rely.exchange",
      action: "support@rely.exchange",
    },
    {
      icon: MessageCircle,
      title: "Support",
      description: "Get help from our support team",
      link: "https://t.me/rely_exchange",
      action: "Contact Support",
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
                  Get In Touch
                </Badge>
                <h1 className="text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] xl:text-[72px] font-light tracking-[0.5px] leading-[1.1] max-w-4xl transition-all duration-300 ease-in-out px-4 md:px-0">
                  Let's Talk About <br className="hidden sm:block" />
                  <span className="text-balance font-normal">Your Needs</span>
                </h1>
                <p className="max-w-[750px] text-base sm:text-lg md:text-[20px] leading-[1.6] text-muted-foreground mx-0 transition-all duration-300 ease-in-out hover:text-foreground/90 px-4 md:px-0">
                  Have a question, partnership opportunity, or just want to chat? We'd love to hear from you.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Contact Methods */}
      <section className="w-full py-[100px] md:py-[120px] bg-background relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon
                return (
                  <div
                    key={index}
                    className="p-6 md:p-8 rounded-lg border border-border bg-card hover:bg-card/80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group cursor-pointer"
                  >
                    <div className="flex flex-col items-center text-center space-y-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                          {method.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-1">{method.description}</p>
                      </div>
                      <GlassButton
                        size="sm"
                        variant="outline"
                        className="gap-1 text-xs"
                        onClick={() => (method.link ? window.open(method.link, "_blank") : null)}
                      >
                        {method.action}
                        <ArrowUpRight className="h-3 w-3" />
                      </GlassButton>
                    </div>
                  </div>
                )
              })}
            </div>
          </ScrollReveal>

          <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-16" />

          <ScrollReveal>
            <div className="max-w-2xl mx-auto">
              <h2 className="text-3xl font-semibold mb-8 text-center">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                />
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                />
                <GlassButton
                  type="submit"
                  size="lg"
                  className="w-full gap-2 group shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out hover:scale-105 active:scale-[0.97]"
                >
                  Send Message
                  <AnimatedIcon icon={ArrowUpRight} variant="bounce" className="h-5 w-5" />
                </GlassButton>
              </form>
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
                <p className="text-lg md:text-[18px] text-primary-foreground/90 max-w-2xl">
                  Start your options trading journey today. No gatekeepers, no limits, just pure trading freedom.
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
