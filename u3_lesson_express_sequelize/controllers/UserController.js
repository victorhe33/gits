const { User, Twerts } = require('../models')

const GetProfiles = async (req, res) => {
  try {
    const users = await User.findAll()
    res.send(users)
  } catch (error) {
    throw error
  }
}

const GetUserProfile = async (req, res) => {
  try {
    const userAndTwerts = await User.findByPk(req.params.user_id, {
      include: [{ model: Twerts, as: 'twerts' }]
    })
    res.send(userAndTwerts)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetProfiles,
  GetUserProfile
}
