const Contacts = require('../models/Contacts')

module.exports = {
    getContacts: async(req, res) =>{
        try{
            const findContact = await Contacts.find()
            res.render('contact.ejs', {contact: findContact})
        }catch (err){
            console.log(err)
        }
    }
}