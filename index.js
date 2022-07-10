const connection = require('./sql');
const express = require('express');
const customer = require('./model/customer');
const fuel = require('./model/fuel');
const insurance = require('./model/insurance');
const vehicle_segment = require('./model/vehicle_segment');
const app = express();
const port = 8080;
const sequelize = require('./database');
const insuranceApi = require('./routes/insuranceApi');
const bodyParser = require('body-parser');
// const { Sequelize } = require('sequelize');
// const sequelize = new Sequelize('insurance', 'test', 'test', {
//   host: 'localhost',
//   dialect:  'mysql',
// });
app.use(function headerFn(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type,Accept, Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type,Accept, Authorization'
    );
    res.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    return res.status(200).json({});
  }
  next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({  extended: false }));
async function authenticate(){
  try {
    await sequelize.authenticate();
    await sequelize.sync();
    // sequelize.sync({force:true});
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
authenticate();
app.get('/', (req, res) => {
  res.send('Hello World!');
});
app.use('/insurance', insuranceApi);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});