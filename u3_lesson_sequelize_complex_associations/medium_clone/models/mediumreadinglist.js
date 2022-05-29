'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MediumReadingList extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  MediumReadingList.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'medium_users',
          key: 'id'
        }
      },
      articleId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'medium_articles',
          key: 'id'
        }
      }
    },
    {
      sequelize,
      modelName: 'MediumReadingList',
      tableName: 'medium_user_reading_list'
    }
  )
  return MediumReadingList
}
