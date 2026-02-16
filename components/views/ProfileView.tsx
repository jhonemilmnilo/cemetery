"use client"

import { useEffect, useState } from 'react'
import { authRepository } from '@/repositories/authRepository'
import { motion } from 'framer-motion'
import { User, Mail, Calendar, Shield, LogOut, Loader2, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/Button'

export default function ProfileView() {
    const [user, setUser] = useState<any>(null)
    const [loading, setLoading] = useState(true)
    const router = useRouter()

    useEffect(() => {
        async function loadUser() {
            const currentUser = await authRepository.getUser()
            if (!currentUser) {
                router.push('/login')
            } else {
                setUser(currentUser)
            }
            setLoading(false)
        }
        loadUser()
    }, [router])

    const handleSignOut = async () => {
        await authRepository.signOut()
        router.push('/')
    }

    if (loading) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
        )
    }

    if (!user) return null

    return (
        <div className="min-h-screen bg-zinc-50 dark:bg-black p-6 md:p-12">
            <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground mb-8 transition-colors"
            >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mx-auto max-w-2xl"
            >
                <div className="rounded-3xl border border-border bg-white p-8 shadow-sm dark:bg-zinc-900 md:p-12">
                    <div className="flex flex-col items-center md:flex-row md:items-start md:gap-8">
                        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-zinc-100 dark:bg-zinc-800">
                            <User className="h-12 w-12 text-zinc-400" />
                        </div>
                        <div className="mt-6 flex-1 text-center md:mt-0 md:text-left">
                            <h1 className="text-3xl font-bold tracking-tight">
                                {user.user_metadata?.first_name} {user.user_metadata?.last_name}
                            </h1>
                            <p className="text-muted-foreground">{user.email}</p>

                            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-zinc-50/50 p-4 dark:bg-zinc-800/50">
                                    <Mail className="h-5 w-5 text-zinc-400" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Email</p>
                                        <p className="text-sm font-medium">{user.email}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 rounded-2xl border border-border/50 bg-zinc-50/50 p-4 dark:bg-zinc-800/50">
                                    <Calendar className="h-5 w-5 text-zinc-400" />
                                    <div className="text-left">
                                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Joined</p>
                                        <p className="text-sm font-medium">{new Date(user.created_at).toLocaleDateString()}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                                <Button variant="outline" className="gap-2">
                                    Edit Profile
                                </Button>
                                <Button
                                    variant="ghost"
                                    className="gap-2 text-red-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30"
                                    onClick={handleSignOut}
                                >
                                    <LogOut className="h-4 w-4" />
                                    Sign Out
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex items-center gap-3 rounded-2xl bg-zinc-100/50 p-4 dark:bg-zinc-900/50">
                    <Shield className="h-5 w-5 text-emerald-500" />
                    <p className="text-sm text-muted-foreground">
                        Your account is protected by Supabase Advanced Security.
                    </p>
                </div>
            </motion.div>
        </div>
    )
}
