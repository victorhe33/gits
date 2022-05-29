const { User, Twerts, Comment } = require('../models')
const { Op, literal, fn, col } = require('sequelize')

const GetPopularTwerts = async (req, res) => {
  try {
    const popular = await Twerts.findAll({
      order: [['likes', 'DESC']], //Order By Likes in descending order
      attributes: [
        // Select Specific Attributes
        'id',
        'content',
        'likes',
        [fn('COUNT', col('comments.id')), 'commentCount'] //Count amount of associated comments
      ],
      where: { likes: { [Op.gt]: 3000 } }, // Where likes is greater than 3000
      include: [
        { model: User, as: 'owner', attributes: ['name', 'id'] },
        { model: Comment, as: 'comments', attributes: [] } //Leave attributes empty, we only need the model to execute the count
      ],
      group: ['Twerts.id', 'owner.id'] // Group the information by it's respective id
    })
    res.send(popular)
  } catch (error) {
    throw error
  }
}

const GetRecentTwerts = async (req, res) => {
  try {
    const recents = await Twerts.findAll({ order: [['created_at', 'DESC']] })
    res.send(recents)
  } catch (error) {
    throw error
  }
}

const GetTwertDetails = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const CreateTwert = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const UpdateTwert = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

const DeleteTwert = async (req, res) => {
  try {
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPopularTwerts,
  GetRecentTwerts,
  GetTwertDetails,
  CreateTwert,
  UpdateTwert,
  DeleteTwert
}
