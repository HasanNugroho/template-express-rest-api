const express = require('express');
const autoload = require('auto-load');
const path = require('path')

module.exports = {
    init() {
        const mw = autoload(path.join(APPS.SERVERPATH, './middlewares'));
        const routes = autoload(path.join(APPS.SERVERPATH, './routes'));

        const app = express();
        app.use(routes.public);
        app.use(mw.security);
        app.use(routes.private);

        app.listen(APPS.config.PORT, () => {
            APPS.logger.info(`server running on port ${APPS.config.PORT}`);
        })
    }
}
