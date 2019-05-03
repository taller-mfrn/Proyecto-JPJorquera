const fs = require("fs");
const fastify = require('fastify')();

fastify.register(require('fastify-mysql'), {
  promise: true,
  connectionString: 'mysql://root@localhost/world'
})

fastify.get('/', (request, reply) => {
    reply.send({ hello: 'world' })
  })

fastify.get('/world/:id', async (req, reply) => {
    console.log(req.params);
    const connection = await fastify.mysql.getConnection()
    const [rows, fields] = await connection.query(
        `SELECT id, name, CountryCode FROM world.city WHERE id=${req.params.id}`
  )
  connection.release()
  return rows[0]
})

fastify.get('/world/', async (req, reply) => {
    const connection = await fastify.mysql.getConnection()
    const [rows, fields] = await connection.query(
        `SELECT * FROM world.city LIMIT 20`
  )
  connection.release()
  return rows
})

fastify.listen(3000, err => {
  if (err) throw err
  console.log(`server listening on ${fastify.server.address().port}`)
})