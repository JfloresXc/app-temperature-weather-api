const express = require('express')
const path = require('path')
const app = express()

//Settings
app.set('port', process.env.PORT || 5555)


//Static files
app.use(express.static(path.join(__dirname, '../dist')))

module.exports = app

