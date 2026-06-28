import { Route, Routes } from 'react-router-dom'
import './App.css'
import Login from './components/Login'
import SignUp from './components/SignUp'
import AdminDashboard from './components/AdminDashboard'
import CustomerDashboard from './components/CustomerDashboard'

function App() {
  

  return (
    <>
    <h2>Capstone Project App!</h2>   

    <Routes>
      <Route path='' element={<Login/>}></Route> 
       <Route path='/signUp' element={<SignUp/>}></Route> 
      <Route path='/admin-home' element={<AdminDashboard/>}></Route> 
      <Route path='/customer-home' element={<CustomerDashboard/>}></Route> 
    </Routes> 
    </>
  )
}

export default App
