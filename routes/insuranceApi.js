const express = require('express');
const router = express.Router();
const Sequelize = require('sequelize');
const { QueryTypes } = require('sequelize');
const customer = require('../model/customer');
const sequelize = require('../database');
router.get('/getInsuranceList', async function getInsuranceProduct(req,res){
    try{
        // let query = await customer.findAll({raw: true});
        let query = 'SELECT *,fuel.name as fuel, vehiclesegments.name as vehiclesegments FROM insurance LEFT JOIN customers ON customers.customerId = insurance.customerId LEFT JOIN fuel ON fuel.fuelId = insurance.fuelId LEFT JOIN vehiclesegments ON vehiclesegments.vehicleId = insurance.vehicleId';
        
        let result = await sequelize.query(query, {
            raw: true,
          });
        //   console.log(result[0]);
        return res.send(JSON.stringify({data: result[0]}))}
    catch(error){
        console.log(error);
        return res.sendStatus(403);
    }
});

router.post('/saveInsuranceDetails', async function saveInsuranceDetails(req,res){
    try{
        console.log(req.body);
        let queryInsurance = 'UPDATE insurance SET premium = :premium , bodilyInjuryLiability = :bodilyInjuryLiability,personalInjuryProtection = :personalInjuryProtection, propertyDamageLiability = :propertyDamageLiability, collision = :collision WHERE policyId = :policyId';
        await sequelize.query(queryInsurance, {
            replacements: {
                premium: req.body.premium,
                bodilyInjuryLiability: req.body.bodilyInjuryLiability,
                personalInjuryProtection: req.body.personalInjuryProtection,
                propertyDamageLiability: req.body.propertyDamageLiability,
                collision: req.body.collision,
                policyId: req.body.policyId,
            },
            raw: true,
          });
        let queryCustomer = 'UPDATE customers SET customerGender=:customerGender, customerIncomeGroup=:customerIncomeGroup,customerRegion=:customerRegion,customerMaritalStatus=:customerMaritalStatus WHERE customerId =:customerId';
        await sequelize.query(queryCustomer, {
            replacements: {
                customerGender: req.body.customerGender,
                customerIncomeGroup: req.body.customerIncomeGroup,
                customerRegion: req.body.customerRegion,
                customerMaritalStatus: req.body.customerMaritalStatus,
                customerId:req.body.customerId,
            },
            raw: true,
          });
        return res.send(JSON.stringify('Updated Successfully'))}
    catch(error){
        console.log(error);
        return res.sendStatus(403);
    }
});

router.post('/getGraphData', async function getGraphData(req,res){
    try{
        // let query = 'SELECT year(dateOfPurchase) as year,MONTHNAME(dateOfPurchase) as month,month(dateOfPurchase) as month_no, COUNT(policyId) as count FROM insurance group by year(dateOfPurchase),MONTHNAME(dateOfPurchase) ';
        let query = 'SELECT year(dateOfPurchase) as year,MONTHNAME(dateOfPurchase) as month,month(dateOfPurchase) as month_no, COUNT(policyId) as count FROM insurance INNER JOIN customers ON customers.customerRegion = :region group by year(dateOfPurchase),MONTHNAME(dateOfPurchase) ';
        
        let result = await sequelize.query(query, {
            replacements: {region: req.body.region},
            raw: true,
          });
        //   console.log(result[0]);
        return res.send(JSON.stringify({data: result[0]}))}
    catch(error){
        console.log(error);
        return res.sendStatus(403);
    }
});

module.exports = router;