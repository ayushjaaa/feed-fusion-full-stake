const express = require('express')
const { admincontoller } = require('../controller/admicontoller')
const adminroutes = express.Router()


adminroutes.post('/register',admincontoller.admincontoller)

module.exports = adminroutes