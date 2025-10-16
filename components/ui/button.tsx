import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-primary to-accent text-white shadow-sm hover:shadow-glow focus-visible:ring-primary focus-visible:ring-offset-background",
        secondary:
          "bg-surface text-surface-foreground shadow-sm hover:bg-surface/80 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:ring-primary focus-visible:ring-offset-background",
        outline:
          "border border-border bg-transparent text-foreground hover:bg-surface/60 hover:shadow-lg hover:shadow-blue-500/10 focus-visible:ring-primary focus-visible:ring-offset-background",
        ghost:
          "text-foreground/80 hover:bg-surface/50 focus-visible:ring-primary focus-visible:ring-offset-background",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-5 py-2.5",
        sm: "h-9 px-4",
        lg: "h-12 px-6 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
