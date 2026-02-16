import { useState } from 'react'
import { authRepository } from '@/repositories/authRepository'
import { RegisterData, LoginData, AuthResponse } from '@/models/auth'

export function useAuthController() {
    const [isLoading, setIsLoading] = useState(false)
    const [response, setResponse] = useState<AuthResponse | null>(null)

    const register = async (formData: RegisterData) => {
        setIsLoading(true)
        setResponse(null)

        try {
            const result = await authRepository.signUp(formData)
            setResponse(result)
            return result
        } catch (error: any) {
            const errorMsg = {
                success: false,
                message: error.message || 'An unexpected error occurred.',
                error
            }
            setResponse(errorMsg)
            return errorMsg
        } finally {
            setIsLoading(false)
        }
    }

    const login = async (formData: LoginData) => {
        setIsLoading(true)
        setResponse(null)

        try {
            const result = await authRepository.signIn(formData)
            setResponse(result)
            return result
        } catch (error: any) {
            const errorMsg = {
                success: false,
                message: error.message || 'An unexpected error occurred.',
                error
            }
            setResponse(errorMsg)
            return errorMsg
        } finally {
            setIsLoading(false)
        }
    }

    return {
        register,
        login,
        isLoading,
        response
    }
}
