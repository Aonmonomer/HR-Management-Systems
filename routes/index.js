const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()

router.get('/', (req, res) => res.send('This is root!'))

router.post('/employees', controllers.createEmployee)

router.get('/employees', controllers.getAllEmployees)

router.get('/employees/:id', controllers.getEmployeeById)

router.put('/employees/:id', controllers.updateEmployee)

router.delete('/employees/:id', controllers.deleteEmployee)

router.post('/companies', controllers.createCompany)

router.get('/companies', controllers.getAllCompanies)

router.get('/companies/:id', controllers.getCompanyById)

router.put('/companies/:id', controllers.updateCompany)

router.delete('/companies/:id', controllers.deleteCompany)

module.exports = router
