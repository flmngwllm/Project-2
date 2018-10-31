const Thread = require('../models/Thread')
const Posts = require('../models/Posts')



const threadController = {


    index: (req, res) => {
        Thread.find({}).populate('posts')
            .then((thread) => {
                res.render('thread', {
                    thread: thread

                })
            })
    },

    //create a new thread
    post: (req, res) => {
        Thread.create({
            title: req.body.title,
            author: req.body.author
        }).then(newThread => {
            res.redirect(`thread/${newThread._id}`)
        })

    },



    new: (req, res) => {
        res.render('thread/new')
    },


    show: (req, res) => {
        const threadId = req.params.threadId
        Thread.findById(threadId).populate('posts')
            .then((threads) => {
                console.log(threads)
                res.render('thread/show', {
                    thread: threads
                })
            })

    },

    update: (req, res) => {
        Thread.findByIdAndUpdate(req.params.id, req.body).then((updatedThread)=>{
            res.redirect(`thread/${req.params.id}`)
        })
    },

    delete: (req, res) => {
        Thread.findByIdAndRemove(req.params.id).then(() => {
            res.redirect(`thread/${thread._id}`)
        })
    }

}


module.exports = threadController