const { writeFile } = require('fs').promises
const hexToRGB = require('hex-rgb')

const { commons: { getDevice, rootOrThrow }, logger } = require('../lib')

async function setColor({ color = '', handler = '' }) {
  try {
    rootOrThrow()

    const device = await getDevice(handler)

    const { blue, green, red } = hexToRGB(color)

    await Promise.all(Object.entries({ blue, green, red }).map(([key, value]) => writeFile(`/sys/class/leds/${device}:${key}/brightness`, `${value}`, { encoding: 'ascii', mode: 0o644 })))
  } catch (error) {
    logger.error(new Error(error.message), 'Error setting controller color')

    process.exit(1)
  }
}

module.exports = setColor
