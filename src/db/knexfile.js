require('dotenv').config({ path: '../../.env'});

const { knexSnakeCaseMappers } = require('objection')

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      database: process.env.DBNAME,
      user:     process.env.DBUSER,
      password: process.env.DBPASS
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'migrations'
    },
    ...knexSnakeCaseMappers,
  },
};
