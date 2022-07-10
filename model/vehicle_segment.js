const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const vehicle_segment = sequelize.define(
  'vehicleSegment',
  {
    vehicleId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    name: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
  }
);
// vehicle_segment.associate = (models) => {
//   vehicle_segment.hasMany(models.insurance);
// };
module.exports = vehicle_segment;
