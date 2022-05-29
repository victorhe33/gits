const Router = require('express').Router()
const UserRouter = require('./UserRouter')
const TwertRouter = require('./TwertRouter')
const CommentRouter = require('./CommentRouter')
Router.use('/users', UserRouter)
Router.use('/feed', TwertRouter)
Router.use('/comments', CommentRouter)
module.exports = Router
