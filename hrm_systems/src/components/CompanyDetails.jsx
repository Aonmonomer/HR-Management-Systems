import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CompanyDetails = (props) => {
  const [company, setCompany] = useState('')

  let { id } = useParams()

  useEffect(() => {
    const getCompanyById = async () => {
      try {
        let res = await axios.get(`http://localhost:3001/api/companies/${id}`)
        console.log(res.data.company)
        setCompany(res.data.company)
      } catch (err) {
        console.log(err)
      }
    }
    getCompanyById()
  }, [])

  return (
    <div>
      <h1>This is the selected company details!</h1>
      <h3>Company Name: {company.companyName}</h3>
      <h3>Company Phone: {company.companyPhone}</h3>
      <h3>Company Url: {company.companyUrl}</h3>
      <h3>Company Address: {company.companyAddress}</h3>
      <h2>What would you like to do? </h2>
      <button>Update company profile</button>
      <button>Delete company profile</button>
      <Link to="/companies">Back</Link>
    </div>
  )
}
export default CompanyDetails
