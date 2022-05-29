'use strict'
const { MediumUser, MediumArticle } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await MediumUser.findAll({ raw: true })
    const articles = await MediumArticle.findAll({ raw: true })
    const list = articles.map((a) => ({
      userId: users[Math.floor(Math.random() * users.length)].id,
      articleId: a.id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('medium_user_reading_list', list)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medium_user_reading_list')
  }
}
