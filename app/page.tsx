"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { GlassButton } from "@/components/ui/glass-button"
import { TrendingUp, Zap, MoreHorizontal, Vote, Coins } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MobileMenu } from "@/components/mobile-menu"
import { Preloader } from "@/components/preloader"
import { HomeView } from "@/components/views/home-view"
import { LaunchView } from "@/components/views/launch-view"
import { BetView } from "@/components/views/bet-view"
import { DareView } from "@/components/views/dare-view"
import { GovernanceView } from "@/components/views/governance-view"
import { TokenView } from "@/components/views/token-view"
import { PresaleView } from "@/components/views/presale-view"
import { PrivacyPolicyView } from "@/components/views/privacy-policy-view"
import { TermsOfServiceView } from "@/components/views/terms-of-service-view"
import { AboutView } from "@/components/views/about-view"
import { SupportView } from "@/components/views/support-view"
import { FAQsView } from "@/components/views/faqs-view"
import { ContactView } from "@/components/views/contact-view"
import { AffiliateView } from "@/components/views/affiliate-view"
import { TradeView } from "@/components/views/trade-view"
import { StakeView } from "@/components/views/stake-view"

type ViewType =
  | "home"
  | "trade"
  | "stake"
  | "governance"
  | "token"
  | "presale"
  | "about"
  | "affiliate"
  | "support"
  | "faqs"
  | "contact"
  | "privacy-policy"
  | "terms-of-service"

export default function Home() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [featuresLoaded, setFeaturesLoaded] = useState(false)
  const [stepsLoaded, setStepsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>("home")
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  useEffect(() => {
    const path = window.location.pathname.slice(1) as ViewType
    if (
      [
        "home",
        "trade",
        "stake",
        "governance",
        "token",
        "presale",
        "about",
        "affiliate",
        "support",
        "faqs",
        "contact",
        "privacy-policy",
        "terms-of-service",
      ].includes(path)
    ) {
      setCurrentView(path || "home")
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavigation = (view: ViewType) => {
    setCurrentView(view)
    setIsMobileMenuOpen(false)

    const url = view === "home" ? "/" : `/${view}`
    window.history.pushState({}, "", url)

    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLogin = () => {
    router.push("/login")
  }

  const handleDappNavigation = () => {
    window.open("/dapp", "_blank")
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // Scroll locking for mobile menu is now handled in layout
    if (isMobileMenuOpen) {
      document.documentElement.style.overflow = "hidden"
      document.body.style.overflow = "hidden"
    } else {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }

    // Cleanup function to restore scrolling when the component unmounts
    return () => {
      document.documentElement.style.overflow = ""
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  const renderCurrentView = () => {
    switch (currentView) {
      case "launch":
        return <LaunchView onDappNavigation={handleDappNavigation} />
      case "bet":
        return <BetView onDappNavigation={handleDappNavigation} />
      case "dare":
        return <DareView onDappNavigation={handleDappNavigation} />
      case "governance":
        return <GovernanceView onDappNavigation={handleDappNavigation} />
      case "token":
        return <TokenView />
      case "presale":
        return <PresaleView />
      case "privacy-policy":
        return <PrivacyPolicyView />
      case "terms-of-service":
        return <TermsOfServiceView />
      case "about":
        return <AboutView onDappNavigation={handleDappNavigation} />
      case "affiliate":
        return <AffiliateView onDappNavigation={handleDappNavigation} />
      case "support":
        return <SupportView onDappNavigation={handleDappNavigation} />
      case "faqs":
        return <FAQsView onDappNavigation={handleDappNavigation} />
      case "contact":
        return <ContactView onDappNavigation={handleDappNavigation} />
      case "trade":
        return <TradeView />
      case "stake":
        return <StakeView />
      default:
        return (
          <HomeView
            featuresLoaded={featuresLoaded}
            stepsLoaded={stepsLoaded}
            setFeaturesLoaded={setFeaturesLoaded}
            setStepsLoaded={setStepsLoaded}
            onNavigate={handleNavigation}
            onDappNavigation={handleDappNavigation}
          />
        )
    }
  }

  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }, [isLoading])

    return (
      <>
        {isLoading && <Preloader onLoadComplete={() => setIsLoading(false)} />}

      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-background/95 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 shadow-2xl border-border/30"
            : "bg-background/40 backdrop-blur-md supports-[backdrop-filter]:bg-background/20 border-transparent"
        }`}
        style={{ position: "fixed" }}
      >
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavigation("home")}>
            <Image
              src="/logo.png"
              alt="Rely Exchange Logo"
              width={32}
              height={32}
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          {/* </CHANGE> */}

          <nav className="hidden md:flex items-center justify-center space-x-1 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleNavigation("trade")}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 relative group ${
                currentView === "trade" ? "text-primary font-semibold" : "text-foreground/70 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <TrendingUp className="h-4 w-4" />
              </div>
              Trade
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "trade" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
            <button
              onClick={() => handleNavigation("stake")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "stake" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Zap className="h-4 w-4" />
              </div>
              Stake
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "stake" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
            <button
              onClick={() => handleNavigation("governance")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "governance" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Vote className="h-4 w-4" />
              </div>
              Governance
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "governance" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
            <button
              onClick={() => handleNavigation("token")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "token" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Coins className="h-4 w-4" />
              </div>
              Token
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "token" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                    ["about", "affiliate", "support", "faqs", "contact"].includes(currentView)
                      ? "text-primary"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                    <MoreHorizontal className="h-4 w-4" />
                  </div>
                  More
                  <span
                    className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                      ["about", "affiliate", "support", "faqs", "contact"].includes(currentView)
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem onClick={() => handleNavigation("about")}>About</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("affiliate")}>Affiliate Program</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("support")}>Support Center</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("faqs")}>FAQs</DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleNavigation("contact")}>Contact Us</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>

          <div className="hidden md:flex items-center space-x-3">
            <GlassButton size="sm" className="px-6 py-2 rounded-lg font-medium" onClick={handleLogin}>
              Launch App
            </GlassButton>
          </div>

          <div className="md:hidden">
            <GlassButton variant="ghost" size="sm" onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </GlassButton>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        currentView={currentView}
        onNavigate={handleNavigation}
      />

      <main className="flex-1">{renderCurrentView()}</main>

      <footer className="border-t bg-background/50 backdrop-blur-sm">
        <div className="container flex flex-col items-center justify-between gap-6 py-12 md:h-24 md:flex-row md:py-0 px-4 md:px-6">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <div className="flex items-center gap-2 group cursor-pointer" onClick={() => handleNavigation("home")}>
              <Image
                src="/logo.png"
                alt="Rely Exchange Logo"
                width={24}
                height={24}
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            {/* </CHANGE> */}
            <p className="text-center text-sm leading-relaxed text-muted-foreground md:text-left font-light">
              © {currentYear} Rely Exchange. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <button
              onClick={() => handleNavigation("privacy-policy")}
              className="hover:text-primary transition-colors duration-300 font-light"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavigation("terms-of-service")}
              className="hover:text-primary transition-colors duration-300 font-light"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
