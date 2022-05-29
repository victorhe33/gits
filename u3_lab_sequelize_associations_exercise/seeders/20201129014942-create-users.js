'use strict'
const falso = require('@ngneat/falso')
const users = [...Array(10)].map(() => ({
  username: falso.randUserName(),
  email: falso.randEmail(),
  createdAt: new Date(),
  updatedAt: new Date()
}))

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', users)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users')
  }
}
