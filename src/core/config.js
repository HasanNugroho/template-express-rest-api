// config.js

require('dotenv').config();

const defaultConfig = {
  name: process.env.name || 'apps express',
  PORT: process.env.PORT || 3000,
  DBNAME: process.env.DBNAME,
  DBUSER: process.env.DBUSER,
  DBPASS: process.env.DBPASS,
  logFormat: process.env.logFormat || 'default',
  logLevel: process.env.logLevel || 'info'
};

module.exports = defaultConfig;
