import chokidar from 'chokidar'
import 'reflect-metadata'
import { createConnection } from 'typeorm'

const DATA_PATH = process.env.DATA_PATH || '/data'
const log = console.log.bind(console)

const watcher = chokidar.watch(DATA_PATH, {
  ignored: /(^|[\/\\])\../,
  persistent: true
})

watcher
  .on('add', path => log(`File ${path} has been added`))
  .on('change', path => log(`File ${path} has been changed`))
  .on('unlink', path => log(`File ${path} has been removed`))

console.log('Application is up and running')

createConnection()
  .then(async connection => {
    // console.log('Inserting a new user into the database...')
    // const user = new User()
    // user.firstName = 'Timber'
    // user.lastName = 'Saw'
    // user.age = 25
    // await connection.manager.save(user)
    // console.log('Saved a new user with id: ' + user.id)

    // console.log('Loading users from the database...')
    // const users = await connection.manager.find(User)
    // console.log('Loaded users: ', users)

    log('Here you can setup and run express/koa/any other framework.')
  })
  .catch(error => log(error))
