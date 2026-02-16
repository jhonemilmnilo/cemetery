"use client"

import { motion } from 'framer-motion'
import { Cloud, ArrowLeft, Mail, Lock, LogIn } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuthController } from '@/controllers/authController'
import { useRouter } from 'next/navigation'

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
        <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-6 selection:bg-zinc-200 dark:bg-black dark:selection:bg-zinc-800">
            <Link
                href="/"
                className="fixed top-8 left-8 flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-md"
            >
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background"
                    >
                        <Cloud className="h-7 w-7" />
                    </motion.div>
                    <h1 className="mt-6 text-3xl font-extrabold tracking-tight">Welcome Back</h1>
                    <p className="mt-2 text-muted-foreground">Sign in to continue preserving your legacy.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                    <Input
                        label="Email Address"
                        type="email"
                        placeholder="john@example.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />

                    <Input
                        label="Password"
                        type="password"
                        placeholder="••••••••"
                        required
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    />

                    <div className="flex items-center justify-end">
                        <Link href="#" className="text-sm font-medium text-muted-foreground hover:text-foreground hover:underline">
                            Forgot password?
                        </Link>
                    </div>

                    <Button
                        className="w-full py-6 text-base"
                        isLoading={isLoading}
                        type="submit"
                    >
                        Sign In
                    </Button>

                    {response && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`rounded-xl border p-4 text-sm ${response.success
                                ? 'border-emerald-500/20 bg-emerald-500/5 text-emerald-600 dark:text-emerald-400'
                                : 'border-red-500/20 bg-red-500/5 text-red-600 dark:text-red-400'
                                }`}
                        >
                            {response.message}
                        </motion.div>
                    )}

                    <p className="text-center text-sm text-muted-foreground">
                        Don't have an account?{' '}
                        <Link href="/register" className="font-semibold text-foreground hover:underline">
                            Create one
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    )
}
