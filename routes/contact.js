const express = require('express')
const router = express.Router()
const contactController = require('../controller/contact')

router.get('/', contactController.getContacts)
router.delete('/deleteContact', contactController.deleteContact)

module.exports = router 