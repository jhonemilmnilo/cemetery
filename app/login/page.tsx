import LoginView from '@/components/views/LoginView'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login | Eternal Care',
    description: 'Sign in to your Eternal Care account.',
}

export default function LoginPage() {
    return <LoginView />
}
