"use client";

import { motion } from "framer-motion";
import {
  Search,
  MapPin,
  Heart,
  Calendar,
  ChevronRight,
  Users,
  ShieldCheck,
  Cloud
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-zinc-200 dark:selection:bg-zinc-800">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-foreground text-background">
              <Cloud className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Eternal Care</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#features" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Features</Link>
            <Link href="#search" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">Search</Link>
            <Link href="#about" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">About</Link>
          </div>
          <button className="rounded-full bg-foreground px-5 py-2 text-sm font-medium text-background transition-all hover:opacity-90 active:scale-95">
            Get Started
          </button>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative flex flex-col items-center justify-center overflow-hidden px-6 pt-40 pb-20 md:pt-60 md:pb-40">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_right,rgba(120,119,198,0.1),transparent_50%)]" />

          <motion.div
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.div
              variants={fadeIn}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1 text-sm font-medium backdrop-blur-sm"
            >
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Now Live: Digital Memorials
            </motion.div>

            <motion.h1
              variants={fadeIn}
              className="mt-8 max-w-4xl text-5xl font-extrabold tracking-tight sm:text-7xl md:text-8xl"
            >
              Honoring Legacies <br />
              <span className="bg-gradient-to-r from-zinc-400 via-zinc-900 to-zinc-400 bg-clip-text text-transparent dark:from-zinc-600 dark:via-zinc-100 dark:to-zinc-600">
                With Digital Precision
              </span>
            </motion.h1>

            <motion.p
              variants={fadeIn}
              className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            >
              The modern platform for cemetery management and digital legacy preservation.
              Connecting past, present, and future in one unified experience.
            </motion.p>

            <motion.div
              variants={fadeIn}
              className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
            >
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-8 text-base font-medium text-background transition-all hover:opacity-90 active:scale-95 sm:w-auto">
                <Search className="h-4 w-4" />
                Find a Loved One
              </button>
              <button className="flex h-12 w-full items-center justify-center gap-2 rounded-full border border-border bg-card/50 px-8 text-base font-medium transition-all hover:bg-zinc-100 dark:hover:bg-zinc-900 active:scale-95 sm:w-auto">
                View Burial Maps
                <ChevronRight className="h-4 w-4" />
              </button>
            </motion.div>
          </motion.div>

          {/* Abstract Shape Decor */}
          <div className="absolute top-1/2 left-1/2 -z-20 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 bg-zinc-200/20 blur-[120px] dark:bg-zinc-800/10" />
        </section>

        {/* Features Grid */}
        <section id="features" className="mx-auto max-w-7xl px-6 py-24">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Digital Memorials",
                description: "Create lasting tributes with photos, stories, and videos for generations to cherish.",
                icon: Heart,
                color: "text-red-500"
              },
              {
                title: "Live Navigation",
                description: "Precision GPS mapping to help visitors find resting places with ease.",
                icon: MapPin,
                color: "text-blue-500"
              },
              {
                title: "Event Planning",
                description: "Seamlessly coordinate services and annual remembrances from any device.",
                icon: Calendar,
                color: "text-emerald-500"
              },
              {
                title: "Family Connect",
                description: "Secure private spaces for families to collaborate on memorials.",
                icon: Users,
                color: "text-amber-500"
              },
              {
                title: "Heritage Vault",
                description: "Permanent encrypted storage for historical records and family trees.",
                icon: ShieldCheck,
                color: "text-purple-500"
              },
              {
                title: "Cloud Records",
                description: "Automated cemetery management for administrators and caretakers.",
                icon: Cloud,
                color: "text-sky-500"
              }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-border bg-card p-8 transition-all hover:shadow-2xl hover:shadow-zinc-500/10 dark:hover:shadow-white/5"
              >
                <div className={cn("mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 transition-colors group-hover:bg-zinc-200 dark:bg-zinc-900 dark:group-hover:bg-zinc-800", feature.color)}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="mt-4 leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-semibold opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ChevronRight className="ml-1 h-3 w-3" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="mx-auto max-w-7xl px-6 py-24 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[3rem] bg-foreground px-6 py-20 text-background md:px-12"
          >
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-white">
              Preserving Legacies, <br /> Forever.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-zinc-400">
              Join thousands of families finding comfort and connection through our digital memorial platform.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button className="h-12 rounded-full bg-white px-8 font-medium text-black transition-transform hover:scale-105 active:scale-95">
                Register a Plot
              </button>
              <button className="h-12 rounded-full border border-zinc-800 px-8 font-medium text-white transition-colors hover:bg-zinc-900 active:scale-95">
                Contact Our Team
              </button>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-2">
              <Cloud className="h-5 w-5" />
              <span className="font-bold tracking-tight">Eternal Care</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Eternal Care Systems. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-foreground">Privacy</Link>
              <Link href="#" className="hover:text-foreground">Terms</Link>
              <Link href="#" className="hover:text-foreground">Support</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
