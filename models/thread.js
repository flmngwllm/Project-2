const mongoose = require('../db/connection')

const Thread = mongoose.Schema({
    Title: String,
    postDate: {type: Date, default: Date.now},
    author: {type: String,
    },
})



module.exports = mongoose.model('Thread', Thread)