import fastify from 'fastify'
import { knex } from './database'
import { env } from './env'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await knex('transactions').select('*')

  return transaction
})

app
  .listen({
    port: Number(env.PORT),
  })
  .then(() => {
    console.log('HTTP Server Running!')
  })
