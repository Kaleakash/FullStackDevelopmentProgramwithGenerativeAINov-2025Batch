
import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import {Welcome} from './Welcome'
import { AboutUs } from './AboutUs'
import { ContactUs } from './ContactUs'
import Login from './Login'
import Dashboard from './Dashboard'
import { NotFoundComponent } from './NofFoundComponent'
import ProtectedRouter from './ProtectedRouter'

function App() {

  return (
    <>
      <h2>React Router Example</h2>

      <Link to="/">Home</Link> |
      <Link to="/aboutUs">AboutUs</Link> |
      <Link to="/contactUs">Contactus</Link> |
      <Link to="/login">Login</Link> |
      <hr/>
      <Routes>
        <Route path='/' element={<Welcome/>}></Route>
        <Route path='/aboutUs' element={<AboutUs/>}></Route>
        <Route path='/contactUs' element={<ContactUs/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route  path='/home' element={
              <ProtectedRouter>
                    <Dashboard/>
              </ProtectedRouter>
          }>
        </Route>
        <Route path='*' element={<NotFoundComponent/>}></Route>
      </Routes>
    </>
  )
}

export default App
