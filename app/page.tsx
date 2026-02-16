"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import {
  Search,
  MapPin,
  Heart,
  Calendar,
  ChevronRight,
  Users,
  ShieldCheck,
  Cloud,
  ArrowRight,
  Globe,
  Sparkles
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { MotionCard } from "@/components/ui/Card";
import { useRef, useState, useEffect } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);
  const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex min-h-screen flex-col bg-background selection:bg-zinc-200 dark:selection:bg-zinc-800 selection:text-foreground overflow-x-hidden">
      {/* Navigation */}
      <nav className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 transition-property-[height,background-color,border-color]",
        scrolled
          ? "h-16 border-b border-border/40 bg-background/60 backdrop-blur-2xl"
          : "h-24 bg-transparent border-transparent"
      )}>
        <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-foreground text-background overflow-hidden transition-transform group-hover:scale-105 active:scale-95">
              <Cloud className="h-6 w-6 relative z-10" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-zinc-400 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </div>
            <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">Eternal Care</span>
          </motion.div>

          <div className="hidden items-center gap-10 md:flex">
            {["Features", "Services", "Legacy", "About"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold text-muted-foreground transition-all hover:text-foreground relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-[1.5px] bg-foreground transition-all group-hover:w-full" />
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <Link href="/login" className="hidden text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground sm:block">
              Sign In
            </Link>
            <Link href="/register">
              <Button variant="primary" className="h-10 px-6">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      <main className="flex-1">
        {/* Hero Section */}
        <section ref={targetRef} className="relative flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-64 md:pb-48">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
                x: [0, 100, 0],
                y: [0, 50, 0]
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-[-10%] right-[-10%] h-[800px] w-[800px] rounded-full bg-emerald-500/5 blur-[120px] dark:bg-emerald-500/10"
            />
            <motion.div
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [0, -90, 0],
                x: [0, -100, 0],
                y: [0, -50, 0]
              }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-[-10%] left-[-10%] h-[800px] w-[800px] rounded-full bg-blue-500/5 blur-[120px] dark:bg-blue-500/10"
            />
          </div>

          <motion.div
            style={{ opacity, scale, y }}
            className="text-center relative z-10"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-foreground/60 backdrop-blur-md"
            >
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              A New Era of Digital Legacy
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 max-w-5xl text-6xl font-extrabold tracking-tight sm:text-8xl lg:text-[9rem] leading-[0.9]"
            >
              Honoring Life <br />
              <span className="bg-gradient-to-b from-foreground via-foreground/90 to-foreground/40 bg-clip-text text-transparent">
                Beyond Time.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mx-auto mt-12 max-w-2xl text-lg text-muted-foreground/80 md:text-xl font-medium leading-relaxed"
            >
              The state-of-the-art platform for cemetery management and immersive digital memorials.
              We bridge generations through precision technology and heartfelt design.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-16 flex flex-col items-center justify-center gap-6 sm:flex-row"
            >
              <Button variant="primary" className="h-14 px-10 text-base font-bold group">
                Find a Resting Place
                <Search className="h-5 w-5 transition-transform group-hover:scale-110" />
              </Button>
              <Button variant="outline" className="h-14 px-10 text-base font-bold group border-zinc-200 dark:border-zinc-800">
                Explore Maps
                <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            {/* Trusted indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="mt-20 flex flex-col items-center gap-4 border-t border-border/50 pt-10"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">Trusted by Modern Memorials</p>
              <div className="flex flex-wrap items-center justify-center gap-8 grayscale opacity-40">
                <div className="flex items-center gap-2 font-bold italic"><Globe className="h-5 w-5" /> GLOBAL CARE</div>
                <div className="flex items-center gap-2 font-bold italic"><ShieldCheck className="h-5 w-5" /> HERITAGE TRUST</div>
                <div className="flex items-center gap-2 font-bold italic"><Calendar className="h-5 w-5" /> MEMORIAL FLOW</div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Features Slider / Scroll Section */}
        <section id="features" className="py-32 px-6">
          <div className="mx-auto max-w-7xl">
            <div className="mb-20 space-y-4 max-w-3xl">
              <h2 className="text-4xl font-extrabold tracking-tight sm:text-6xl">
                Elevating the <br />
                Experience of Remembering
              </h2>
              <p className="text-xl text-muted-foreground">Every detail crafted to preserve the essence of a life well lived.</p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Immersive Memorials",
                  description: "Cinematic digital tributes with high-fidelity media hosting and collaborative storytelling foundations.",
                  icon: Heart,
                  color: "bg-red-500/10 text-red-500"
                },
                {
                  title: "Real-time Navigation",
                  description: "Precise centimetre-level GPS orientation to guide families exactly where they need to go.",
                  icon: MapPin,
                  color: "bg-blue-500/10 text-blue-500"
                },
                {
                  title: "Smart Administration",
                  description: "Enterprise-grade tools for cemetery records, scheduling, and digital plot management.",
                  icon: Cloud,
                  color: "bg-emerald-500/10 text-emerald-500"
                },
                {
                  title: "Event Coordination",
                  description: "Simplified scheduling for remembrances, flowers, and community gatherings from any device.",
                  icon: Calendar,
                  color: "bg-amber-500/10 text-amber-500"
                },
                {
                  title: "Ancestral Archive",
                  description: "Permanent encrypted storage for historical records, lineage, and family heritage vaults.",
                  icon: ShieldCheck,
                  color: "bg-purple-500/10 text-purple-500"
                },
                {
                  title: "Family Network",
                  description: "Private spaces for families to communicate and build legacies together across the globe.",
                  icon: Users,
                  color: "bg-sky-500/10 text-sky-500"
                }
              ].map((feature, i) => (
                <MotionCard
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  glass
                  className="group hover:border-foreground/20 transition-all duration-500 cursor-default"
                >
                  <div className={cn("mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl group-hover:scale-110 transition-transform duration-500", feature.color)}>
                    <feature.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-4 group-hover:translate-x-1 transition-transform">{feature.title}</h3>
                  <p className="leading-relaxed text-muted-foreground font-medium">
                    {feature.description}
                  </p>
                  <div className="mt-8 flex items-center text-sm font-bold opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-2">
                    EXPLORE FEATURE <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </MotionCard>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Highlight Section */}
        <section className="py-32 px-6 bg-zinc-900 text-white rounded-[4rem] mx-4 my-20 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[200%] bg-gradient-to-r from-blue-500/20 to-transparent rotate-12 blur-[100px]" />
          </div>

          <div className="mx-auto max-w-7xl relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <span className="text-zinc-500 font-bold uppercase tracking-widest text-sm">Caretaker Portal</span>
              <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mt-6 leading-[1.1]">
                Precision tools for <br />
                <span className="text-zinc-600">modern management</span>
              </h2>
              <p className="text-zinc-400 mt-8 text-xl max-w-lg leading-relaxed">
                Streamline operations with our intuitive dashboard. Track every plot,
                manage visitor flows, and maintain records with ease.
              </p>
              <div className="mt-12">
                <Button variant="glass" className="h-14 px-8 text-base">
                  See Dashboard Demo
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-white/5 rounded-[3rem] border border-white/10 backdrop-blur-3xl overflow-hidden shadow-2xl flex items-center justify-center">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="h-full w-full border-[100px] border-white rounded-full border-dashed" />
                </motion.div>
                <MapPin className="h-24 w-24 text-zinc-700" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Premium CTA */}
        <section className="mx-auto max-w-7xl px-6 py-40 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[5rem] bg-foreground px-6 py-32 text-background md:px-12 overflow-hidden"
          >
            {/* Sparkle effects */}
            <motion.div
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute top-20 left-20 h-40 w-40 bg-white blur-[80px] rounded-full"
            />
            <motion.div
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute bottom-20 right-20 h-60 w-60 bg-white blur-[100px] rounded-full"
            />

            <div className="relative z-10">
              <h2 className="text-5xl font-extrabold tracking-tighter sm:text-8xl text-white mb-10 leading-none">
                Begin the Legacy <br />
                Today.
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-zinc-400 text-xl font-medium mb-16">
                Connect your history with the future. Join the community
                of families preserving memories with digital precision.
              </p>
              <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
                <Link href="/register">
                  <Button variant="glass" className="h-16 px-12 text-lg font-bold bg-white text-black hover:bg-zinc-100">
                    Get Started Now
                  </Button>
                </Link>
                <Button variant="outline" className="h-16 px-12 text-lg font-bold text-white border-zinc-700 hover:bg-zinc-800">
                  Speak to an Expert
                </Button>
              </div>
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 py-24 pb-12 bg-zinc-50 dark:bg-zinc-950/50">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="space-y-6">
              <div className="flex items-center gap-2.5 font-bold text-2xl">
                <div className="h-8 w-8 bg-foreground rounded-lg flex items-center justify-center text-background">
                  <Cloud className="h-5 w-5" />
                </div>
                Eternal Care
              </div>
              <p className="text-muted-foreground font-medium leading-relaxed">
                The world's leading digital memorial platform. Preserving legacies with precision and care for future generations.
              </p>
            </div>

            {["Services", "Company", "Social"].map((category) => (
              <div key={category} className="space-y-6">
                <h4 className="font-bold text-sm uppercase tracking-widest text-foreground">{category}</h4>
                <div className="flex flex-col gap-4">
                  {category === "Services" && ["Memorials", "GPS Navigation", "Planning", "Archive"].map(link => <Link key={link} href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">{link}</Link>)}
                  {category === "Company" && ["About", "Careers", "Security", "Terms"].map(link => <Link key={link} href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">{link}</Link>)}
                  {category === "Social" && ["Twitter", "LinkedIn", "Instagram", "Facebook"].map(link => <Link key={link} href="#" className="text-muted-foreground hover:text-foreground transition-colors font-medium">{link}</Link>)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col items-center justify-between gap-8 border-t border-border/40 pt-12 md:flex-row">
            <p className="text-sm font-semibold text-muted-foreground">
              © {new Date().getFullYear()} Eternal Care Systems. All rights reserved.
            </p>
            <div className="flex gap-8 text-sm font-semibold text-muted-foreground">
              <Link href="#" className="hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Terms of Service</Link>
              <Link href="#" className="hover:text-foreground transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
