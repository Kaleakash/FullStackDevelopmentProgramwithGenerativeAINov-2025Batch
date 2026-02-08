import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './Hello'
import Info from './Info'
import { useSelector } from 'react-redux'

function App() {
let fnameValue = useSelector(gs=>gs.fname)
  return (
    <>
      <h2>React with Redux Simple Application</h2>
      <p>Global state variable fname value is {fnameValue}</p>
      <Hello></Hello>
      <Info></Info>
    </>
  )
}

export default App
