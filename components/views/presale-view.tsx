"use client"

import { useState, useEffect, useRef } from "react"
import { GlassButton } from "@/components/ui/glass-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { ScrollReveal } from "@/components/scroll-reveal"
import { QRCodeSVG as QRCode } from "qrcode.react"
import { v4 as uuidv4 } from "uuid"
import {
  Wallet,
  CheckCircle,
  DollarSign,
  Clock,
  Lock,
  Rocket,
  Copy,
  AlertCircle,
  ArrowLeft,
  X,
  Check,
  ChevronRight,
  Zap,
} from "lucide-react"

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

// Wallet addresses for random selection
const WALLET_ADDRESSES = [
  "631RVXeQiHbtiv9Q85rU1x4JcVRixg36TJEVQwsyizbJ",
  "6w4jxoVqd9jkYVtyZewtfwDL5461TDuxeTatsYhjen2m",
  "AUMQWLSwYUrLBjLFw4yQHjziNpe22yqy66QVsnCjnpzD",
  "6i186LuRdbvAFYCUyK6HScURpLdv9SJQwFDCzzWWdfiv",
  "HQPfro14rdgLrC7183qsMmV7VVN9Cf5uctpbH7Ucjtsd",
  "Fu4xwaezgdn2AdY2ahvQftv5bruTzGEgtXcPZv968cUQ",
  "gZGHy22jec1876yrbgJWiKTLKh8U9jrkrHZAkHxG7zh",
]

interface Transaction {
  id: string
  senderAddress: string
  recipientWallet: string
  amount: number
  currency: "SOL" | "USDC"
  relyTokens: number
  timestamp: string
  status: "pending" | "successful" | "cancelled"
}

