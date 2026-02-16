"use client"

import { motion } from 'framer-motion'
import { Cloud, ArrowLeft, Mail, Lock, User, ShieldCheck, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuthController } from '@/controllers/authController'

const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
}

const stagger = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export default function RegisterView() {
    const { register, isLoading, response } = useAuthController()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        middleName: '',
        email: '',
        password: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        await register(formData)
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 px-6 selection:bg-zinc-200 dark:bg-black dark:selection:bg-zinc-800 overflow-hidden py-20">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.3, 1],
                        rotate: [0, -90, 0],
                        x: [0, -100, 0],
                        y: [0, 50, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-15%] left-[-10%] h-[700px] w-[700px] rounded-full bg-blue-500/10 blur-[120px] dark:bg-blue-500/20"
                />
                <motion.div
                    animate={{
                        scale: [1.3, 1, 1.3],
                        rotate: [0, 90, 0],
                        x: [0, 100, 0],
                        y: [0, -50, 0]
                    }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-15%] right-[-10%] h-[700px] w-[700px] rounded-full bg-emerald-500/10 blur-[120px] dark:bg-emerald-500/20"
                />
            </div>

            <Link
                href="/"
                className="fixed top-8 left-8 z-20 flex items-center gap-2 text-sm font-bold text-muted-foreground transition-all hover:text-foreground hover:translate-x-[-4px]"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <motion.div
                initial="initial"
                animate="animate"
                variants={stagger}
                className="w-full max-w-lg relative z-10"
            >
                <Card glass className="p-8 md:p-12 border-white/20 shadow-2xl">
                    <div className="flex flex-col items-center text-center">
                        <motion.div
                            variants={fadeIn}
                            className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-foreground text-background shadow-xl"
                        >
                            <Cloud className="h-8 w-8" />
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles className="h-4 w-4 text-amber-500" />
                            </motion.div>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="mt-8 text-4xl font-extrabold tracking-tight">
                            Begin Your Legacy
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mt-3 text-base font-medium text-muted-foreground">
                            Create a permanent sanctuary for your family's history.
                        </motion.p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <motion.div variants={fadeIn}>
                                <Input
                                    label="First Name"
                                    placeholder="John"
                                    required
                                    value={formData.firstName}
                                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                />
                            </motion.div>
                            <motion.div variants={fadeIn}>
                                <Input
                                    label="Last Name"
                                    placeholder="Doe"
                                    required
                                    value={formData.lastName}
                                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                />
                            </motion.div>
                        </div>

                        <motion.div variants={fadeIn}>
                            <Input
                                label="Middle Name (Optional)"
                                placeholder="Quincy"
                                value={formData.middleName}
                                onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                            />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Input
                                label="Email Address"
                                type="email"
                                placeholder="john@example.com"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            />
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Input
                                label="Password"
                                type="password"
                                placeholder="••••••••"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            />
                        </motion.div>

                        <motion.div variants={fadeIn} className="flex items-center gap-3 rounded-2xl bg-zinc-100/50 p-4 dark:bg-zinc-800/30 border border-border/40">
                            <ShieldCheck className="h-5 w-5 text-emerald-500 shrink-0" />
                            <p className="text-xs font-bold text-muted-foreground/80 leading-snug">
                                Your legacy data is encrypted and protected by enterprise-grade security protocols.
                            </p>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Button
                                className="w-full h-14 text-base font-bold shadow-lg"
                                isLoading={isLoading}
                                type="submit"
                            >
                                Create Your Sanctuary
                            </Button>
                        </motion.div>

                        {response && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`rounded-2xl border p-4 text-sm font-medium ${response.success
                                    ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400'
                                    : 'border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400'
                                    }`}
                            >
                                {response.message}
                            </motion.div>
                        )}

                        <motion.p variants={fadeIn} className="text-center text-sm font-medium text-muted-foreground">
                            Already have an account?{' '}
                            <Link href="/login" className="font-extrabold text-foreground hover:underline underline-offset-4 transition-all">
                                Sign In Now
                            </Link>
                        </motion.p>
                    </form>
                </Card>
            </motion.div>
        </div>
    )
}
