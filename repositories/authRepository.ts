import { supabase } from './clients/supabase'
import { RegisterData, LoginData, AuthResponse } from '@/models/auth'

export const authRepository = {
    async signUp(data: RegisterData): Promise<AuthResponse> {
        const { email, password, firstName, lastName, middleName } = data

        const { data: authData, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                data: {
                    first_name: firstName,
                    last_name: lastName,
                    middle_name: middleName,
                },
            },
        })

        if (error) {
            return {
                success: false,
                message: error.message,
                error,
            }
        }

        return {
            success: true,
            message: 'Registration successful! Please check your email for verification.',
        }
    },

    async signIn(data: LoginData): Promise<AuthResponse> {
        const { email, password } = data

        const { data: authData, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })

        if (error) {
            return {
                success: false,
                message: error.message,
                error,
            }
        }

        return {
            success: true,
            message: 'Login successful! Redirecting...',
        }
    },

    async signOut() {
        return await supabase.auth.signOut()
    },

    async getSession() {
        return await supabase.auth.getSession()
    },

    async getUser() {
        const { data: { user } } = await supabase.auth.getUser()
        return user
    }
}
