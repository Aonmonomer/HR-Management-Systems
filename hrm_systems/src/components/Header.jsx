import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav>
      <Link to="/" class="link">
        Home
      </Link>
      <Link to="/companies" class="link">
        Companies
      </Link>
      <Link to="/employees" class="link">
        Employees
      </Link>
    </nav>
  )
}

export default Header
