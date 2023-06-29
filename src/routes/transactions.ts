import { FastifyInstance } from 'fastify'
import { z } from 'zod'
import { knex } from '../database'
import { randomUUID } from 'node:crypto'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/', async (_, reply) => {
    const transactions = await knex('transactions').select()

    return reply.status(200).send({ transactions })
  })

  app.get('/:id', async (request, reply) => {
    const getTransactionParamsSchema = z.object({
      id: z.string().uuid(),
    })

    const { id } = getTransactionParamsSchema.parse(request.params)
    const transaction = await knex('transactions').where('id', id).first()

    return reply.status(200).send({ transaction })
  })

  app.get('/summary', async (_, reply) => {
    const summary = await knex('transactions')
      .sum('amount', {
        as: 'amount',
      })
      .first()

    return reply.status(200).send({ summary })
  })

  app.post('/', async (request, reply) => {
    const createTransactionBodySchema = z.object({
      title: z.string(),
      amount: z.number(),
      type: z.enum(['credit', 'debit']),
    })

    const { type, amount, title } = createTransactionBodySchema.parse(
      request.body,
    )

    await knex('transactions').insert({
      id: randomUUID(),
      title,
      amount: type === 'credit' ? amount : amount * -1,
    })

    return reply.status(201).send()
  })
}
