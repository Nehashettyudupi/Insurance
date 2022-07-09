const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const fuel = sequelize.define(
  'fuel',
  {
    id: {
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

module.exports = fuel;
