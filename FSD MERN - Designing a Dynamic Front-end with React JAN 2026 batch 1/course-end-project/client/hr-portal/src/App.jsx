import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Login from './components/Login'
import SignUp from './components/SignUp'
import HrDashboard from './components/HrDashboard'
import EmployeesDashboard from './components/EmployeesDashboard'
import ViewEmployee from './components/ViewEmployee'
import ViewProfile from './components/ViewProfile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2>Hr-Portal Application!</h2>


      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/hr-dashboard' element={<HrDashboard />} >
            <Route path='viewEmployee' element={<ViewEmployee />} />
        </Route>
        <Route path='/employee-dashboard' element={<EmployeesDashboard />} >
            <Route path='viewProfile' element={<ViewProfile />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
