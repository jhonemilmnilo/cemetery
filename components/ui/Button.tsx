"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Loader2 } from "lucide-react"

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'glass'
    isLoading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', isLoading, children, disabled, ...props }, ref) => {
        const variants = {
            primary: 'bg-foreground text-background hover:opacity-90 shadow-[0_0_20px_rgba(0,0,0,0.1)] dark:shadow-[0_0_20px_rgba(255,255,255,0.05)]',
            secondary: 'bg-zinc-100 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700',
            outline: 'border border-border bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900',
            ghost: 'hover:bg-zinc-100 dark:hover:bg-zinc-900',
            glass: 'bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20',
        }

        return (
            <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "inline-flex items-center justify-center rounded-full px-6 py-2.5 text-sm font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 gap-2 relative overflow-hidden group",
                    variants[variant],
                    className
                )}
                ref={ref as any}
                disabled={disabled || isLoading}
                {...props as any}
            >
                <AnimatePresence mode="wait">
                    {isLoading ? (
                        <motion.div
                            key="loader"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                        >
                            <Loader2 className="h-4 w-4 animate-spin" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-2"
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Shine effect on hover */}
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </motion.button>
        )
    }
)
Button.displayName = "Button"

export { Button }
