const { readdir } = require('fs').promises

const controllerFolderRegex = /^0003:054C:09CC.\d{4}:\w{3,6}$/
const controllerRegex = /^0003:054C:09CC.\d{4}$/

function getControllerId(controllerFolder = '') {
  const colorColon = controllerFolder.lastIndexOf(':')

  return controllerFolder.substring(0, colorColon)
}

async function getControllers() {
  const controllersMap = {}
  const folders = await readdir('/sys/class/leds')

  folders.filter(isControllerFolder).map(getControllerId).forEach((controller) => {
    controllersMap[controller] = true
  })

  return Object.keys(controllersMap)
}

function isControllerFolder(string = '') {
  return controllerFolderRegex.test(string)
}

function isController(string = '') {
  return controllerRegex.test(string)
}

module.exports = { getControllers, isController }
