'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [...Array(20)].map((_) => ({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('medium_users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('medium_users')
  }
}
