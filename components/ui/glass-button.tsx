"use client"

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const glassButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 relative overflow-hidden group",
  {
    variants: {
      variant: {
        default:
          "bg-primary/20 text-primary-foreground backdrop-blur-md border border-primary/30 hover:bg-primary/30 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/25",
        destructive:
          "bg-destructive/20 text-destructive-foreground backdrop-blur-md border border-destructive/30 hover:bg-destructive/30 hover:border-destructive/50 hover:shadow-lg hover:shadow-destructive/25",
        outline:
          "border border-input/30 bg-background/20 backdrop-blur-md hover:bg-accent/20 hover:text-accent-foreground hover:border-accent/50 hover:shadow-lg",
        secondary:
          "bg-secondary/20 text-secondary-foreground backdrop-blur-md border border-secondary/30 hover:bg-secondary/30 hover:border-secondary/50 hover:shadow-lg hover:shadow-secondary/25",
        ghost: "hover:bg-accent/20 hover:text-accent-foreground backdrop-blur-sm hover:shadow-lg",
        link: "text-primary underline-offset-4 hover:underline backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
)

export interface GlassButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof glassButtonVariants> {
  asChild?: boolean
}

const GlassButton = React.forwardRef<HTMLButtonElement, GlassButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp className={cn(glassButtonVariants({ variant, size, className }))} ref={ref} {...props}>
        {/* Glass glare effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute inset-0 bg-gradient-to-tl from-white/5 to-transparent opacity-0 group-active:opacity-100 transition-opacity duration-150" />
        {props.children}
      </Comp>
    )
  },
)
GlassButton.displayName = "GlassButton"

export { GlassButton, glassButtonVariants }
