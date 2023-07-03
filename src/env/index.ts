import { config } from 'dotenv'
import 'dotenv/config'
import { z } from 'zod'

if (process.env.NODE_ENV === 'test') {
  console.log(process.env.NODE_ENV)
  config({ path: '.env.test', override: true })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.string().default('3333'),
})

const _env = envSchema.safeParse(process.env)

if (!_env.success) {
  console.error('🚨 Invalid enviroment variables', _env.error.format())
  throw new Error()
}

export const env = _env.data
