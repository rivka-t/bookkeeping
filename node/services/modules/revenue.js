require('dotenv').config()
const { MongoOperations } = require('../db/mongo-operations')

const mongoOperation=new MongoOperations('project')
const collection = process.env.MONGO_REVENUE_COLLECTION

const addRevenue = (revenue)=> {
    mongoOperation.Collection=collection
  const response = mongoOperation.insertItem(revenue)
  return response

}

const addRevenues = (revenue)=> {
    mongoOperation.Collection=collection
  const response = mongoOperation.insertList(revenue)
  return response
}

const findRevenue = (filter)=> {
    mongoOperation.Collection=collection
  const response = mongoOperation.find(filter)
  return response
}

const getByMonth =async (month) =>{
    mongoOperation.Collection=collection
  const allrevenues = await findRevenue()
  const result = allrevenues.filter(e => (new Date(e.date).getMonth()+1) === month)
return result
}

const getByYear =async (year) =>{
    mongoOperation.Collection=collection
  const allrevenue = await findRevenue()
  const result = allrevenue.filter(e => (new Date(e.date).getFullYear()) === year)
return result
}

const getBy2Date = async (startDate,endDate) =>{
    mongoOperation.Collection=collection
  const allrevenue = await findRevenue()
  const result = allrevenue.filter(e => {
    const revenueDate = new Date(e.date);
    return revenueDate >= startDate && revenueDate <= endDate;
})
 return result
}

const getByCustomer=async(cust)=>{
    mongoOperation.Collection=collection
const revenueOfCustomer=findRevenue({customer:cust})
return revenueOfCustomer
}

  module.exports = {
    addRevenue,
    addRevenues,
    findRevenue,
    getByMonth,
    getByYear,
    getBy2Date,
    getByCustomer
  }