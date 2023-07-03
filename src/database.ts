import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

const connection =
  env.DATABASE_CLIENT === 'sqlite'
    ? {
        filename: env.DATABASE_URL,
      }
    : env.DATABASE_URL

export const configDatabase: Knex.Config = {
  client: env.DATABASE_CLIENT,
  connection,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(configDatabase)
