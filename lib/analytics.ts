import { track } from "@vercel/analytics"

export const trackEvent = (eventName: string, properties?: Record<string, any>) => {
  if (typeof window !== "undefined") {
    track(eventName, properties)
  }
}

// Predefined events for the app
export const analytics = {
  // Navigation events
  viewPage: (page: string) => trackEvent("page_view", { page }),

  // User interaction events
  clickButton: (buttonName: string, location: string) => trackEvent("button_click", { button: buttonName, location }),

  // Feature usage events
  openDapp: (feature: string) => trackEvent("dapp_access_attempt", { feature }),

  // Engagement events
  scrollToSection: (section: string) => trackEvent("section_view", { section }),

  // Conversion events
  presaleInterest: () => trackEvent("presale_interest"),
  tokenPageView: () => trackEvent("token_page_view"),

  // Social events
  socialClick: (platform: string) => trackEvent("social_click", { platform }),
}
