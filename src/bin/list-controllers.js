const { controllers: { getControllers }, logger } = require('../lib')

async function listControllers() {
  try {
    const controllers = await getControllers()

    logger.info(controllers, 'List of found controllers')
  } catch (error) {
    logger.error(new Error(error.message), 'Error getting list of controllers')

    process.exit(1)
  }
}

module.exports = listControllers
