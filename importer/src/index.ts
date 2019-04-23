import 'reflect-metadata'
import chokidar from 'chokidar'
import { createConnection } from 'typeorm'
import { resolve } from 'path'

const DATA_PATH = resolve(process.env.DATA_PATH || '/data')
const log = console.log.bind(console)

createConnection()
  .then(async connection => {
    const watcher = chokidar.watch(DATA_PATH, {
      ignored: /(^|[\/\\])\../,
      persistent: true
    })
    watcher
      .on('add', path => log(`File ${path} has been added`))
      .on('change', path => log(`File ${path} has been changed`))
      .on('unlink', path => log(`File ${path} has been removed`))

    log('Application is up and running')
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
  })
  .catch(error => log(error))
