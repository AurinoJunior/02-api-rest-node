import { knex as setupKnex, Knex } from 'knex'
import { env } from './env'

export const configDatabase: Knex.Config = {
  client: 'sqlite',
  connection: {
    filename: env.DATABASE_URL,
  },
  useNullAsDefault: true,
  migrations: {
    extension: 'ts',
    directory: './db/migrations',
  },
}

export const knex = setupKnex(configDatabase)
