const mongoose = require('../db/connection')
const ObjectId = Schema.ObjectId


const Tournaments = mongoose.Schema({
    name: String,
    location: String,
    description: String,
    thread: ObjectId

})



module.exports = mongoose.model('Tournaments', Tournaments)