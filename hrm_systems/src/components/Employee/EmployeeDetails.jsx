import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const EmployeeDetails = () => {
  let navigate = useNavigate()
  const [employee, setEmployee] = useState({})
  const initialState = {
    name: '',
    SSN: '',
    email: '',
    position: '',
    birthdate: '',
    address: '',
    image: ''
  }
  const [formState, setFormState] = useState(initialState)
  let { id } = useParams()
  useEffect(() => {
    const getEmployeeById = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/api/employees/${id}`)
        console.log(res.data.employee)
        setEmployee(res.data.employee)
      } catch (err) {
        console.log(err)
      }
    }
    getEmployeeById()
  })

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    // do something with the data in the component state
    let res = await axios.put(
      `http://localhost:3001/api/employees/${id}`,
      formState
    )
    console.log(res)
    // clear the form
    setFormState(initialState)
    alert('You have successfully updated the company!')
  }
  const deleteEmployee = async () => {
    // do something with the data in the component state
    let res = await axios.delete(
      `http://localhost:3001/api/employees/${id}`,
      formState
    )
    navigate('/employees')
  }
  return (
    <div>
      <div id="employeeDetailsImageContainer">
        <img
          id="employeeDetailsImage"
          src={employee.image}
          alt={employee.name}
        ></img>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="employeeName">Employee Name:</label>
        <input
          type="text"
          id="name"
          onChange={handleChange}
          value={formState.name}
          placeholder={employee.name}
        />
        <label htmlFor="employeeSSN">Employee SSN:</label>
        <input
          type="text"
          id="SSN"
          onChange={handleChange}
          value={formState.SSN}
          placeholder={employee.SSN}
        />
        <label htmlFor="employeeEmail">Employee Email:</label>
        <input
          type="text"
          id="email"
          onChange={handleChange}
          value={formState.email}
          placeholder={employee.email}
        />
        <label htmlFor="employeePosition">Employee Position:</label>
        <input
          type="text"
          id="position"
          onChange={handleChange}
          value={formState.position}
          placeholder={employee.position}
        />
        <label htmlFor="employeeBirthdate">Employee Birthdate:</label>
        <input
          type="text"
          id="birthdate"
          onChange={handleChange}
          value={formState.birthdate}
          placeholder={employee.birthdate}
        />
        <label htmlFor="employeeAddress">Employee Address:</label>
        <input
          type="text"
          id="address"
          onChange={handleChange}
          value={formState.address}
          placeholder={employee.address}
        />
        <label htmlFor="employeeImage">Employee Image Url:</label>
        <input
          type="text"
          id="image"
          onChange={handleChange}
          value={formState.image}
          placeholder={employee.image}
        />
        <button id="updateEmployeeBtn" type="submit">
          Update employee profile
        </button>
      </form>
      <button id="deleteEmployeeBtn" onClick={() => deleteEmployee()}>
        Delete employee profile
      </button>
      <Link id="employeeDetailsBackLink" to="/employees">
        Back
      </Link>
    </div>
  )
}
export default EmployeeDetails
