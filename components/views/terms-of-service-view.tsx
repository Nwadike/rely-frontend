"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function TermsOfServiceView() {
  return (
    <div className="min-h-screen pt-16">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <ScrollReveal direction="fade">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Terms of Service</h1>
                <p className="text-muted-foreground md:text-xl">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <ScrollReveal delay={100}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">1. Acceptance of Terms</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      By accessing and using Rely Exchange, you accept and agree to be bound by the terms and provision
                      of this agreement. These terms apply to all users of the platform.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">2. Use License</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Permission is granted to temporarily use Rely Exchange for personal, non-commercial transitory
                      viewing only. This is the grant of a license, not a transfer of title.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">3. Risk Disclosure</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      Trading cryptocurrencies and using leveraged products involves substantial risk of loss and is not
                      suitable for all investors. You should carefully consider whether such trading is suitable for
                      you.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">4. Prohibited Uses</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You may not use our platform for any unlawful purpose or to solicit others to perform unlawful
                      acts. You may not violate any international, federal, provincial, or state regulations, rules, or
                      laws.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">5. Disclaimer</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      The information on this platform is provided on an 'as is' basis. To the fullest extent permitted
                      by law, this Company excludes all representations, warranties, conditions, and terms.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">6. Contact Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about these Terms of Service, please contact us at
                      legal@relyexchange.com
                    </p>
                  </section>
                </ScrollReveal>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  )
}
