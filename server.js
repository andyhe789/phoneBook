const express = require('express')
const app = express()
const homeRoutes = require('./routes/home')
const contactRoutes = require('./routes/contact')
const callRoutes = require('./routes/call')

const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())

connectDB()

app.use('/', homeRoutes)
app.use('/contact', contactRoutes)
app.use('/call', callRoutes)



app.listen(process.env.PORT, ()=>{
    console.log(`Server is running in ${process.env.PORT}`)
})