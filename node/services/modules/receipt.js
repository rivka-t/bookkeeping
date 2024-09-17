require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')


const mongoOperation=new MongoOperations('project')
const collection = process.env.MONGO_RECEIPTS_COLLECTION

const addReceipt = (receipt)=> {
    mongoOperation.Collection=collection
  const response = mongoOperation.insertItem(receipt)
  return response

}

const addReceipts = (receipts)=> {
    mongoOperation.Collection=collection
  const response = mongoOperation.insertList(receipts)
  return response
}

const findReceipt = (filter)=> {
    mongoOperation.Collection=collection
  const response = mongoOperation.find(filter)
  return response
}

  module.exports = {
    addReceipt,
    addReceipts,
    findReceipt
  }