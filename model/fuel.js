const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const fuel = sequelize.define(
  'fuel',
  {
    fuelId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  },
);
// fuel.associate = (models) => {
//   fuel.hasMany(models.insurance);
// };
module.exports = fuel;
