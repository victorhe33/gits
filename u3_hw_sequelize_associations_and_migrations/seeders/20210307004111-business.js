'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const businesses = [...Array(10)].map((_) => ({
      name: falso.randCompanyName(),
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('businesses', businesses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('businesses')
  }
}
