const Thread = require('../models/Thread')
const Posts = require('../models/Posts')



const threadController = {

post: (req, res) => {
   new Thread({
        title: req.body.title,
        author: req.body.author 
    }).save()

},

list: (req, res) => {
    Thread.find().then((threads) =>{
        res.send(threads)
    })
},

show: (req, res) => {
    Thread.findOne(
        {title: req.params.title} , function(error, thread) {
            const posts = Posts.find({thread: thread._id}, function(error, posts){
                res.send([{thread: thread, posts:posts}])
            })
        })
}

}


module.exports = threadController