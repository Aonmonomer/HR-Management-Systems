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
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }
  const handleSubmit = async (event) => {
    event.preventDefault()
    // do something with the data in the component state
    let res = await axios.put(
      `http://localhost:3001/api/companies/${id}`,
      formState
    )
    console.log(res)
    // clear the form
    setFormState(initialState)
  }
  const deleteCompany = async () => {
    // do something with the data in the component state
    let res = await axios.delete(
      `http://localhost:3001/api/companies/${id}`,
      formState
    )
    navigate('/companies')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          onChange={handleChange}
          value={formState.companyName}
          placeholder={company.companyName}
        />
        <label htmlFor="companyPhone">Company Phone:</label>
        <input
          type="text"
          id="companyPhone"
          onChange={handleChange}
          value={formState.companyPhone}
          placeholder={company.companyPhone}
        />
        <label htmlFor="companyUrl">Company Url:</label>
        <input
          type="text"
          id="companyUrl"
          onChange={handleChange}
          value={formState.companyUrl}
          placeholder={company.companyUrl}
        />
        <label htmlFor="companyAddress">Company Address:</label>
        <input
          type="text"
          id="companyAddress"
          onChange={handleChange}
          value={formState.companyAddress}
          placeholder={company.companyAddress}
        />
        <button type="submit">Update company profile</button>
      </form>
      <button onClick={() => deleteCompany()}>Delete company profile</button>
      <Link to="/companies">Back</Link>
    </div>
  )
}
export default EmployeeDetails
