import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Employees = () => {
  const [employees, setEmployees] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getEmployees = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/employees')
        console.log(res.data.employees)
        setEmployees(res.data.employees)
      } catch (err) {
        console.log(err)
      }
    }
    getEmployees()
  }, [])

  const showEmployee = (employee) => {
    navigate(`${employee._id}`)
  }

  const goToCreateEmployee = () => {
    navigate('/employee/create')
  }

  return (
    <div>
      <div>
        <h1>Employees in the systems: </h1>
        <Link to="/" id="employeesBackLink">
          Back
        </Link>
      </div>
      <div className="employee-grid">
        {employees.map((employee) => (
          <div
            className="employee-card"
            onClick={() => showEmployee(employee)}
            key={employee.id}
          >
            <img src={employee.image} alt={employee.name}></img>
            <h3>{employee.name}</h3>
          </div>
        ))}
      </div>
      <button id="goToNewEmployeeBtn" onClick={() => goToCreateEmployee()}>
        Create new employee
      </button>
    </div>
  )
}

export default Employees
