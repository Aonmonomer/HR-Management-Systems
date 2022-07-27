import { Link } from 'react-router-dom'

const CompanyDetails = (props) => {
  return (
    <div>
      <h1>This is the selected company details!</h1>
      <Link to="/companies">Back</Link>
    </div>
  )
}
export default CompanyDetails
