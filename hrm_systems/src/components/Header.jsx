import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/" className="link">
        Home
      </Link>
      <Link to="/companies" className="link">
        Companies
      </Link>
      <Link to="/employees" className="link">
        Employees
      </Link>
    </nav>
  )
}

export default Header
