import ProfileView from '@/components/views/ProfileView'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Your Profile | Eternal Care',
    description: 'Manage your Eternal Care profile.',
}

export default function ProfilePage() {
    return <ProfileView />
}
