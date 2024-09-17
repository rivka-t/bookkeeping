require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')

const mongoOperation=new MongoOperations('project')
const collection = process.env.MONGO_EXPENSES_COLLECTION

const addExpense = (expense)=> {
  mongoOperation.Collection=collection
  const response = mongoOperation.insertItem(expense)
  return response

}

const addExpenses = (expenses)=> {
  mongoOperation.Collection=collection
  const response = mongoOperation.insertList(expenses)
  return response
}

const findExpens = (filter)=> {
  mongoOperation.Collection=collection
  const response = mongoOperation.find(filter)
  return response
}
const getByMonth =async (month) =>{
    mongoOperation.Collection=collection
  const expensesOfMonth = await findExpens({date:month})
  // const result = allExpenses.filter(e => (new Date(e.date).getMonth()+1) === month)
return expensesOfMonth
}

const getByYear =async (year) =>{
  mongoOperation.Collection=collection
  const allExpenses = await findExpens()
  const result = allExpenses.filter(e => (new Date(e.date).getFullYear()) === year)
return result
}

const getBy2Date = async (startDate,endDate) =>{
  mongoOperation.Collection=collection
  const allExpenses = await findExpens()
  const result = allExpenses.filter(e => {
    const expenseDate = new Date(e.date);
    return expenseDate >= startDate && expenseDate <= endDate;
})
 return result
}

  module.exports = {
    addExpense,
    addExpenses,
    findExpens,
    getByMonth,
    getByYear,
    getBy2Date
  }