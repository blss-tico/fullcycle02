'use strict'

const server = require('./src/app')({
  logger: {
    level: 'info',
    transport: {
      target: 'pino-pretty'	
    }
  }
})

server.listen({ port: 3000, host: '0.0.0.0' }, (err, address) => {
  if (err) {
    server.log.error(err)
    process(1)
  }

  console.log(`Server running...`)
})

process.on('SIGINT', () => { process.exit(1) })
