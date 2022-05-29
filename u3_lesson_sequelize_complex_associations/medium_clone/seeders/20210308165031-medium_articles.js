'use strict'
const faker = require('faker')
const { MediumUser } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await MediumUser.findAll({ raw: true })
    const articles = [...Array(50)].map((_) => ({
      title: faker.lorem.sentence(),
      authorId: users[Math.floor(Math.random() * users.length)].id,
      body: faker.lorem.paragraphs(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('medium_articles', articles)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medium_articles')
  }
}
