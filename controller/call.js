const Contacts = require('../models/Contacts')

module.exports = {
    getCall: (req, res) =>{
        res.render('call.ejs')
    },
}