const path = require('path')

let APPS = {
    IS_DEBUG: process.env.NODE_ENV === 'development',
    SERVERPATH: path.join(process.cwd(), 'src'),
    ROOTPATH: process.cwd(),
    config: require('./core/config'),
    kernel: require('./core/kernel'),
};

global.APPS = APPS;

APPS.logger = require('./core/logger').init('MASTER');

APPS.kernel.init()