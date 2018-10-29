const Posts = require('../models/Posts')






const postsController = {

create:(req, res) => {
    Post.create({ 
    post: req.body.post,
    date: req.body.date,
    author: req.body.author
}).then(newPost => {
    res.redirect(`/${newPost._id}`)
})
    
},


delete:(req, res) => {
    Posts.findByIdAndRemove(req.params.id).then(()=>{
        res.redirect
    })
}
}


module.exports =  postsController