import type { Metadata } from "next"
import { DappView } from "@/components/views/dapp-view"

export const metadata: Metadata = {
  title: "Rely Exchange - Under Maintenance",
  description:
    "Rely Exchange is currently under maintenance. We're working hard to bring you the best trading experience.",
  robots: "noindex, nofollow",
}

export default function DappPage() {
  return <DappView />
}
