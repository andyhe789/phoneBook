const mongoose = require('mongoose')

const ContactsSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    number:{
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('Contacts', ContactsSchema)