const express = require('express');
const { addReceipt,addReceipts,findReceipt,getByCustomer,getBy2Date,getByMonth,getByYear} = require('../services/modules/receipt');

const router = express.Router()

router.get('/findReceipt/:filter?',async(req,res)=>{
  try{
    const {filter} = req.params
    const receipt = await findReceipt(filter)
    res.status(200).json({receipt})
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.post('/addReceipt',express.json(),async (req,res)=>{
    try{
      const receipt = req.body;
      const newReceipt = await addReceipt(receipt) 
      res.status(201).send({newReceipt})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.post('/addReceipts',express.json(),async (req,res)=>{
    try{
      const receipt = req.body;
      const newReceipt = await addReceipts(receipt) 
      res.status(201).send({newReceipt})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.get('/getBy2Date/:startDate/:endDate',async(req,res)=>{
  try{
   const {startDate,endDate} = req.params
    const revenue = await getBy2Date(startDate,endDate)
    res.status(200).json(revenue)
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getByMonth/:filter?',async(req,res)=>{
  try{
    const {filter} = req.params
    const revenue = await getByMonth(filter)
    res.status(200).json(revenue)
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getByYear/:filter?',async(req,res)=>{
  try{
    const {filter} = req.params
    const revenue = await getByYear(filter)
    res.status(200).json(revenue)
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getByCustomer/:filter?',async(req,res)=>{
  try{
    const {filter} = req.params
    const revenue = await getByCustomer(filter)
    res.status(200).json(revenue)
  }
  catch(error){
    res.status(500).send(error.message)
  }
})



module.exports = router;