const { setIntervalAsync } = require('set-interval-async/dynamic')

const { commons: { getDevice, rootOrThrow }, logger } = require('../lib')
const randomColor = require('./random-color')

async function randomInterval({ time = 0, handler = '' }) {
  try {
    rootOrThrow()

    const device = await getDevice(handler)

    await randomColor(device)

    setIntervalAsync(randomColor, time * 1000, { handler: device })
  } catch (error) {
    logger.error(new Error(error.message), 'Error setting random periodic controller color')

    process.exit(1)
  }
}

module.exports = randomInterval
