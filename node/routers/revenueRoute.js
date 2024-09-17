const express = require('express');
const { addRevenue,addRevenues,findRevenue,getBy2Date,getByCustomer,getByMonth,getByYear } = require('../services/modules/revenue');

const router = express.Router()

router.get('/findrevenue/:filter?',async(req,res)=>{
    try{
      const {filter} = req.params
      const revenue = await findRevenue(filter)
      res.status(200).json({revenue})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })

  router.get('/getByCustomer/:filter?',async(req,res)=>{
    try{
      const {filter} = req.params
      const revenue = await getByCustomer(filter)
      res.status(200).json({revenue})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })
  
  router.get('/getBy2Date/:filter?',async(req,res)=>{
      try{
        const {filter} = req.params
        const revenue = await getBy2Date(filter)
        res.status(200).json({revenue})
      }
      catch(error){
        res.status(500).send(error.message)
      }
    })
  
    router.get('/getByMonth/:filter?',async(req,res)=>{
      try{
        const {filter} = req.params
        const revenue = await getByMonth(filter)
        res.status(200).json({revenue})
      }
      catch(error){
        res.status(500).send(error.message)
      }
    })
  
    router.get('/getByYear/:filter?',async(req,res)=>{
      try{
        const {filter} = req.params
        const revenue = await getByYear(filter)
        res.status(200).json({revenue})
      }
      catch(error){
        res.status(500).send(error.message)
      }
    })
  
  router.post('/addRevenue',express.json(),async (req,res)=>{
      try{
        const revenue = req.body;
        const newRevenue = await addRevenue(revenue) 
        console.log({newRevenue});
        res.status(201).send({newRevenue})
      }
      catch(error){
        res.status(500).send(error.message)
      }
  })
  
  router.post('/addRevenues',express.json(),async (req,res)=>{
      try{
        const revenue = req.body;
        const newRevenue = await addRevenues(revenue) 
        console.log({newRevenue});
        res.status(201).send({newRevenue})
      }
      catch(error){
        res.status(500).send(error.message)
      }
  })
  
  
  
  module.exports = router;