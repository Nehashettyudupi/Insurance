const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const vehicle_segment = sequelize.define(
  'vehicleSegment',
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

module.exports = vehicle_segment;
