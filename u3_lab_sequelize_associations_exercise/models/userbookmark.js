'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class UserBookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserBookmark.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'users',
          key: 'id'
        }
      },
      articleId: {
        type: DataTypes.INTEGER,
        references: {
          model: 'articles',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'UserBookmark',
      tableName: 'user_bookmarks'
    }
  )
  return UserBookmark
}
