const express = require('express');
const {addCustomer,addCustomers,findCustomers} = require('../services/modules/customers');

const router = express.Router()

router.get('/findCustomers/:filter?',async(req,res)=>{
  try{
    const {filter} = req.params
    const cust = await findCustomers(filter)
    res.status(200).json(cust)
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.post('/addCustomer',express.json(),async (req,res)=>{
    try{
      const cust = req.body;
      const newCust = await addCustomer(cust) 
      console.log({newCust});
      res.status(201).send({newCust})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.post('/addCustomers',express.json(),async (req,res)=>{
    try{
      const cust = req.body;
      const newCust = await addCustomers(cust) 
      console.log({newCust});
      res.status(201).send({newCust})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

module.exports = router;