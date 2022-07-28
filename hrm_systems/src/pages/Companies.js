import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Companies = () => {
  const [companies, setCompanies] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getCompanies = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/companies')

        setCompanies(res.data.companies)
      } catch (err) {
        console.log(err)
      }
    }
    getCompanies()
  }, [])

  const goToCreateCompany = () => {
    navigate('/company/create')
  }

  return (
    <div>
      <div>
        <h1>Companies in the system: </h1>
      </div>
      <div className="company-grid">
        {companies.map((company) => (
          <div key={company.id}>
            <Link to={`/company/${company._id}`}>{company.companyName}</Link>
          </div>
        ))}
      </div>
      <button onClick={() => goToCreateCompany()}>Create new company</button>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Companies
