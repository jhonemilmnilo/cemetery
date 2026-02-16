"use client"

import * as React from "react"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', isLoading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: 'bg-foreground text-background hover:opacity-90',
            secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
            outline: 'border border-border bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900',
            ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-900',
        }

        return (
            <button
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-all active:scale-[0.98] disabled:pointer-events-none disabled:opacity-50 gap-2",
                    variants[variant],
                    className
                )}
                ref={ref}
                disabled={disabled || isLoading}
                {...props}
            >
                {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
                {!isLoading && children}
            </button>
        )
    }
)
Button.displayName = "Button"

export { Button }
