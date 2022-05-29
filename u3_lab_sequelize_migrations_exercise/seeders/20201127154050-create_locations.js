'use strict'
const falso = require('@ngneat/falso')
const locs = [...Array(10)].map(() => ({
  city_name: falso.randCity(),
  zipcode: falso.randZipCode(),
  population: falso.randNumber({ min: 30000, max: 20000000 })
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', locs)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', locs)
  }
}
