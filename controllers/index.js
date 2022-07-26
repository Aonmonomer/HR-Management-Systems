const Employee = require('../models/employee')
const Company = require('../models/company')

const createEmployee = async (req, res) => {
  try {
    const employee = await new Employee(req.body)
    await employee.save()
    return res.status(201).json({
      employee
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllEmployees = async (req, res) => {
  try {
    const employees = await Employee.find()
    return res.status(200).json({ employees })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params
    const employee = await Employee.findById(id)
    if (employee) {
      return res.status(200).json({ employee })
    }
    return res
      .status(404)
      .send('Employee with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateEmployee = async (req, res) => {
  try {
    const employee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(employee)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Employee.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Employee profile deleted.')
    }
    throw new Error('Employee not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const createCompany = async (req, res) => {
  try {
    const company = await new Company(req.body)
    await company.save()
    return res.status(201).json({
      company
    })
  } catch (error) {
    return res.status(500).json({ error: error.message })
  }
}

const getAllCompanies = async (req, res) => {
  try {
    const companies = await Company.find()
    return res.status(200).json({ companies })
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const getCompanyById = async (req, res) => {
  try {
    const { id } = req.params
    const company = await Company.findById(id)
    if (company) {
      return res.status(200).json({ company })
    }
    return res.status(404).send('Company with the specified ID does not exists')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const updateCompany = async (req, res) => {
  try {
    const company = await Company.findByIdAndUpdate(req.params.id, req.body, {
      new: true
    })
    res.status(200).json(company)
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

const deleteCompany = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Company.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send('Company profile deleted.')
    }
    throw new Error('Company not found')
  } catch (error) {
    return res.status(500).send(error.message)
  }
}

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
  createCompany,
  getAllCompanies,
  getCompanyById,
  updateCompany,
  deleteCompany
}
