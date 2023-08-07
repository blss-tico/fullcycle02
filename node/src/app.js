// Author: blss-tico (github.com/blss-tico)

'use strict'

const fastify = require('fastify')

function build(opts={}) {
  const app = fastify(opts)

  // plugins
  app.register(require('@fastify/mysql'), {
    promise: true,
    host: 'fc_mysql',
    port: 3306,
    user: 'root',
    database: 'fullcycle',
    password: 'fullcycledb',
  })

  // route / 
  app.get('/', async (request, reply) => {
	let namesArr = ['Joao', 'Maria', 'Joaquim', 'Manoela', 'Jose', 'Miriam', 'Manoel', 'Josefina']
	let familyArr = ['Santos', 'Silva', 'Souza', 'Oliveira', 'Machado', 'Costa', 'Dutra', 'Rocha']
	let namesPos = Math.floor(Math.random() * (8-0) + 0)
	let familyPos = Math.floor(Math.random() * (8-0) + 0) 
	let name = namesArr[namesPos] + ' ' + familyArr[familyPos]

	const connection = await app.mysql.getConnection()

	const [rowsInsert, fieldsInsert] = await connection.query(
	  'INSERT INTO fullcycle.users (name) VALUES (?);', [name]
	)
	  
	const [rowsSelect, fieldsSelect] = await connection.query(
	  'SELECT u.id, u.name FROM fullcycle.users u;', []
	)
	
	connection.release()

	reply.type('text/html')
	let h1 = '<h1>FullCycle Rocks!!!</h1>'
	let listBegin = '<ul>'
	let listEnd = '</ul>'
	let listItem = ''
	
	rowsSelect.forEach(row => {
	  listItem += `<li>${row.name}</li>`
	})

	let response = h1 + listBegin + listItem + listEnd
	reply.send(response)
  })

  return app
}

module.exports = build
