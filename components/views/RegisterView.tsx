"use client"

import { motion } from 'framer-motion'
import { Cloud, ArrowLeft, Mail, Lock, User, ShieldCheck } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { useAuthController } from '@/controllers/authController'

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
                className="w-full max-w-md my-12"
            >
                <div className="flex flex-col items-center text-center">
                    <motion.div
                        initial={{ y: -20 }}
                        animate={{ y: 0 }}
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-foreground text-background"
                    >
                        <Cloud className="h-7 w-7" />
                    </motion.div>
                    <h1 className="mt-6 text-3xl font-extrabold tracking-tight">Create an Account</h1>
                    <p className="mt-2 text-muted-foreground">Start preserving your family legacy today.</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-10 space-y-5">
                    <div className="grid grid-cols-2 gap-4">
                        <Input
                            label="First Name"
                            placeholder="John"
                            required
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                        />
                        <Input
                            label="Last Name"
                            placeholder="Doe"
                            required
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                        />
                    </div>

                    <Input
                        label="Middle Name (Optional)"
                        placeholder="Quincy"
                        value={formData.middleName}
                        onChange={(e) => setFormData({ ...formData, middleName: e.target.value })}
                    />

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

                    <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
                        <ShieldCheck className="h-4 w-4 text-emerald-500" />
                        Your data is encrypted and stored securely.
                    </div>

                    <Button
                        className="w-full py-6 text-base"
                        isLoading={isLoading}
                        type="submit"
                    >
                        Create Account
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

                    <p className="text-center text-sm text-muted-foreground pb-8">
                        Already have an account?{' '}
                        <Link href="/login" className="font-semibold text-foreground hover:underline">
                            Sign In
                        </Link>
                    </p>
                </form>
            </motion.div>
        </div>
    )
}
