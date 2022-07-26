const mongoose = require('mongoose')
require('dotenv').config()

let MONGODB_URI = `${process.env.MONGO_CONNECTION_STRING}/HRMDatabase`

mongoose
  .connect(MONGODB_URI, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to MongoDB.')
  })
  .catch((e) => {
    console.error('Connection error', e.message)
  })

const db = mongoose.connection

module.exports = db