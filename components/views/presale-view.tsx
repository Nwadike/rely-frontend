"use client"

import { useState, useEffect } from "react"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { Wallet, CheckCircle, DollarSign, Clock, Lock, Rocket, Copy, AlertCircle, ArrowLeft } from "lucide-react"

declare global {
  interface Window {
    solana?: {
      isPhantom?: boolean
      connect: () => Promise<{ publicKey: { toString: () => string } }>
      disconnect: () => Promise<void>
      isConnected: boolean
      publicKey?: { toString: () => string }
      signAndSendTransaction: (transaction: any) => Promise<{ signature: string }>
    }
  }
}

export function PresaleView() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [selectedCurrency, setSelectedCurrency] = useState<"SOL" | "USDC">("SOL")
  const [purchaseAmount, setPurchaseAmount] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)
  const [transactionStatus, setTransactionStatus] = useState<"idle" | "processing" | "success" | "error">("idle")

  // Presale data - Updated with 0 progress
  const presaleData = {
    totalTokens: 1000000000, // 1B RELY for presale
    soldTokens: 0, // 0 sold tokens
    price: 0.001, // $0.001 per token
    minPurchase: 1000, // 1000 RELY minimum
    maxPurchase: 10000000, // 10M RELY maximum
    recipientAddress: "41CV3XWDNNzwT24Q7d41N77oCXKYpizsvX8wh7RJArYV",
  }

  const remainingTokens = presaleData.totalTokens - presaleData.soldTokens
  const soldPercentage = (presaleData.soldTokens / presaleData.totalTokens) * 100

  // Check if wallet is already connected
  useEffect(() => {
    const checkWalletConnection = async () => {
      if (window.solana && window.solana.isConnected) {
        setIsWalletConnected(true)
        if (window.solana.publicKey) {
          setWalletAddress(window.solana.publicKey.toString())
        }
      }
    }
    checkWalletConnection()
  }, [])

  const handleConnectWallet = async () => {
    try {
      if (!window.solana) {
        alert("Please install a Solana wallet (Phantom, Solflare, etc.) to continue")
        window.open("https://phantom.app/", "_blank")
        return
      }

      const response = await window.solana.connect()
      setIsWalletConnected(true)
      setWalletAddress(response.publicKey.toString())
    } catch (error) {
      console.error("Failed to connect wallet:", error)
      alert("Failed to connect wallet. Please try again.")
    }
  }

  const handleDisconnectWallet = async () => {
    try {
      if (window.solana) {
        await window.solana.disconnect()
      }
      setIsWalletConnected(false)
      setWalletAddress("")
    } catch (error) {
      console.error("Failed to disconnect wallet:", error)
    }
  }

  const handlePurchase = async () => {
    if (!purchaseAmount || Number.parseFloat(purchaseAmount) < presaleData.minPurchase) {
      alert(`Minimum purchase is ${presaleData.minPurchase.toLocaleString()} RELY`)
      return
    }

    if (Number.parseFloat(purchaseAmount) > presaleData.maxPurchase) {
      alert(`Maximum purchase is ${presaleData.maxPurchase.toLocaleString()} RELY`)
      return
    }

    setIsProcessing(true)
    setTransactionStatus("processing")

    try {
      // Calculate the amount to send based on selected currency
      const relyAmount = Number.parseFloat(purchaseAmount)
      const usdAmount = relyAmount * presaleData.price

      // For demo purposes, we'll simulate the transaction
      // In a real implementation, you would create and send a Solana transaction

      // Simulate transaction delay
      await new Promise((resolve) => setTimeout(resolve, 3000))

      // Simulate success (in real implementation, this would be based on actual transaction result)
      setTransactionStatus("success")

      // Reset form after successful purchase
      setTimeout(() => {
        setPurchaseAmount("")
        setTransactionStatus("idle")
      }, 5000)
    } catch (error) {
      console.error("Transaction failed:", error)
      setTransactionStatus("error")
      setTimeout(() => {
        setTransactionStatus("idle")
      }, 5000)
    } finally {
      setIsProcessing(false)
    }
  }

  const copyAddress = () => {
    navigator.clipboard.writeText(presaleData.recipientAddress)
    alert("Address copied to clipboard!")
  }

  const calculateTokenAmount = () => {
    if (!purchaseAmount) return "0"
    return Number.parseFloat(purchaseAmount).toLocaleString()
  }

  const calculateUSDAmount = () => {
    if (!purchaseAmount) return "0"
    return (Number.parseFloat(purchaseAmount) * presaleData.price).toFixed(3)
  }

  const handleBackToTokens = () => {
    window.close()
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted relative overflow-hidden">
        <div className="container px-4 md:px-6 relative z-10">
          <ScrollReveal direction="fade">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <Badge
                  className="inline-flex bg-primary text-primary-foreground transition-all duration-300 hover:scale-105 hover:shadow-lg animate-pulse"
                  variant="secondary"
                >
                  Presale Live
                </Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none max-w-4xl">
                  <span className="rainbow-text">$RELY</span> Token Presale
                </h1>
                <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto">
                  Get early access to RELY tokens at presale prices. Limited time offer with exclusive benefits for
                  early supporters.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <GlassButton size="lg" onClick={handleBackToTokens} className="gap-1 group">
                  <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
                  Close Tab
                </GlassButton>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Presale Stats */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-6xl">
            <ScrollReveal>
              <Card className="glass-card mb-8">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold">Presale Progress</h2>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center text-lg">
                        <span>Tokens Sold</span>
                        <span className="font-bold text-primary">
                          {presaleData.soldTokens.toLocaleString()} / {presaleData.totalTokens.toLocaleString()} RELY
                        </span>
                      </div>
                      <Progress value={soldPercentage} className="h-4" />
                      <div className="flex justify-between items-center text-sm text-muted-foreground">
                        <span>{soldPercentage.toFixed(1)}% Sold</span>
                        <span>{remainingTokens.toLocaleString()} Remaining</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Purchase Card */}
              <ScrollReveal delay={100}>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Buy $RELY Tokens</h3>
                        <p className="text-muted-foreground">Secure your tokens at presale price</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span>Price per Token</span>
                          <span className="font-bold text-primary">${presaleData.price}</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span>Minimum Purchase</span>
                          <span className="font-bold">{presaleData.minPurchase.toLocaleString()} RELY</span>
                        </div>
                        <div className="flex justify-between p-3 rounded-lg bg-muted/50">
                          <span>Maximum Purchase</span>
                          <span className="font-bold">{presaleData.maxPurchase.toLocaleString()} RELY</span>
                        </div>
                      </div>

                      {!isWalletConnected ? (
                        <GlassButton onClick={handleConnectWallet} className="w-full gap-2" size="lg">
                          <Wallet className="h-5 w-5" />
                          Connect Wallet
                        </GlassButton>
                      ) : (
                        <div className="space-y-4">
                          <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                            <div className="flex items-center gap-2 text-green-500">
                              <CheckCircle className="h-5 w-5" />
                              <span>Wallet Connected</span>
                            </div>
                            <GlassButton variant="outline" size="sm" onClick={handleDisconnectWallet}>
                              Disconnect
                            </GlassButton>
                          </div>

                          <div className="text-xs text-muted-foreground break-all">{walletAddress}</div>

                          {/* Currency Selection */}
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Payment Method</label>
                            <div className="flex gap-2">
                              <GlassButton
                                variant={selectedCurrency === "SOL" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCurrency("SOL")}
                                className="flex-1"
                              >
                                SOL
                              </GlassButton>
                              <GlassButton
                                variant={selectedCurrency === "USDC" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setSelectedCurrency("USDC")}
                                className="flex-1"
                              >
                                USDC
                              </GlassButton>
                            </div>
                          </div>

                          <div className="space-y-2">
                            <label className="text-sm font-medium">Amount (RELY Tokens)</label>
                            <input
                              type="number"
                              value={purchaseAmount}
                              onChange={(e) => setPurchaseAmount(e.target.value)}
                              placeholder={`Min: ${presaleData.minPurchase.toLocaleString()}`}
                              className="w-full p-3 rounded-lg bg-muted/50 border border-border focus:border-primary focus:outline-none"
                            />
                            {purchaseAmount && (
                              <div className="text-sm text-muted-foreground">
                                You will receive: {calculateTokenAmount()} RELY tokens
                                <br />
                                Cost: ${calculateUSDAmount()} USD
                              </div>
                            )}
                          </div>

                          {transactionStatus === "idle" && (
                            <GlassButton
                              onClick={handlePurchase}
                              className="w-full gap-2"
                              size="lg"
                              disabled={isProcessing || !purchaseAmount}
                            >
                              <DollarSign className="h-5 w-5" />
                              Buy RELY Tokens
                            </GlassButton>
                          )}

                          {transactionStatus === "processing" && (
                            <GlassButton className="w-full gap-2" size="lg" disabled>
                              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                              Processing Transaction...
                            </GlassButton>
                          )}

                          {transactionStatus === "success" && (
                            <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-center">
                              <CheckCircle className="h-8 w-8 text-green-500 mx-auto mb-2" />
                              <div className="text-green-500 font-medium">Transaction Successful!</div>
                              <div className="text-sm text-muted-foreground">
                                Your RELY tokens will be distributed after presale ends.
                              </div>
                            </div>
                          )}

                          {transactionStatus === "error" && (
                            <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-center">
                              <AlertCircle className="h-8 w-8 text-red-500 mx-auto mb-2" />
                              <div className="text-red-500 font-medium">Transaction Failed</div>
                              <div className="text-sm text-muted-foreground">Please try again or contact support.</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>

              {/* Fund Usage - Updated with new allocation */}
              <ScrollReveal delay={200}>
                <Card className="glass-card">
                  <CardContent className="p-6">
                    <div className="space-y-6">
                      <div className="text-center">
                        <h3 className="text-2xl font-bold mb-2">Fund Allocation</h3>
                        <p className="text-muted-foreground">How presale funds will be used</p>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                          <div className="flex-1">
                            <div className="font-medium">Protocol Reserves (40%)</div>
                            <div className="text-sm text-muted-foreground">Emergency fund and protocol stability</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="w-3 h-3 rounded-full bg-green-500"></div>
                          <div className="flex-1">
                            <div className="font-medium">Liquidity Pool (30%)</div>
                            <div className="text-sm text-muted-foreground">Provide deep liquidity for RELY token</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                          <div className="flex-1">
                            <div className="font-medium">Development (20%)</div>
                            <div className="text-sm text-muted-foreground">Platform development and improvements</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                          <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                          <div className="flex-1">
                            <div className="font-medium">Marketing (10%)</div>
                            <div className="text-sm text-muted-foreground">Community growth and partnerships</div>
                          </div>
                        </div>
                      </div>

                      <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
                        <div className="flex items-center gap-2 text-primary mb-2">
                          <Lock className="h-5 w-5" />
                          <span className="font-medium">Recipient Address</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-mono bg-muted/50 p-2 rounded">
                          <span className="break-all">{presaleData.recipientAddress}</span>
                          <GlassButton variant="ghost" size="sm" onClick={copyAddress}>
                            <Copy className="h-3 w-3" />
                          </GlassButton>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Presale Benefits */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Presale Benefits</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Early supporters get exclusive benefits and bonuses.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: DollarSign,
                title: "Best Price",
                description: "Get RELY tokens at the lowest price of $0.001 before public launch.",
              },
              {
                icon: Clock,
                title: "Early Access",
                description: "First access to all platform features and new token launches.",
              },
              {
                icon: Rocket,
                title: "Bonus Rewards",
                description: "Additional rewards and airdrops for presale participants.",
              },
            ].map((benefit, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <Card className="glass-card transition-all duration-500 hover:scale-[1.02] group cursor-pointer">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 transition-all duration-300 group-hover:from-primary/30 group-hover:to-primary/20 group-hover:scale-110">
                        <benefit.icon className="h-8 w-8 text-primary transition-transform duration-300 group-hover:rotate-6" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-primary">
                          {benefit.title}
                        </h3>
                        <p className="text-muted-foreground transition-colors duration-300 group-hover:text-foreground/90 text-sm">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
