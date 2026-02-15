import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import TodoComponent from './TodoComponent'
import ProductComponent from './ProductComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Counter></Counter> */}
      <TodoComponent>S</TodoComponent>
      <hr/>
      <ProductComponent></ProductComponent>
    </>
  )
}

export default App
