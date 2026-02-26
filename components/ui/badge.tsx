import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] w-fit whitespace-nowrap shrink-0 [&>svg]:size-3 gap-1.5 transition-all",
  {
    variants: {
      variant: {
        // DEFAULT: The Ghibli Green but as a soft "Ink Stamp"
        default:
          "bg-primary/10 text-primary border-primary/20 shadow-sm",

        // SECONDARY: The Sage/Moss look
        secondary:
          "bg-secondary/50 text-secondary-foreground border-secondary shadow-sm",

        // DESTRUCTIVE: Terracotta tint
        destructive:
          "bg-destructive/10 text-destructive border-destructive/20",

        // OUTLINE: The "Earthy" label
        outline:
          "border-foreground/20 text-foreground/80 bg-background/50 backdrop-blur-[2px]",

        // GHOST: Purely minimalist
        ghost: "border-transparent text-muted-foreground hover:text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }