"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export interface InputProps
    extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, ...props }, ref) => {
        const [isFocused, setIsFocused] = React.useState(false)

        return (
            <div className="w-full space-y-2">
                {label && (
                    <label className="text-sm font-semibold tracking-tight text-foreground/70 ml-1">
                        {label}
                    </label>
                )}
                <div className="relative group">
                    <input
                        type={type}
                        className={cn(
                            "flex h-12 w-full rounded-2xl border border-border bg-background px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300",
                            isFocused ? "border-foreground shadow-[0_0_0_4px_rgba(0,0,0,0.02)]" : "hover:border-foreground/30",
                            error && "border-red-500 focus-visible:ring-red-500/20",
                            className
                        )}
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        ref={ref}
                        {...props}
                    />

                    {/* Subtle bottom line animation */}
                    <motion.div
                        initial={false}
                        animate={{ scaleX: isFocused ? 1 : 0 }}
                        className="absolute bottom-0 left-4 right-4 h-[1px] bg-foreground origin-center"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                </div>
                {error && (
                    <p className="text-[12px] font-medium text-red-500 ml-1">
                        {error}
                    </p>
                )}
            </div>
        )
    }
)
Input.displayName = "Input"

export { Input }
