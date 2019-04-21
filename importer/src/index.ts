import chokidar from 'chokidar'

const DATA_PATH = process.env.DATA_PATH || '/data'
const log = console.log.bind(console)

const watcher = chokidar.watch('/data', {
  ignored: /(^|[\/\\])\../,
  persistent: true
})

watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`))

console.log('Application is up and running')
