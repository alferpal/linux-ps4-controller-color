#!/usr/bin/env node

const { hideBin } = require('yargs/helpers')
const yargs = require('yargs/yargs')

const commands = require('./bin')

// eslint-disable-next-line no-unused-expressions
yargs(hideBin(process.argv))
  .usage('Usage: $0 <command> [options]')
  .command({
    command: 'list',
    desc: 'Lists controller',
    handler: commands.listControllers,
  })
  .command({
    command: 'random-color [handler]',
    desc: 'Set a random color for a handler. If not specified, will target the first handler',
    handler: commands.randomColor,
  })
  .command({
    command: 'random-interval <time> [handler]',
    desc: 'Set a random color for a handler every . If not specified, will target the first handler',
    handler: commands.randomInterval,
  })
  .command({
    command: 'set-color <color> [handler]',
    desc: 'Set color for a handler. If not specified, will target the first handler',
    handler: commands.setColor,
  })
  .demandCommand(1)
  .help('h')
  .alias('h', 'help')
  .argv
