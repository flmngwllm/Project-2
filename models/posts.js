const mongoose = require('../db/connection')

const Posts = mongoose.Schema({
    thread: ,
    date: {type: Date, default: Date.now},
    description: String,
    author: {type: String, default: 'Anon' 
    },
    post: String
})



module.exports = mongoose.model('Posts', Posts)