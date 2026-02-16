"use client"

import { motion } from 'framer-motion'
import { Cloud, ArrowLeft, Mail, Lock, LogIn, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import { useAuthController } from '@/controllers/authController'
import { useRouter } from 'next/navigation'

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

export default function LoginView() {
    const { login, isLoading, response } = useAuthController()
    const router = useRouter()
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        const result = await login(formData)
        if (result.success) {
            setTimeout(() => {
                router.push('/')
            }, 1500)
        }
    }

    return (
        <div className="relative flex min-h-screen items-center justify-center bg-zinc-50 px-6 selection:bg-zinc-200 dark:bg-black dark:selection:bg-zinc-800 overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        x: [0, 50, 0],
                        y: [0, 30, 0]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-emerald-500/10 blur-[100px] dark:bg-emerald-500/20"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        rotate: [0, -90, 0],
                        x: [0, -50, 0],
                        y: [0, -30, 0]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute bottom-[-10%] left-[-10%] h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[100px] dark:bg-blue-500/20"
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
                className="w-full max-w-md relative z-10"
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
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles className="h-4 w-4 text-amber-500" />
                            </motion.div>
                        </motion.div>

                        <motion.h1 variants={fadeIn} className="mt-8 text-4xl font-extrabold tracking-tight">
                            Welcome Back
                        </motion.h1>
                        <motion.p variants={fadeIn} className="mt-3 text-base font-medium text-muted-foreground">
                            Sign in to continue preserving your family legacy.
                        </motion.p>
                    </div>

                    <form onSubmit={handleSubmit} className="mt-12 space-y-6">
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
                            <div className="mt-2 flex items-center justify-end">
                                <Link href="#" className="text-xs font-bold text-muted-foreground hover:text-foreground hover:underline transition-colors uppercase tracking-widest">
                                    Forgot password?
                                </Link>
                            </div>
                        </motion.div>

                        <motion.div variants={fadeIn}>
                            <Button
                                className="w-full h-14 text-base font-bold shadow-lg"
                                isLoading={isLoading}
                                type="submit"
                            >
                                Sign In to Account
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
                            Don't have an account?{' '}
                            <Link href="/register" className="font-extrabold text-foreground hover:underline underline-offset-4">
                                Create one for free
                            </Link>
                        </motion.p>
                    </form>
                </Card>
            </motion.div>
        </div>
    )
}
