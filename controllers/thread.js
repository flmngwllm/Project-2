const Thread = require('../models/Thread')
const Posts = require('../models/Posts')



const threadController = {


    index: (req, res) => {
        Thread.find({}).populate('posts')
            .then((thread) => {
                res.render('thread/index', {
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
            res.redirect(`/${newThread._id}`)
        })

    },


    // list: (req, res) => {
    //     Thread.find().then((threads) => {
    //         res.render(threads)
    //     })
    // },


    new: (req, res) => {
        res.render('thread/new')
    },


    show: (req, res) => {
        Thread.findById(req.params.id).then(Mposts => {
            res.send({
                posts: Mposts
            })
        })
    }

}


module.exports = threadController