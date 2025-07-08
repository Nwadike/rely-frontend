"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function PrivacyPolicyView() {
  return (
    <div className="min-h-screen pt-16">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6 max-w-4xl mx-auto">
          <ScrollReveal direction="fade">
            <div className="space-y-8">
              <div className="text-center space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Privacy Policy</h1>
                <p className="text-muted-foreground md:text-xl">Last updated: {new Date().toLocaleDateString()}</p>
              </div>

              <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
                <ScrollReveal delay={100}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">1. Information We Collect</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We collect information you provide directly to us, such as when you create an account, use our
                      services, or contact us for support. This may include your wallet address, transaction history,
                      and communication preferences.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">2. How We Use Your Information</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We use the information we collect to provide, maintain, and improve our services, process
                      transactions, communicate with you, and comply with legal obligations.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">3. Information Sharing</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We do not sell, trade, or otherwise transfer your personal information to third parties without
                      your consent, except as described in this policy or as required by law.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">4. Data Security</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      We implement appropriate security measures to protect your personal information against
                      unauthorized access, alteration, disclosure, or destruction.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={500}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">5. Your Rights</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      You have the right to access, update, or delete your personal information. You may also opt out of
                      certain communications from us.
                    </p>
                  </section>
                </ScrollReveal>

                <ScrollReveal delay={600}>
                  <section className="space-y-4">
                    <h2 className="text-2xl font-semibold">6. Contact Us</h2>
                    <p className="text-muted-foreground leading-relaxed">
                      If you have any questions about this Privacy Policy, please contact us at privacy@relyexchange.com
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
