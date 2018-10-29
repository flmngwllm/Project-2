let express = require('express')
let router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const tournamentsController = require('../controllers/tournaments')
const threadController = require('../controllers/thread')

// GET /
router.get('/', applicationController.index)

// Restricted (cool people only!)
router.get('/secret', applicationController.secret)

// GET /signup
router.get('/signup', authController.signUp)

// POST /signup
router.post('/signup', authController.createUser)

// GET /login
router.get('/login', authController.logIn)

// POST /login
router.post('/login', authController.checkUser)

// GET /logout
router.get('/logout', authController.logOut)


router.get('/tournaments', tournamentsController.index)

router.get('/:id', tournamentsController.info)


router.post('/thread', threadController.post)


router.get('/thread:title.:format?', threadController.show)

 
router.get('/thread', threadController.list)


router.post('/thread/post', postsController.create)



// router.delete(postsController.delete)






module.exports = router
