'use strict'
const { User, Article, sequelize } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const bookmark = await Promise.all(
      [...Array(30)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let article = await Article.findOne({
          order: sequelize.random(),
          raw: true
        })
        return {
          userId: user.id,
          articleId: article.id,
          createdAt: new Date(),
          updatedAt: new Date()
        }
      })
    )
    await queryInterface.bulkInsert('user_bookmarks', bookmark)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_bookmarks')
  }
}
