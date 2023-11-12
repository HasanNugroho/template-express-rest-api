const knex = require('knex');
const { Model } = require('objection');
const { knexSnakeCaseMappers } = require('objection')


async function setupDb() {
    const db = knex({
        client: 'mysql',
        connection: {
            database: APPS.config.DBNAME,
            user:     APPS.config.DBUSER,
            password: APPS.config.DBPASS
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            tableName: 'migrations'
        },
        ...knexSnakeCaseMappers,
    });
    try {
        await db.raw('SELECT 1');
        APPS.logger.info('Database connection [OK]');
    } catch (error) {
        APPS.logger.error('Error connecting to the database:', error.message);
        throw error; 
    }
    Model.knex(db);
}

module.exports = setupDb