const express = require('express')
const router = express.Router()
const contactController = require('../controller/contact')

router.get('/', contactController.getContacts)

module.exports = router 