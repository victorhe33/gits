'use strict'
const { Business } = require('../models')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const b = await Business.findAll({ raw: true })
    const employees = [...Array(200)].map((_) => {
      let r = Math.floor(Math.random() * b.length)
      return {
        firstName: falso.randFirstName(),
        lastName: falso.randLastName(),
        email: falso.randEmail(),
        businessId: b[r].id,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    })
    await queryInterface.bulkInsert('employees', employees)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('employees')
  }
}
