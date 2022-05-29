'use strict'
const falso = require('@ngneat/falso')
const businesses = [...Array(10)].map(() => ({
  businessName: falso.randCompanyName(),
  phoneNmber: falso.randPhoneNumber({ countryCode: 'US' }),
  rating: falso.randNumber({ min: 0, max: 100 })
}))
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('businesses', businesses)
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('businesses')
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
}
