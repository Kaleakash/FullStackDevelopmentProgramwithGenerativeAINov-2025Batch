import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SimpleUseEffect from './SimpleUseEffect'

function App() {
let [flag,setFlag]=useState(true)
let [msg,setMsg]=useState("Hide");
  

  return (
    <>
      <h2>Toggle Component Visibility</h2>
      <input type='button' value={msg} onClick={() => {
        setFlag(!flag)
        setMsg(flag ? "Show" : "Hide")
      }}/>
      {flag && <SimpleUseEffect />} 
    </>
  )
}

export default App
