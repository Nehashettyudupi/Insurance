const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
router.get('/getInsuranceList', async function getInsuranceProduct(req,res){
    try{return res.send(JSON.stringify('Qwert'))}catch(error){
        return res.send(403);
    }
});

module.exports = router;