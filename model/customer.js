const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const customer = sequelize.define(
  'customer',
  {
    customerId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    customerGender: {
      type: DataTypes.ENUM,
      values: [
        'female',
        'male'  
      ],
      allowNull: false,
    },
    customerIncomeGroup: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    customerRegion: {
        type: DataTypes.ENUM,
        values: [
          'North',
          'South' ,
          'East',
          'West' 
        ],
        allowNull: false,
    },
    customerMaritalStatus: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    }
  },
);
// customer.associate = (models) => {
//   customer.hasMany(models.insurance);
// };
module.exports = customer;
