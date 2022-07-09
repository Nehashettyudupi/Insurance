const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../database');
const insurance = sequelize.define(
  'insurance',
  {
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
    enabled: {
      type: DataTypes.STRING(32),
      allowNull: false,
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
  },
  { 
    sequelize,
    tableName: 'customers',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'customerId' }],
      },
    ],
  },
  { 
    sequelize,
    tableName: 'fuel',
    timestamps: false,
    indexes: [
      {
        name: 'PRIMARY',
        unique: true,
        using: 'BTREE',
        fields: [{ name: 'fuelId' }],
      },
    ],
  }
);

module.exports = insurance;
