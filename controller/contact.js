const Contacts = require('../models/Contacts')

module.exports = {
    getContacts: async(req, res) =>{
        try{
            const findContact = await Contacts.find()
            res.render('contact.ejs', {contact: findContact})
        }catch (err){
            console.log(err)
        }
    },
    deleteContact: async (req, res) =>{
        console.log(req.body.contactIdFromJSFile)
        console.log(req.body.toggleStatusFromJSFile)
        try{
            await Contacts.findOneAndDelete({_id: req.body.contactIdFromJSFile})
            console.log('User Deleted')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    },
    putNav: async(req, res) =>{
        console.log(req.body.contactIdFromJSFile)
        try{
            await Contacts.findOneAndUpdate({_id: req.body.contactIdFromJSFile},{
                toggle: true
            })
            console.log('Toggle True')
            res.json('Toggle True')
        }catch(err){
            console.log(err)
        }
    },

    putNavHide: async(req, res) =>{
        console.log(req.body.contactIdFromJSFile)
        try{
            await Contacts.findOneAndUpdate({_id: req.body.contactIdFromJSFile},{
                toggle: false
            })
            console.log('Toggle False')
            res.json('Toggle False')
        }catch(err){
            console.log(err)
        }
    }
}