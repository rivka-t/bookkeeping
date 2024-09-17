const express = require('express');
const { addReceipt,addReceipts,findReceipt} = require('../services/modules/receipt');

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
      console.log({newReceipt});
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
      console.log({newReceipt});
      res.status(201).send({newReceipt})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})



module.exports = router;