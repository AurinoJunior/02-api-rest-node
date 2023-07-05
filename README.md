<div align="center">
   <h3>API REST com NodeJs</h3>
</div>

<p align="center">
   <a href="https://www.instagram.com/aurigod97/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-aurigod97-0390fc?style=flat&logo=Instagram&logoColor=white&color=blue" />
   </a>
    <a href="https://www.linkedin.com/in/aurino-junior-7718a4158/">
      <img alt="Aurino Junior" src="https://img.shields.io/badge/-Aurino%20Junior-0390fc?style=flat&logo=Linkedin&logoColor=white&color=blue" />
   </a>
</p>

📍 **Conteúdo**

- [Contexto](#blue_book-contexto)
- [Tecnologias](#computer-tecnologias)
- [Iniciando o projeto](#video_game-iniciando-o-projeto)
- [Como usar](#beers-como-usar)
- [Licença](#page_with_curl-licença)

## :blue_book: Contexto

Segundo projeto do bootcamp ignite nodejs da Rocketseat 🚀🚀

## :computer: Tecnologias

- node
- Typescript
- tsup
- Fastify
- knex
- zod
- sqlite3
- vitest
- supertest
- eslint

## :video_game: Iniciando o projeto

1. Clonar o repositório com git
2. Instalar todas as dependencias com `yarn`
3. Criar um arquivo `.env` com base no `.env.example`
4. Rodar as migrations com `yarn knex migrate:latest`
5. E por fim rodar o projeto com `yarn dev`

> para rodar os testes uso um arquivo de variaveis de ambiente diferente `.env.test`

## :beers: Como usar

Para criar uma transação

```bash
curl --request POST \
  --url http://localhost:3333/transactions \
  --header 'Content-Type: application/json' \
  --data '{
	"title": "freela",
	"amount": 500,
	"type": "credit"
}'
```

Listar todas as transações

```bash
curl --request GET \
  --url http://localhost:3333/transactions \
  --cookie sessionId=uuid
```

Listar 1 transação

```bash
curl --request GET \
  --url http://localhost:3333/transactions/uuid \
  --cookie sessionId=uuid
```

Resumo total

```bash
curl --request GET \
  --url http://localhost:3333/transactions/summary \
  --cookie sessionId=uuid
```

## Requisitos funcionais

- [x] O usuario deve poder criar uma nova transação;
- [x] O usuario deve poder obter um resumo da sua conta;
- [x] O usuario deve poder listar todas transações que já ocorreram;
- [x] O usuario deve poder visualizar uma transação única;

## Requisitos de negocio

- [x] A transação pode ser do tipo crédito que somará ao valor total, ou débito que subtrairá;
- [x] Deve ser possivel identificarmos o usuário entre as requisições;
- [x] O usuário só pode visualizar transações o qual ele criou;

## :page_with_curl: Licença

MIT
