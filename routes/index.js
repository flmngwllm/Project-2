let express = require('express')
let router = express.Router()

const applicationController = require('../controllers/application')
const authController = require('../controllers/auth')
const tournamentsController = require('../controllers/tournaments')
const threadController = require('../controllers/thread')
const postsController = require('../controllers/posts')

// GET /
router.get('/', applicationController.index)

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

// Get /tournaments
router.get('/tournaments', tournamentsController.index)

router.get('/tournaments/:tournamentsId', tournamentsController.info)

router.get('/thread', threadController.index)


router.get('/thread/new', threadController.new)

router.post('/thread/', threadController.create)

router.get('/thread/:threadId', threadController.show)

router.get('/thread/:threadId/edit', threadController.edit)

router.put('/thread/:threadId', threadController.update)

router.delete('/thread/:threadId/', threadController.delete)
 



router.get('/thread/:threadId/posts/new', postsController.new)


router.post('/thread/:threadId/posts', postsController.create)


router.get('/thread/:threadId/posts/:postsId/edit', postsController.edit)

router.put('/thread/:threadId/posts/:postsId', postsController.update)

router.delete('/thread/:threadId/posts/:postsId', postsController.delete)




module.exports = router
