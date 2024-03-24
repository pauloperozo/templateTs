import { z } from 'zod'

export const signupSchema = z.object({
    email : z.string().min(1).email(),
    password : z.string().min(1)
})

export const signinSchema = z.object({
    email : z.string().min(1).email(),
    password : z.string().min(1)
})
