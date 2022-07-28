import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <header className="App-header">HR Management Systems</header>
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
    </div>
  )
}

export default Header
