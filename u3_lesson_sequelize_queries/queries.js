const { Business, sequelize } = require('./models')
const { Op } = require('sequelize')

const stringify = (data) => {
  console.log(JSON.stringify(data, null, 2))
}

async function main() {
  try {
  } catch (error) {
    console.log(error)
  } finally {
    await sequelize.close()
  }
}

main()
