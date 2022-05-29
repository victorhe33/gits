const Router = require('express').Router()
const controller = require('../controllers/TwertController')

Router.get('/trending', controller.GetPopularTwerts)
Router.get('/recents', controller.GetRecentTwerts)
// Implement these routes
Router.get('/view/:twert_id')
Router.post('/:user_id')
Router.put('/:twert_id')
Router.delete('/:twert_id')
// Implement these routes
module.exports = Router
