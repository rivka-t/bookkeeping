const express = require('express');
const { addExpense,addExpenses,findExpens,getBy2Date,getByMonth,getByYear} = require('../services/modules/expenses');

const router = express.Router()

router.get('/findExpens/:filter?',async(req,res)=>{
  try{
    const {filter} = req.params
    const expens = await findExpens(filter)
    res.status(200).json({expens})
  }
  catch(error){
    res.status(500).send(error.message)
  }
})

router.get('/getBy2Date/:filter?',async(req,res)=>{
    try{
      const {filter} = req.params
      const expens = await getBy2Date(filter)
      res.status(200).json({expens})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })

  router.get('/getByMonth/:filter?',async(req,res)=>{
    try{
      const {filter} = req.params
      const expens = await getByMonth(filter)
      res.status(200).json({expens})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })

  router.get('/getByYear/:filter?',async(req,res)=>{
    try{
      const {filter} = req.params
      const expens = await getByYear(filter)
      res.status(200).json({expens})
    }
    catch(error){
      res.status(500).send(error.message)
    }
  })

router.post('/addExpense',express.json(),async (req,res)=>{
    try{
      const expense = req.body;
      const newExpense = await addExpense(expense) 
      console.log({newExpense});
      res.status(201).send({newExpense})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})

router.post('/addExpenses',express.json(),async (req,res)=>{
    try{
      const expense = req.body;
      const newExpense = await addExpenses(expense) 
      console.log({newExpense});
      res.status(201).send({newExpense})
    }
    catch(error){
      res.status(500).send(error.message)
    }
})



module.exports = router;