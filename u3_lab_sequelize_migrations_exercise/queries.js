const { Business, Location } = require('./models')
const { Op } = require('sequelize')
const stringify = function (data) {
  console.log(JSON.stringify(data, null, 4))
}

const findAllBusinesses = async () => {
  try {
    const businesses = await Business.findAll()
    stringify(businesses)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const findAllLocations = async () => {
  try {
    const locations = await Location.findAll({
      where: {
        [Op.and]: [
          { population: { [Op.gte]: 30000 } },
          { population: { [Op.lte]: 100000 } }
        ]
      }
    })
    stringify(locations)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const findAllBusinessPhones = async () => {
  try {
    const phoneNums = await Business.findAll({ attributes: ['phoneNumber'] })
    stringify(phoneNums)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getAllNames = async () => {
  try {
    const bNamesWRatings = await Business.findAll({
      attributes: ['name', 'rating']
    })
    stringify(bNamesWRatings)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

const getAllBRatings = async () => {
  try {
    const bNamesWRatings = await Business.findAll({
      attributes: ['name', 'rating'],
      where: {
        rating: {
          [Op.lt]: 32
        }
      }
    })
    stringify(bNamesWRatings)
    return true
  } catch (error) {
    console.log(error)
    return false
  }
}

module.exports = {
  findAllBusinesses,
  findAllLocations,
  findAllBusinessPhones,
  getAllNames,
  getAllBRatings,
  stringify
}
