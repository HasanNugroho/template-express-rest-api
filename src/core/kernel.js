const dbSetup = require('./db-setup.js')
const server = require('./server.js')
module.exports = {
    async init() {
        APPS.logger.info('================================')
        APPS.logger.info(APPS.config.name)
        APPS.logger.info('================================')
        APPS.logger.info('Initializing...')


        try {
            dbSetup();
        } catch (err) {
            APPS.logger.error('Database Initialization Error: ' + err.message)
            if (APPS.IS_DEBUG) {
              APPS.logger.error(err)
            }
            process.exit(1)
        }

        server.init();
    }
}