export function PresaleView() {
  const [isWalletConnected, setIsWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState("")
  const [selectedCurrency, setSelectedCurrency] = useState<"SOL" | "USDC">("SOL")
  const [purchaseAmount, setPurchaseAmount] = useState("")
  const [transactionStage, setTransactionStage] = useState<
    "idle" | "payment" | "confirmation" | "countdown" | "success" | "history"
  >("idle")
  const [selectedRecipientWallet, setSelectedRecipientWallet] = useState("")
  const [countdownTime, setCountdownTime] = useState(60)
  const [totalCountdown, setTotalCountdown] = useState(1800) // 30 minutes
  const [transactions, setTransactions] = useState<Transaction[]>([])
  const [currentTransaction, setCurrentTransaction] = useState<Transaction | null>(null)
  const [showConfirmationModal, setShowConfirmationModal] = useState(false)
  const [transactionHistory, setTransactionHistory] = useState<Transaction[]>([])
  const countdownInterval = useRef<NodeJS.Timeout | null>(null)
  const totalCountdownInterval = useRef<NodeJS.Timeout | null>(null)

  // Presale data
  const presaleData = {
    totalTokens: 1000000000,
    soldTokens: 0,
    price: 0.001,
    minPurchase: 1000,
    maxPurchase: 10000000,
  }

  const remainingTokens = presaleData.totalTokens - presaleData.soldTokens
  const soldPercentage = (presaleData.soldTokens / presaleData.totalTokens) * 100

  // Load transactions from localStorage on mount
  useEffect(() => {
    const savedTransactions = localStorage.getItem("relyTransactions")
    if (savedTransactions) {
      try {
        setTransactions(JSON.parse(savedTransactions))
      } catch (error) {
        console.error("Failed to load transactions:", error)
      }
    }
  }, [])

  // Filter transactions for current wallet
  useEffect(() => {
    if (walletAddress) {
      const userTransactions = transactions.filter((t) => t.senderAddress === walletAddress)
      setTransactionHistory(userTransactions)
    }
  }, [walletAddress, transactions])

  // Countdown timer for token delivery
  useEffect(() => {
    if (transactionStage === "countdown" && countdownTime > 0) {
      countdownInterval.current = setInterval(() => {
        setCountdownTime((prev) => {
          if (prev <= 1) {
            setTransactionStage("success")
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (countdownInterval.current) clearInterval(countdownInterval.current)
    }
  }, [transactionStage, countdownTime])

  // 30-minute total countdown
  useEffect(() => {
    if (
      (transactionStage === "payment" || transactionStage === "countdown") &&
      totalCountdown > 0
    ) {
      totalCountdownInterval.current = setInterval(() => {
        setTotalCountdown((prev) => {
          if (prev <= 1) {
            // Transaction expired
            if (currentTransaction) {
              const updatedTransaction = {
                ...currentTransaction,
                status: "cancelled" as const,
              }
              const updatedTransactions = transactions.map((t) =>
                t.id === currentTransaction.id ? updatedTransaction : t
              )
              setTransactions(updatedTransactions)
              localStorage.setItem("relyTransactions", JSON.stringify(updatedTransactions))
            }
            setTransactionStage("idle")
            setCurrentTransaction(null)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
    return () => {
      if (totalCountdownInterval.current) clearInterval(totalCountdownInterval.current)
    }
  }, [transactionStage, totalCountdown, currentTransaction, transactions])

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
      setTransactionHistory([])
    } catch (error) {
      console.error("Failed to disconnect wallet:", error)
    }
  }

  const handleInitiatePurchase = () => {
    if (!purchaseAmount || Number.parseFloat(purchaseAmount) < presaleData.minPurchase) {
      alert(`Minimum purchase is ${presaleData.minPurchase.toLocaleString()} RELY`)
      return
    }

    if (Number.parseFloat(purchaseAmount) > presaleData.maxPurchase) {
      alert(`Maximum purchase is ${presaleData.maxPurchase.toLocaleString()} RELY`)
      return
    }

    // Select random wallet
    const randomWallet = WALLET_ADDRESSES[Math.floor(Math.random() * WALLET_ADDRESSES.length)]
    setSelectedRecipientWallet(randomWallet)

    // Create transaction record
    const newTransaction: Transaction = {
      id: uuidv4(),
      senderAddress: walletAddress,
      recipientWallet: randomWallet,
      amount: Number.parseFloat(purchaseAmount) * presaleData.price,
      currency: selectedCurrency,
      relyTokens: Number.parseFloat(purchaseAmount),
      timestamp: new Date().toISOString(),
      status: "pending",
    }

    setCurrentTransaction(newTransaction)
    setTransactionStage("payment")
    setCountdownTime(60)
    setTotalCountdown(1800)
  }

  const handleConfirmPayment = () => {
    setShowConfirmationModal(true)
  }

  const handlePaymentConfirmed = () => {
    setShowConfirmationModal(false)
    if (currentTransaction) {
      const updatedTransactions = [...transactions, currentTransaction]
      setTransactions(updatedTransactions)
      localStorage.setItem("relyTransactions", JSON.stringify(updatedTransactions))
      setTransactionStage("countdown")
    }
  }

  const handleCancelTransaction = () => {
    if (currentTransaction) {
      const updatedTransaction = {
        ...currentTransaction,
        status: "cancelled" as const,
      }
      const updatedTransactions = [...transactions, updatedTransaction]
      setTransactions(updatedTransactions)
      localStorage.setItem("relyTransactions", JSON.stringify(updatedTransactions))
    }
    setTransactionStage("idle")
    setCurrentTransaction(null)
    setPurchaseAmount("")
    setSelectedRecipientWallet("")
  }

  const formatCountdown = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins}:${secs.toString().padStart(2, "0")}`
  }

  const calculateTokenAmount = () => {
    if (!purchaseAmount) return "0"
    return Number.parseFloat(purchaseAmount).toLocaleString()
  }

  const calculateUSDAmount = () => {
    if (!purchaseAmount) return "0"
    return (Number.parseFloat(purchaseAmount) * presaleData.price).toFixed(3)
  }

  const copyAddress = (address: string) => {
    navigator.clipboard.writeText(address)
    alert("Address copied to clipboard!")
  }

  // Render different stages
  if (transactionStage === "history" && isWalletConnected) {
    return (
      <div className="min-h-screen pt-16 bg-gradient-to-b from-black via-background to-background">
        {/* Wave background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <svg className="absolute top-0 left-0 w-full h-96 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path
              d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
              className="text-primary"
            />
          </svg>
        </div>

        <div className="min-h-screen pt-16 relative z-10">
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Transaction History</h2>
                <GlassButton
                  variant="outline"
                  size="sm"
                  onClick={() => setTransactionStage("idle")}
                  className="gap-2"
                >
                  <X className="h-4 w-4" />
                  Close
                </GlassButton>
              </div>

              {transactionHistory.length === 0 ? (
                <Card className="glass-card">
                  <CardContent className="p-12 text-center">
                    <p className="text-muted-foreground">No transactions yet</p>
                  </CardContent>
                </Card>
              ) : (
                <div className="space-y-4">
                  {transactionHistory.map((tx) => (
                    <Card key={tx.id} className="glass-card">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <p className="text-sm text-muted-foreground">Amount</p>
                            <p className="font-bold">
                              {tx.relyTokens.toLocaleString()} RELY
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Payment</p>
                            <p className="font-bold">
                              {tx.amount.toFixed(3)} {tx.currency}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Date</p>
                            <p className="font-bold text-sm">
                              {new Date(tx.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Status</p>
                            <p
                              className={`font-bold capitalize ${
                                tx.status === "successful"
                                  ? "text-green-500"
                                  : tx.status === "pending"
                                    ? "text-yellow-500"
                                    : "text-red-500"
                              }`}
                            >
                              {tx.status}
                            </p>
                          </div>
                          <div className="text-right">
                            <GlassButton
                              variant="outline"
                              size="sm"
                              onClick={() => copyAddress(tx.recipientWallet)}
                            >
                              <Copy className="h-4 w-4" />
                            </GlassButton>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16 bg-gradient-to-b from-black via-background to-background">
      {/* Wave background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute top-0 left-0 w-full h-96 opacity-10" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,50 Q300,0 600,50 T1200,50 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Confirmation Modal */}
      {showConfirmationModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <Card className="glass-card max-w-md w-full">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-yellow-500/20 mx-auto">
                  <AlertCircle className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-bold">Confirm Payment</h3>
                  <p className="text-sm text-muted-foreground">
                    Make sure you have sent the exact amount to the wallet address. Your transaction will be cancelled if payment is not received.
                  </p>
                </div>
                <div className="space-y-3">
                  <GlassButton
                    onClick={handlePaymentConfirmed}
                    className="w-full gap-2"
                    size="lg"
                  >
                    <Check className="h-5 w-5" />
                    I've Sent the Payment
                  </GlassButton>
                  <GlassButton
                    variant="outline"
                    onClick={() => setShowConfirmationModal(false)}
                    className="w-full"
                    size="lg"
                  >
                    Cancel
                  </GlassButton>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      {/* Main Content */}
      <div className="relative z-10">
        {transactionStage === "idle" ? (
          <>
            {/* Hero Section */}
            <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background/80 to-background">
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
                      <h1 className="text-4xl md:text-5xl lg:text-6xl font-light tracking-tight">
                        <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                          $RELY
                        </span>{" "}
                        Token Presale
                      </h1>
                      <p className="max-w-[700px] text-lg md:text-xl text-muted-foreground mx-auto font-light">
                        Get early access to RELY tokens at presale prices. Limited time offer with exclusive benefits for early supporters.
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </section>

            {/* Main Purchase Section */}
            <section className="w-full py-12 md:py-24 bg-background">
              <div className="container px-4 md:px-6">
                <div className="mx-auto max-w-6xl">
                  <ScrollReveal>
                    <Card className="glass-card mb-8">
                      <CardContent className="p-8">
                        <div className="text-center space-y-6">
                          <h2 className="text-3xl font-semibold">Presale Progress</h2>
                          <div className="space-y-4">
                            <div className="flex justify-between items-center text-lg">
                              <span>Tokens Sold</span>
                              <span className="font-bold text-primary">
                                {presaleData.soldTokens.toLocaleString()} /{" "}
                                {presaleData.totalTokens.toLocaleString()} RELY
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
                    {/* Purchase Card - Apple Style */}
                    <ScrollReveal delay={100}>
                      <Card className="glass-card">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-semibold mb-2">Buy $RELY</h3>
                              <p className="text-muted-foreground">Secure your tokens at presale price</p>
                            </div>

                            {/* Key Features */}
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                                <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                                <div>
                                  <p className="text-sm font-medium">Price per Token</p>
                                  <p className="text-lg font-bold text-primary">
                                    ${presaleData.price}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                                <Lock className="h-5 w-5 text-primary flex-shrink-0" />
                                <div>
                                  <p className="text-sm font-medium">Minimum Purchase</p>
                                  <p className="text-lg font-bold">
                                    {presaleData.minPurchase.toLocaleString()} RELY
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 border border-border/50">
                                <Rocket className="h-5 w-5 text-primary flex-shrink-0" />
                                <div>
                                  <p className="text-sm font-medium">Maximum Purchase</p>
                                  <p className="text-lg font-bold">
                                    {presaleData.maxPurchase.toLocaleString()} RELY
                                  </p>
                                </div>
                              </div>
                            </div>

                            {!isWalletConnected ? (
                              <GlassButton
                                onClick={handleConnectWallet}
                                className="w-full gap-2"
                                size="lg"
                              >
                                <Wallet className="h-5 w-5" />
                                Connect Wallet
                              </GlassButton>
                            ) : (
                              <div className="space-y-4">
                                <div className="flex items-center justify-between p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                                  <div className="flex items-center gap-2 text-green-500">
                                    <CheckCircle className="h-5 w-5" />
                                    <span className="font-medium">Wallet Connected</span>
                                  </div>
                                  <GlassButton
                                    variant="outline"
                                    size="sm"
                                    onClick={handleDisconnectWallet}
                                  >
                                    Disconnect
                                  </GlassButton>
                                </div>

                                <p className="text-xs text-muted-foreground break-all bg-muted/30 p-3 rounded-lg">
                                  {walletAddress}
                                </p>

                                {/* Currency Selection */}
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Payment Method</label>
                                  <div className="flex gap-2">
                                    <GlassButton
                                      variant={
                                        selectedCurrency === "SOL" ? "default" : "outline"
                                      }
                                      size="sm"
                                      onClick={() => setSelectedCurrency("SOL")}
                                      className="flex-1"
                                    >
                                      SOL
                                    </GlassButton>
                                    <GlassButton
                                      variant={
                                        selectedCurrency === "USDC" ? "default" : "outline"
                                      }
                                      size="sm"
                                      onClick={() => setSelectedCurrency("USDC")}
                                      className="flex-1"
                                    >
                                      USDC
                                    </GlassButton>
                                  </div>
                                </div>

                                {/* Amount Input */}
                                <div className="space-y-2">
                                  <label className="text-sm font-medium">Amount (RELY Tokens)</label>
                                  <input
                                    type="number"
                                    value={purchaseAmount}
                                    onChange={(e) => setPurchaseAmount(e.target.value)}
                                    placeholder={`Min: ${presaleData.minPurchase.toLocaleString()}`}
                                    className="w-full p-3 rounded-lg bg-muted/30 border border-border focus:border-primary focus:outline-none transition-colors"
                                  />
                                  {purchaseAmount && (
                                    <div className="text-sm text-muted-foreground bg-muted/20 p-3 rounded-lg">
                                      <p>
                                        You will receive:{" "}
                                        <span className="font-bold text-foreground">
                                          {calculateTokenAmount()} RELY
                                        </span>
                                      </p>
                                      <p>
                                        Cost:{" "}
                                        <span className="font-bold text-foreground">
                                          ${calculateUSDAmount()} {selectedCurrency}
                                        </span>
                                      </p>
                                    </div>
                                  )}
                                </div>

                                <GlassButton
                                  onClick={handleInitiatePurchase}
                                  className="w-full gap-2"
                                  size="lg"
                                >
                                  <DollarSign className="h-5 w-5" />
                                  Buy $RELY Tokens
                                </GlassButton>

                                {transactionHistory.length > 0 && (
                                  <GlassButton
                                    variant="outline"
                                    onClick={() => setTransactionStage("history")}
                                    className="w-full gap-2"
                                    size="sm"
                                  >
                                    <Clock className="h-4 w-4" />
                                    View Transaction History
                                  </GlassButton>
                                )}
                              </div>
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>

                    {/* Info Card */}
                    <ScrollReveal delay={200}>
                      <Card className="glass-card">
                        <CardContent className="p-8">
                          <div className="space-y-6">
                            <div>
                              <h3 className="text-2xl font-semibold mb-2">How It Works</h3>
                              <p className="text-muted-foreground">
                                Simple and secure token purchase process
                              </p>
                            </div>

                            <div className="space-y-4">
                              <div className="flex gap-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 flex-shrink-0">
                                  <span className="font-bold text-primary">1</span>
                                </div>
                                <div>
                                  <p className="font-semibold">Connect Your Wallet</p>
                                  <p className="text-sm text-muted-foreground">
                                    Link your Solana wallet securely
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 flex-shrink-0">
                                  <span className="font-bold text-primary">2</span>
                                </div>
                                <div>
                                  <p className="font-semibold">Enter Amount</p>
                                  <p className="text-sm text-muted-foreground">
                                    Specify how many RELY tokens you want
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 flex-shrink-0">
                                  <span className="font-bold text-primary">3</span>
                                </div>
                                <div>
                                  <p className="font-semibold">Send Payment</p>
                                  <p className="text-sm text-muted-foreground">
                                    Send SOL or USDC to the provided wallet
                                  </p>
                                </div>
                              </div>

                              <div className="flex gap-4">
                                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-primary/20 flex-shrink-0">
                                  <span className="font-bold text-primary">4</span>
                                </div>
                                <div>
                                  <p className="font-semibold">Receive Tokens</p>
                                  <p className="text-sm text-muted-foreground">
                                    RELY tokens sent to your wallet automatically
                                  </p>
                                </div>
                              </div>
                            </div>

                            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                              <p className="text-sm text-blue-200">
                                <span className="font-semibold">💡 Tip:</span> Send SOL or USDC from the same wallet you connected. Tokens will be sent back automatically.
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </ScrollReveal>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : transactionStage === "payment" ? (
          // Payment Stage
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="text-center space-y-2">
                        <h2 className="text-3xl font-semibold">Send Payment</h2>
                        <p className="text-muted-foreground">
                          Send {selectedCurrency} to the wallet address below
                        </p>
                      </div>

                      {/* Amount Summary */}
                      <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">RELY Tokens</span>
                          <span className="font-bold text-lg">
                            {currentTransaction?.relyTokens.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Amount to Send</span>
                          <span className="font-bold text-xl text-primary">
                            {currentTransaction?.amount.toFixed(3)} {selectedCurrency}
                          </span>
                        </div>
                      </div>

                      {/* Recipient Wallet */}
                      <div className="space-y-3">
                        <label className="text-sm font-medium">Send To</label>
                        <div className="bg-muted/30 rounded-lg p-4 break-all font-mono text-sm">
                          {selectedRecipientWallet}
                        </div>
                        <GlassButton
                          variant="outline"
                          onClick={() => copyAddress(selectedRecipientWallet)}
                          className="w-full gap-2"
                        >
                          <Copy className="h-4 w-4" />
                          Copy Address
                        </GlassButton>
                      </div>

                      {/* QR Code */}
                      <div className="flex justify-center">
                        <div className="bg-white p-4 rounded-lg">
                          <QRCode value={selectedRecipientWallet} size={200} />
                        </div>
                      </div>

                      {/* Countdown */}
                      <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="text-sm font-medium">Transaction Expires In</p>
                            <p className="text-2xl font-bold text-yellow-500">
                              {Math.floor(totalCountdown / 60)}:{(totalCountdown % 60)
                                .toString()
                                .padStart(2, "0")}
                            </p>
                          </div>
                          <Clock className="h-8 w-8 text-yellow-500" />
                        </div>
                      </div>

                      {/* Info */}
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 space-y-2">
                        <p className="text-sm text-blue-200">
                          <span className="font-semibold">ℹ️ Important:</span> Send from the wallet you connected above. RELY tokens will be sent back to the same address.
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="space-y-3">
                        <GlassButton
                          onClick={handleConfirmPayment}
                          className="w-full gap-2"
                          size="lg"
                        >
                          <Check className="h-5 w-5" />
                          Payment Confirmed
                        </GlassButton>
                        <GlassButton
                          variant="outline"
                          onClick={handleCancelTransaction}
                          className="w-full"
                          size="lg"
                        >
                          Cancel Transaction
                        </GlassButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ) : transactionStage === "countdown" ? (
          // Countdown Stage
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {/* Header */}
                      <div className="text-center space-y-2">
                        <h2 className="text-3xl font-semibold">Processing Payment</h2>
                        <p className="text-muted-foreground">
                          RELY tokens will be sent to your wallet
                        </p>
                      </div>

                      {/* Main Countdown */}
                      <div className="flex justify-center">
                        <div className="bg-gradient-to-br from-primary/20 to-primary/10 border border-primary/50 rounded-2xl p-12 text-center">
                          <p className="text-muted-foreground mb-4">T - Minus</p>
                          <p className="text-6xl font-bold text-primary font-mono">
                            {formatCountdown(countdownTime)}
                          </p>
                        </div>
                      </div>

                      {/* Info */}
                      <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                        <p className="text-sm text-blue-200">
                          <span className="font-semibold">⚠️ Do not reload this page</span> or close the browser. Your transaction is being processed.
                        </p>
                      </div>

                      {/* Transaction Details */}
                      <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">RELY Tokens</span>
                          <span className="font-bold">
                            {currentTransaction?.relyTokens.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status</span>
                          <span className="font-bold text-yellow-500">Pending</span>
                        </div>
                      </div>

                      {/* Cancel Button */}
                      <GlassButton
                        variant="outline"
                        onClick={handleCancelTransaction}
                        className="w-full"
                        size="lg"
                      >
                        Cancel Transaction
                      </GlassButton>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ) : transactionStage === "success" ? (
          // Success Stage
          <section className="w-full py-12 md:py-24 bg-background">
            <div className="container px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <Card className="glass-card">
                  <CardContent className="p-8">
                    <div className="space-y-8">
                      {/* Success Icon */}
                      <div className="flex justify-center">
                        <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-500/20 border border-green-500/50">
                          <CheckCircle className="h-12 w-12 text-green-500" />
                        </div>
                      </div>

                      {/* Header */}
                      <div className="text-center space-y-2">
                        <h2 className="text-3xl font-semibold">Tokens Sent!</h2>
                        <p className="text-muted-foreground">
                          Your RELY tokens have been sent to your wallet
                        </p>
                      </div>

                      {/* Transaction Details */}
                      <div className="bg-muted/30 rounded-lg p-6 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">RELY Tokens</span>
                          <span className="font-bold text-lg text-green-500">
                            +{currentTransaction?.relyTokens.toLocaleString()}
                          </span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Status</span>
                          <span className="font-bold text-green-500">Successful</span>
                        </div>
                        <div className="h-px bg-border" />
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Transaction ID</span>
                          <span className="font-mono text-sm break-all">
                            {currentTransaction?.id.slice(0, 8)}...
                          </span>
                        </div>
                      </div>

                      {/* Success Message */}
                      <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                        <p className="text-sm text-green-200">
                          <span className="font-semibold">✓ Success!</span> Your tokens are now in your wallet. You can close this page.
                        </p>
                      </div>

                      {/* Buttons */}
                      <div className="space-y-3">
                        <GlassButton
                          onClick={() => {
                            setTransactionStage("idle")
                            setPurchaseAmount("")
                            setSelectedRecipientWallet("")
                            setCurrentTransaction(null)
                          }}
                          className="w-full gap-2"
                          size="lg"
                        >
                          <Rocket className="h-5 w-5" />
                          Buy More Tokens
                        </GlassButton>
                        <GlassButton
                          variant="outline"
                          onClick={() => setTransactionStage("history")}
                          className="w-full gap-2"
                          size="lg"
                        >
                          <Clock className="h-5 w-5" />
                          View History
                        </GlassButton>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        ) : null}
      </div>
    </div>
  )
}
