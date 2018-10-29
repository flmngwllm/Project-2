const Thread = require('../models/Thread')
const Posts = require('../models/Posts')



const threadController = {


//create a new thread
post: (req, res) => {
   Thread.create({
        title: req.body.title,
        author: req.body.author 
    }).then(newThread => {
        res.redirect(`/${newThread._id}`)
    })

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