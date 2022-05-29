'use strict'
const { User } = require('../models')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = await User.findAll({ raw: true })
    const followers = users
      .map(({ id }) => ({
        userId: id,
        followerId:
          users[Math.floor(Math.random() * users.length)].id !== id
            ? users[Math.floor(Math.random() * users.length)].id
            : null,
        createdAt: new Date(),
        updatedAt: new Date()
      }))
      .filter((u) => u.followerId !== null)
    await queryInterface.bulkInsert('user_followers', followers)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('user_followers')
  }
}
