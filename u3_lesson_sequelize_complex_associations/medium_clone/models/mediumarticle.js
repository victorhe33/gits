'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class MediumArticle extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MediumArticle.belongsTo(models.MediumUser, {
        as: 'author',
        foreignKey: 'authorId'
      })
    }
  }
  MediumArticle.init(
    {
      title: DataTypes.STRING,
      authorId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'medium_users',
          key: 'id'
        }
      },
      body: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'MediumArticle',
      tableName: 'medium_articles'
    }
  )
  return MediumArticle
}
