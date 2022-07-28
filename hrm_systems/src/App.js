import logo from './logo.svg'
import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Companies from './components/Companies'
import { useState } from 'react'
import CompanyDetails from './components/CompanyDetails'
import CreateCompany from './components/CreateCompany'
import Employees from './components/Employees'
import CreateEmployee from './components/CreateEmployee'

function App() {
  // const [companies, setCompanies] = useState['']

  return (
    <div className="App">
      <header className="App-header">HR Management Systems</header>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/companies/:id" element={<CompanyDetails />} />
          <Route path="/createcompany" element={<CreateCompany />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/createemployee" element={<CreateEmployee />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
