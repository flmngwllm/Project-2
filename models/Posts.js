const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Posts = new Schema({
    thread: {
        type: Schema.Types.ObjectId,
        ref: 'Thread'
      },
    date: {type: Date, default: Date.now},
    author: {type: String, default: 'Anon' 
    },
    post: String
})



module.exports = mongoose.model('Posts', Posts)