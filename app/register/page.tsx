import RegisterView from '@/components/views/RegisterView'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Register | Eternal Care',
    description: 'Join Eternal Care and start preserving your family legacy.',
}

export default function RegisterPage() {
    return <RegisterView />
}
