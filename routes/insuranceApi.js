const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const customer = require('../model/customer');
router.post('/getInsuranceList', async function getInsuranceProduct(req,res){
    console.log('req.body.id', req.body.id);
    try{
        let query = await customer.findAll({raw: true});
        console.log(query);
        return res.send(JSON.stringify({data: query}))}
    catch(error){
        console.log(error);
        return res.sendStatus(403);
    }
});

module.exports = router;