const { User, sequelize } = require('./models')
const stringify = require('../utils')

const getUsersAndFollowers = async () => {
  try {
  } catch (error) {
    console.log(error)
  }
}

const getUserFollowing = async () => {
  try {
  } catch (error) {
    console.log(error)
  }
}

async function main() {
  try {
    await getUsersAndFollowers()
    await getUserFollowing()
  } catch (error) {
    console.log(error)
  } finally {
    sequelize.close()
  }
}

main()
