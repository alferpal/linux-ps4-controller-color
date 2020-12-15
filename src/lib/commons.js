const { getControllers } = require('./controllers')

async function getDevice(handler = '') {
  const controllers = await getControllers()

  if (!controllers.length) {
    throw new Error('Error: no controllers found')
  }

  if (handler) {
    const isInControllers = controllers.includes(handler)

    if (!isInControllers) {
      throw new Error(`Error: Controller ${handler} not found in controllers list ${controllers.join(', ')}`)
    }
  }

  const device = handler || controllers.shift()

  return device
}

function rootOrThrow() {
  const isRoot = process.getuid() === 0

  if (!isRoot) {
    throw new Error('Error: needs to be run as sudo or with root')
  }
}

module.exports = { getDevice, rootOrThrow }
