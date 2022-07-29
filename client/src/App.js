import './App.css'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Layout/Header'
import Home from './pages/Home'
import Companies from './pages/Companies'
import CompanyDetails from './components/Company/CompanyDetails'
import CompanyCreate from './components/Company/CompanyCreate'
import Employees from './pages/Employees'
import EmployeeCreate from './components/Employee/EmployeeCreate'
import EmployeeDetails from './components/Employee/EmployeeDetails'

function App() {
  // const [companies, setCompanies] = useState['']

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/company/:id" element={<CompanyDetails />} />
          <Route path="/company/create" element={<CompanyCreate />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/employees/:id" element={<EmployeeDetails />} />
          <Route path="/employee/create" element={<EmployeeCreate />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
