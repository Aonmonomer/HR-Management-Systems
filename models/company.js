const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Company = new Schema(
  {
    companyName: { type: String, required: true },
    companyPhone: { type: Number, required: true },
    companyUrl: { type: String },
    companyAddress: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Company', Company)
