const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('insurance', 'test', 'test', {
  host: 'localhost',
  dialect:  'mysql',
});
module.exports = sequelize

