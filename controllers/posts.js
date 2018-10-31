const Posts = require('../models/Posts')
const User = require('../models/User')
const Thread = require('../models/Thread')

const postsController = {


    new: (req, res) => {
        res.render('posts/new', {
            threadId: req.params.threadId
        })
    },


    create: (req, res) => {
        Posts.create(req.body).then(post => {
            const threadId = req.params.threadId
            Thread.findById(threadId).populate('posts').then(thread => {
                thread.posts.push(post)
                thread.save().then(()=>{
                    res.redirect(`/thread/${threadId}`)
                })
            })
        })
    },

    update: (req, res) => {
        const postsId = req.params.postsId
        Posts.findByIdAndUpdate(postsId, req.body).then((updatedPosts) => {
            res.redirect(`posts/${posts._id}`)
        })
    },

    delete: (req, res) => {
        const postsId = req.params.postsId
        Posts.findByIdAndRemove(postsId).then(() => {
            res.redirect(`posts/${posts._id}`)
        })
    },


    edit: (req, res) => {
        Posts.findById(req.params.id).then(posts => {
            res.render("posts/edit")
        })
    },


    // show: (req, res) => {
    //     Posts.findById(req.params.id).then(Mposts => {
    //         res.render("post{

    //         })
    //     })
    // }

}
module.exports = postsController