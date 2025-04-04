const express = require('express')
const adminroutes = require('./routes/admin.routes')
const app = express()


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/',adminroutes)
module.exports = app