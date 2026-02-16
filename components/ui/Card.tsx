"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    glass?: boolean;
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, glass, ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-[2rem] border border-border bg-card p-6 shadow-sm transition-all",
                    glass && "bg-background/40 backdrop-blur-xl border-white/10 dark:bg-zinc-950/40",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

const MotionCard = motion(Card);

export { Card, MotionCard };
