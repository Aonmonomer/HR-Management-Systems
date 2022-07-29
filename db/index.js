const mongoose = require('mongoose')
require('dotenv').config()

// let MONGODB_URI = `${process.env.MONGO_CONNECTION_STRING}/HRMDatabase`
let MONGODB_URI = `${process.env.MONGO_CONNECTION_STRING}/HRMDatabase`

let dbUrl = MONGODB_URI

mongoose
  .connect(dbUrl)
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

mongoose.set('debug', true)
const db = mongoose.connection

module.exports = db
