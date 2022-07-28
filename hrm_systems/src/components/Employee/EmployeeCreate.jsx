import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const EmployeeCreate = () => {
  const [newEmployee, setNewEmployee] = useState([])
  // const [companyList, setCompanyList] = useState([])
  const initialState = {
    name: '',
    SSN: '',
    email: '',
    position: '',
    birthdate: '',
    address: '',
    image: '',
    company_id: ''
  }

  const [formState, setFormState] = useState(initialState)

  // useEffect(() => {
  //   const getCompanyList = async () => {
  //     try {
  //       let res = await axios.get('http://localhost:3001/api/companies')
  //       console.log(res.data.companies)
  //       setCompanyList(res.data.companies)
  //     } catch (err) {
  //       console.log(err)
  //     }
  //   }
  //   getCompanyList()
  // }, [])

  useEffect(() => {
    const getNewEmployee = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/employees')
        console.log(res.data.employees)
        setNewEmployee(res.data.employees)
      } catch (err) {
        console.log(err)
      }
    }
    getNewEmployee()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // do something with the data in the component state
    let res = await axios.post('http://localhost:3001/api/employees', formState)
    console.log(res)
    // clear the form
    setFormState(initialState)
  }

  return (
    <div>
      <h2>Create New Employee</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeName">New Employee Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
        />
        <label htmlFor="employeeSSN">New Employee SSN:</label>
        <input
          type="number"
          id="SSN"
          onChange={handleChange}
          value={formState.SSN}
        />
        <label htmlFor="employeeEmail">New Employeee Email:</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={formState.email}
        />
        <label htmlFor="employeePosition">New Employeee Position:</label>
        <input
          type="text"
          id="position"
          onChange={handleChange}
          value={formState.position}
        />
        <label htmlFor="employeeBirthdate">New Employeee Birthdate:</label>
        <input
          type="text"
          id="birthdate"
          onChange={handleChange}
          value={formState.birthdate}
        />

        <label htmlFor="employeeAddress">New Employee Address:</label>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formState.address}
        />
        <label htmlFor="employeeImage">New Employee Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.image}
        />
        <label htmlFor="employeeCompany">New Employee Company:</label>
        <input
          type="text"
          id="company_id"
          onChange={handleChange}
          value={formState.company_id}
        />

        {/* <select onChange={(e) => (companies.company_id = e.target.value)}>
          {companyList.map((company) => (
            <option value={company._id}>{company.name}</option>
          ))}
        </select> */}
        <button type="submit">Create</button>
      </form>
      <Link to="/employees">Back</Link>
    </div>
  )
}
export default EmployeeCreate
