import { createEnv } from '@t3-oss/env-nextjs'
import { z } from 'zod'

export const env = createEnv({
  server: {
    APP_URL: z.url({ error: 'APP_URL must be a valid url' }),
  },
  client: {
    NEXT_PUBLIC_API_BASE_URL: z.url({
      error: 'NEXT_PUBLIC_API_BASE_URL must be a valid url',
    }),
  },

  experimental__runtimeEnv: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
})
