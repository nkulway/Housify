'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Chore.belongsTo(models.Member)
    }
  };
  Chore.init({
    chore: DataTypes.STRING,
    day: DataTypes.STRING,
    MemberId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Chore',
  });
  return Chore;
};