const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Employee = new Schema(
  {
    name: { type: String, required: true },
    SSN: { type: Number, required: true },
    email: { type: String, required: true },
    position: { type: String, required: true },
    birthdate: { type: String, required: true },
    address: { type: String, required: true },
    image: { type: String },
    company_id: {
      type: String
      // type: Schema.Types.ObjectId,
      // ref: 'company_id'
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Employee', Employee)
