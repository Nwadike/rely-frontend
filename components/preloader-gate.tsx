"use client"
import { useState } from "react"
import Preloader from "@/components/preloader"

export default function PreloaderGate() {
  const [complete, setComplete] = useState(false)
  return !complete ? <Preloader onLoadComplete={() => setComplete(true)} /> : null
}