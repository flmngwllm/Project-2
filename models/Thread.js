const mongoose = require('../db/connection')
const Schema = mongoose.Schema


const Thread = new Schema({
    title: String,
    postDate: {type: Date, default: Date.now},
    author: {type: String
    },

    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Posts'
    }
]
})



module.exports = mongoose.model('Thread', Thread)