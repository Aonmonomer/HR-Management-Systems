const db = require('../db')
const Company = require('../models/company')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const companies = [
    {
      companyName: 'Cedric & Associates',
      companyPhone: '0123456789',
      companyUrl: 'https://www.cedricandassciates.com',
      companyAddress: 'Brooklyn, NY'
    },
    {
      companyName: 'John Doe PLLC',
      companyPhone: '0123456789',
      companyUrl: 'https://www.johndoe.com',
      companyAddress: 'Atlanta, GA'
    }
  ]

  await Company.insertMany(companies)
  console.log('Created companies!')
}
const run = async () => {
  await main()
  db.close()
}

run()
