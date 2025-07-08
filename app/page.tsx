"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { GlassButton } from "@/components/ui/glass-button"
import { Rocket, Dice6, Video, Vote, Coins, Users } from "lucide-react"
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

type ViewType =
  | "home"
  | "launch"
  | "bet"
  | "dare"
  | "governance"
  | "token"
  | "presale"
  | "community"
  | "privacy-policy"
  | "terms-of-service"

export default function Home() {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [featuresLoaded, setFeaturesLoaded] = useState(false)
  const [stepsLoaded, setStepsLoaded] = useState(false)
  const [preloaderComplete, setPreloaderComplete] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [currentView, setCurrentView] = useState<ViewType>("home")
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())

  // Initialize view from URL
  useEffect(() => {
    const path = window.location.pathname.slice(1) as ViewType
    if (
      [
        "home",
        "launch",
        "bet",
        "dare",
        "governance",
        "token",
        "presale",
        "community",
        "privacy-policy",
        "terms-of-service",
      ].includes(path)
    ) {
      setCurrentView(path || "home")
    }
  }, [])

  // Update current year
  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const handleNavigation = (view: ViewType) => {
    setCurrentView(view)
    setIsMobileMenuOpen(false)

    // Update URL without page reload
    const url = view === "home" ? "/" : `/${view}`
    window.history.pushState({}, "", url)

    // Scroll to top when changing views
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const handleLaunchApp = () => {
    window.open("/dapp", "_blank")
  }

  const handleDappNavigation = () => {
    window.open("/dapp", "_blank")
  }

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Add overflow-x-hidden to html and body to prevent horizontal scrolling
  useEffect(() => {
    document.documentElement.style.overflowX = "hidden"
    document.body.style.overflowX = "hidden"

    return () => {
      document.documentElement.style.overflowX = ""
      document.body.style.overflowX = ""
    }
  }, [])

  // Fix body scroll when mobile menu closes
  useEffect(() => {
    if (!isMobileMenuOpen) {
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
      case "community":
        // Scroll to community section on home page
        setCurrentView("home")
        setTimeout(() => {
          document.getElementById("community")?.scrollIntoView({ behavior: "smooth" })
        }, 100)
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

  return (
    <>
      {!preloaderComplete && <Preloader onLoadComplete={() => setPreloaderComplete(true)} />}

      {/* Fixed Header - Always at top */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md supports-[backdrop-filter]:bg-background/80 shadow-lg border-border/50"
            : "bg-background/60 backdrop-blur-sm supports-[backdrop-filter]:bg-background/40 border-transparent"
        }`}
        style={{ position: "fixed" }}
      >
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center group cursor-pointer" onClick={() => handleNavigation("home")}>
            <Image
              src="/logo.png"
              alt="Rely Exchange Logo"
              width={32}
              height={32}
              className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Desktop Navigation - Centered and closer spacing */}
          <nav className="hidden md:flex items-center justify-center space-x-4 text-sm font-medium absolute left-1/2 transform -translate-x-1/2">
            <button
              onClick={() => handleNavigation("launch")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "launch" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Rocket className="h-4 w-4" />
              </div>
              Launch
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "launch" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
            <button
              onClick={() => handleNavigation("bet")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "bet" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Dice6 className="h-4 w-4" />
              </div>
              Bet
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "bet" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
            <button
              onClick={() => handleNavigation("dare")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "dare" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Video className="h-4 w-4" />
              </div>
              Dare
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "dare" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
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
            <button
              onClick={() => handleNavigation("community")}
              className={`flex items-center gap-1 px-3 py-2 rounded-md transition-all duration-200 relative group ${
                currentView === "community" ? "text-primary" : "text-foreground/80 hover:text-primary"
              }`}
            >
              <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                <Users className="h-4 w-4" />
              </div>
              Community
              <span
                className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-200 ${
                  currentView === "community" ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
              />
            </button>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <GlassButton size="sm" onClick={handleLaunchApp}>
              Launch App
            </GlassButton>
          </div>

          {/* Mobile Menu Button */}
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

      {/* Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onToggle={toggleMobileMenu}
        currentView={currentView}
        onNavigate={handleNavigation}
      />

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">{renderCurrentView()}</main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <div className="flex items-center group cursor-pointer" onClick={() => handleNavigation("home")}>
              <Image
                src="/logo.png"
                alt="Rely Exchange Logo"
                width={24}
                height={24}
                className="w-6 h-6 transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © {currentYear} Rely Exchange. All rights reserved.
            </p>
          </div>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <button onClick={() => handleNavigation("privacy-policy")} className="hover:text-primary transition-colors">
              Privacy Policy
            </button>
            <button
              onClick={() => handleNavigation("terms-of-service")}
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </button>
          </div>
        </div>
      </footer>
    </>
  )
}
