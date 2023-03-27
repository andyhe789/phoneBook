const express = require('express')
const router = express.Router()
const homeController = require('../controller/home')
const contactController = require('../controller/contact')

router.get('/', homeController.getIndex)

router.post('/createContact', homeController.createContact)

router.get('/getController', contactController.getContacts)




module.exports = router