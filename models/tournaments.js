const mongoose = require('../db/connection')

const Tournaments = mongoose.Schema({
    name: String,
    location: String,
    description: String

})



module.exports = mongoose.model('Tournaments', Tournaments)