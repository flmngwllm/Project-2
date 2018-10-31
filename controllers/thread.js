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
    create: (req, res) => {
        Thread.create({
            title: req.body.title,
        }).then(thread => {
            res.redirect(`thread/${thread._id}`)
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
        
        Thread.findByIdAndRemove(req.params.threadId).then(() => {
            res.redirect(`/${thread._id}`)
        })
    }

}


module.exports = threadController