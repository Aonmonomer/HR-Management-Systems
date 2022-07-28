import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const CreateEmployee = () => {
  const [newEmployees, setNewEmployees] = useState([])
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

  useEffect(() => {
    const getNewCompanies = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/companies')
        console.log(res.data)
        setNewCompanies(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getNewCompanies()
  }, [])

  const handleChange = (event) => {
    setFormState({ ...formState, [event.target.id]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    // do something with the data in the component state
    let res = await axios.post('http://localhost:3001/api/companies', formState)
    console.log(res)
    // clear the form
    setFormState(initialState)
  }

  return (
    <div>
      <h2>Create New Company</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="companyName">New Company Name:</label>
        <input
          type="text"
          id="companyName"
          onChange={handleChange}
          value={formState.companyName}
        />
        <label htmlFor="companyPhone">New Company Phone:</label>
        <input
          type="text"
          id="companyPhone"
          onChange={handleChange}
          value={formState.companyPhone}
        />
        <label htmlFor="companyUrl">New Company Url:</label>
        <input
          type="text"
          id="companyUrl"
          onChange={handleChange}
          value={formState.companyUrl}
        />
        <label htmlFor="companyAddress">New Company Address:</label>
        <input
          type="text"
          id="companyAddress"
          onChange={handleChange}
          value={formState.companyAddress}
        />
        <button type="submit">Create</button>
      </form>
      <Link to="/companies">Back</Link>
    </div>
  )
}
export default CreateEmployee
