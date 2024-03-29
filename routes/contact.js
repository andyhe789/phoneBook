const express = require('express')
const router = express.Router()
const contactController = require('../controller/contact')


router.get('/', contactController.getContacts)
router.delete('/deleteContact', contactController.deleteContact)
router.put('/putNav', contactController.putNav)
router.put('/putNavHide', contactController.putNavHide)


module.exports = router 