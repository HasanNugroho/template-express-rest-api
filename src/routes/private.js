const express = require('express')
const router = express.Router()
const autoload = require('auto-load');
const path = require('path')

const ctrl = autoload(path.join(APPS.SERVERPATH, './controllers'));

router.get('/user', ctrl.user.getUser)

module.exports = router;