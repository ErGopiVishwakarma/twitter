const mongoose = require('mongoose')

const connection = mongoose.connect('mongodb+srv://gopi:gopialpha@cluster0.ge7c9ga.mongodb.net/Twitter?retryWrites=true&w=majority')

module.exports = connection