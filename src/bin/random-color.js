
const chance = require('chance').Chance()

const { commons: { getDevice, rootOrThrow }, logger } = require('../lib')
const setColor = require('./set-color')

async function randomColor({ handler = '' }) {
  try {
    rootOrThrow()

    const device = await getDevice(handler)

    const color = chance.color({ format: 'hex' })

    await setColor({ color, handler: device })
  } catch (error) {
    logger.error(new Error(error.message), 'Error setting random controller color')

    process.exit(1)
  }
}

module.exports = randomColor
