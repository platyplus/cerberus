const dest = process.env.NODE_ENV === 'development' ? 'src' : 'dist'
module.exports = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: false,
  entities: [`${__dirname}/${dest}/entity/**/*{.ts,.js}`],
  migrations: [__dirname + '/migration/**/*{.ts,.js}'],
  subscribers: [__dirname + '/subscriber/**/*{.ts,.js}']
}
