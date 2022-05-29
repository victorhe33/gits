'use strict'
const { User, Twerts, sequelize } = require('../models')
const { Op } = require('sequelize')
const falso = require('@ngneat/falso')
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const comments = await Promise.all(
      [...Array(1000)].map(async () => {
        let user = await User.findOne({ order: sequelize.random(), raw: true })
        let twert = await Twerts.findOne({
          order: sequelize.random(),
          where: { ownerId: { [Op.not]: user.id } },
          raw: true
        })
        return {
          content: falso.randParagraph(),
          likes: falso.randNumber({ min: 0, max: 40000 }),
          owner_id: user.id,
          twert_id: twert.id
        }
      })
    )
    return queryInterface.bulkInsert('comments', comments)
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('comments')
  }
}
