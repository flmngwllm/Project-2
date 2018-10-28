const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Thread = new Schema({
    title: String,
    postDate: {type: Date, default: Date.now},
    author: {type: String,
    },
})



module.exports = mongoose.model('Thread', Thread)