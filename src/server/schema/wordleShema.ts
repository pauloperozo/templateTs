import { z } from 'zod'

export const wordleSchema = z.object({
    user_word : z.string().min(1).max(5)
})

 