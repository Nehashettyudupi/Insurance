const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const customer = require('../model/customer');
const sequelize = require('../database');
router.post('/getInsuranceList', async function getInsuranceProduct(req,res){
    console.log('req.body.id', req.body.id);
    try{
        // let query = await customer.findAll({raw: true});
        let query = 'SELECT *,fuel.name as fuel, vehiclesegments.name as vehiclesegments FROM insurance LEFT JOIN customers ON customers.customerId = insurance.customerId LEFT JOIN fuel ON fuel.fuelId = insurance.fuelId LEFT JOIN vehiclesegments ON vehiclesegments.vehicleId = insurance.vehicleId';
        
        let result = await sequelize.query(query, {
            raw: true,
          });
          console.log(result[0]);
        return res.send(JSON.stringify({data: result[0]}))}
    catch(error){
        console.log(error);
        return res.sendStatus(403);
    }
});

module.exports = router;