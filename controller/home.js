const Contacts = require('../models/Contacts')


module.exports = {
    getIndex: (req, res) =>{
        res.render('index.ejs')
    },
    createContact: async (req, res)=>{
        try{
            await Contacts.create({name: req.body.contactName, number: req.body.contactNumber})
            console.log('User has been created!!!!')
            res.redirect('/')
        }catch(err){
            console.log(err)
        }
    }
}
