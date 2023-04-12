const express = require('express')
const router = express.Router()
const callController = require('../controller/call')


router.get('/', callController.getCall)

module.exports = router