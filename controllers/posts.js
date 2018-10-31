const Posts = require('../models/Posts')
const User = require('../models/User')

const postsController = {


new: (req, res) => {
    res.render('posts/new')
    },


create:(req, res) => {
    Posts.create({ 
    post: req.body.post,
    author: req.body.author
}).then(newPost => {
    res.redirect(`posts/${posts._id}`)
})   
},


update: (req, res) => {
    const postsId = req.params.postsId
    Posts.findByIdAndUpdate(postsId, req.body).then((updatedPosts)=>{
        res.redirect(`posts/${posts._id}`)
    })
},

delete:(req, res) => {
    const postsId = req.params.postsId
    Posts.findByIdAndRemove(postsId).then(()=>{
        res.redirect(`posts/${posts._id}`)
    })
},


edit:(req, res) => {
    Posts.findById(req.params.id).then(posts =>{
        res.render("posts/edit")
    })
},


show:(req, res) => {
    Posts.findById(req.params.id).then(Mposts => {
        res.send({
            posts: Mposts
        })
    })
}

}
module.exports =  postsController