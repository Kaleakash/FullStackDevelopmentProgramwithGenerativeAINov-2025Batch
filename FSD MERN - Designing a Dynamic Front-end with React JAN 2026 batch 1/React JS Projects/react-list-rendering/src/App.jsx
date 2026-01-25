import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Students from './Students'
import Products from './Products'
import InlineCSSComponent from './InlineCSSComponent'
import MyComponent from './MyComponent'

function App() {
 // comments in JS 

  return(
    <div>
      <h2>List Rendering with key attribute</h2>
      {/* <Students/>
      <hr/>
      <Products/> */}
      <InlineCSSComponent/>
      <MyComponent/>
    </div>
  )
}

export default App
