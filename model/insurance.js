const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const insurance = sequelize.define(
  'insurance',
  {
    customerId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fuelId:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vehicleId:{
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    policyId: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    dateOfPurchase: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    premium: {
      type: DataTypes.INTEGER(32),
      allowNull: false,
    },
    bodilyInjuryLiability: {
      type: DataTypes.STRING(32),
      allowNull: false,
    },
    personalInjuryProtection: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    propertyDamageLiability: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    collision: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
    comprehensive: {
        type: DataTypes.STRING(32),
        allowNull: false,
    },
  }, {
    sequelize,
    tableName: 'insurance',
    // timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'customerId' }, { name: 'fuelId' },{ name: 'vehicleId' }],
      },
    ],
  }
);
// insurance.associate = (models) => {
//   insurance.belongsTo(models.fuel);
//   insurance.belongsTo(models.customer);
//   insurance.belongsTo(models.vehicle_segment);
// };
module.exports = insurance;
