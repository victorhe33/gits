'use strict'
const { Business } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const b = await Business.findAll({ raw: true })
    const addresses = [...Array(10)].map((_, i) => ({
      street: falso.randStreetAddress(),
      city: falso.randCity(),
      state: falso.randState(),
      businessId: b[i].id,
      createdAt: new Date(),
      updatedAt: new Date()
    }))
    await queryInterface.bulkInsert('addresses', addresses)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('addresses')
  }
}
