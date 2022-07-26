const db = require('../db')
const Employee = require('../models/employee')
const Company = require('../models/company')

// Connect to the database
db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
  const companies = await Company.find({})

  const employees = [
    {
      name: 'John Doe',
      SSN: '0123456789',
      email: 'john@gmail.com',
      position: 'Senior HR Manager',
      birthdate: '01-01-86',
      address: 'Brooklyn, NY',
      image:
        'https://homecoming.messiah.edu/wp-content/uploads/2015/04/speaker-3-v2.jpg',
      company_id: companies[0]._id
    },
    {
      name: 'Jane Doe',
      SSN: '0123456789',
      email: 'jane@gmail.com',
      position: 'Junior IT Manager',
      birthdate: '07-06-95',
      address: 'Atlanta, GA',
      image:
        'https://elementor.topdigitaltrends.net/wp-content/uploads/2018/09/member-02-1.jpg',
      company_id: companies[1]._id
    }
  ]

  await Employee.insertMany(employees)
  console.log("Created some employees' profiles!")
}
const run = async () => {
  await main()
  db.close()
}

run()
