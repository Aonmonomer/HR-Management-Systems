import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Companies = (props) => {
  const [companies, setCompanies] = useState([])
  let navigate = useNavigate()

  useEffect(() => {
    const getCompanies = async () => {
      try {
        let res = await axios.get('http://localhost:3001/api/companies')
        console.log(res.data.companies)
        setCompanies(res.data.companies)
      } catch (err) {
        console.log(err)
      }
    }
    getCompanies()
  }, [])

  const showCompany = (company) => {
    navigate(`${company.id}`)
  }

  return (
    <div className="company-grid">
      <h1>Companies in the system: </h1>
      <div>
        {companies.map((company) => (
          <div onClick={() => showCompany(company)} key={company.id}>
            <h3>{company.companyName}</h3>
          </div>
        ))}
      </div>
      <Link to="/">Back</Link>
    </div>
  )
}

export default Companies
