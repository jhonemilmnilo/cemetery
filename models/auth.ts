export interface RegisterData {
    email: string
    password: string
    firstName: string
    lastName: string
    middleName?: string
}

export interface LoginData {
    email: string
    password: string
}

export interface AuthResponse {
    success: boolean
    message: string
    error?: any
}
