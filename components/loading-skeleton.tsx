"use client"

import type React from "react"

import { cn } from "@/lib/utils"

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Skeleton({ className, ...props }: SkeletonProps) {
  return <div className={cn("animate-pulse rounded-md bg-muted/50", className)} {...props} />
}

export function TokenRowSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-4 p-4 md:p-6 items-center">
      <div className="flex items-center gap-2">
        <Skeleton className="w-8 h-8 rounded-full" />
        <div className="space-y-1">
          <Skeleton className="h-4 w-12" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <div className="text-right">
        <Skeleton className="h-4 w-16 ml-auto" />
      </div>
      <div className="text-right">
        <Skeleton className="h-4 w-12 ml-auto" />
      </div>
      <div className="text-right">
        <Skeleton className="h-4 w-14 ml-auto" />
      </div>
    </div>
  )
}

export function FeatureCardSkeleton() {
  return (
    <div className="p-6 border rounded-lg">
      <div className="flex flex-col items-center space-y-2 text-center">
        <Skeleton className="h-12 w-12 rounded-full" />
        <Skeleton className="h-6 w-24" />
        <div className="space-y-1 w-full">
          <Skeleton className="h-3 w-full" />
          <Skeleton className="h-3 w-4/5 mx-auto" />
          <Skeleton className="h-3 w-3/4 mx-auto" />
        </div>
      </div>
    </div>
  )
}

export function StepSkeleton() {
  return (
    <div className="flex flex-col items-center space-y-2 text-center">
      <Skeleton className="h-16 w-16 rounded-full" />
      <Skeleton className="h-6 w-32" />
      <div className="space-y-1 w-full max-w-xs">
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-4/5 mx-auto" />
        <Skeleton className="h-3 w-3/4 mx-auto" />
      </div>
    </div>
  )
}
