const pino = require('pino')

const logger = pino({
  prettyPrint: {
    colorize: true,
    translateTime: true,
  },
}, pino.destination())

module.exports = logger
