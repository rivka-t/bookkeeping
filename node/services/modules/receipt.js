require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')


const mongoOperation = new MongoOperations('project')
const collection = process.env.MONGO_RECEIPTS_COLLECTION

const addReceipt = (receipt) => {
  mongoOperation.Collection = collection
  const response = mongoOperation.insertItem(receipt)
  return response
}

const addReceipts = (receipts) => {
  mongoOperation.Collection = collection
  const response = mongoOperation.insertList(receipts)
  return response
}

const findReceipt = (filter) => {
  mongoOperation.Collection = collection
  const response = mongoOperation.find({ filter })
  return response
}


const getByCustomer = async (cust) => {
  mongoOperation.Collection = collection
  const revenueOfCustomer = findReceipt({ customer: cust })
  return revenueOfCustomer
}

const getBy2Date = async (startDate, endDate) => {
  console.log(startDate, endDate);
  mongoOperation.Collection = collection
  const allRevenues = await findReceipt()
  startDate = new Date(startDate)
  endDate = new Date(endDate)
  const result = allRevenues.filter(e => {
    const revenueDate = new Date(e.date);
    console.log(startDate, endDate);
    revenueDate.setHours(startDate.getHours())
    console.log(revenueDate)
    return revenueDate >= startDate && revenueDate <= endDate
  })
  return result
}

const getByYear = async (year) => {
  mongoOperation.Collection = collection
  const allrevenue = await findReceipt()
  const result = allrevenue.filter(e => (new Date(e.date).getFullYear()) == year)
  return result
}

const getByMonth = async (month) => {
  mongoOperation.Collection = collection
  const allrevenues = await findReceipt()
  const result = allrevenues.filter(e => (new Date(e.date).getMonth() + 1) == month)
  return result
}

module.exports = {
  addReceipt,
  addReceipts,
  findReceipt,
  getByCustomer,
  getBy2Date,
  getByMonth,
  getByYear
}