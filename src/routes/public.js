const express = require('express')
const router = express.Router()
const autoload = require('auto-load');
const path = require('path')

const ctrl = autoload(path.join(APPS.SERVERPATH, './controllers'));

router.get('/', (req, res) => {
    res.status(200).send('ok')
})

module.exports = router;