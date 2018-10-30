const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Tournaments = new Schema({
    name: String,
    location: String,
    date: String,
    description: String,
    games: String,

})



module.exports = mongoose.model('Tournaments', Tournaments)