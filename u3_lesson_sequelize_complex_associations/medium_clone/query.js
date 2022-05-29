const { MediumUser, MediumArticle, sequelize } = require('./models')
const stringify = require('../utils')

const userAndArticle = async () => {
  try {
  } catch (error) {
    console.log(error)
  }
}

const getArticleAuthors = async () => {
  try {
  } catch (error) {
    console.log(error)
  }
}

const getReadingList = async () => {
  try {
  } catch (error) {
    console.log(error)
  }
}

async function main() {
  try {
    // await userAndArticle()
    await getArticleAuthors()
    // await getReadingList()
  } catch (error) {
    console.log(error)
  } finally {
    sequelize.close()
  }
}

main()
