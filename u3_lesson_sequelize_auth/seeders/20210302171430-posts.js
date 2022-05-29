'use strict'
const faker = require('faker')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    let posts = [...Array(5)].map((_) => ({
      title: faker.lorem.sentence(),
      body: faker.lorem.paragraph(),
      image: faker.image.food(),
      createdAt: faker.date.past(),
      updatedAt: faker.date.recent()
    }))
    await queryInterface.bulkInsert('posts', posts)
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('posts')
  }
}
