require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')

const mongoOperation = new MongoOperations('project')
const collection = process.env.MONGO_CUSTOMERS_COLLECTION

const addCustomer = (customer) => {
  mongoOperation.Collection = collection
  const response = mongoOperation.insertItem(customer)
  return response

}

const addCustomers = (customers) => {
  mongoOperation.Collection = collection
  const response = mongoOperation.insertList(customers)
  return response
}

const findCustomers = (filter) => {
  mongoOperation.Collection = collection
  const response = mongoOperation.find(filter)
  return response
}

module.exports = {
  addCustomer,
  addCustomers,
  findCustomers
}