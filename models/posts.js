const mongoose = require('../db/connection')
const ObjectId = Schema.ObjectId


const Posts = mongoose.Schema({
    thread: {
        type: Schema.Types.ObjectId,
        ref: 'Thread'
      },
    date: {type: Date, default: Date.now},
    description: String,
    author: {type: String, default: 'Anon' 
    },
    post: String
})



module.exports = mongoose.model('Posts', Posts)