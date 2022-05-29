'use strict'
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const businesses = [...Array(100)].map((_) => {
      const address = `${falso.randStreetAddress()} ${falso.randCity()}, ${falso.randState()}`
      return {
        name: falso.randCompanyName(),
        address: address,
        rating: falso.randNumber({ min: 0, max: 5 }),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('businesses', businesses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('businesses')
  }
}
