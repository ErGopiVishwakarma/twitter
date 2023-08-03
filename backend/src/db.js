const mongoose = require('mongoose')

const connection = mongoose.connect(`${process.env.DATABASE}`)

module.exports = connection