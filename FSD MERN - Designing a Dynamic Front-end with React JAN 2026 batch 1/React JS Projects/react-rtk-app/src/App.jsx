import { useSelector } from 'react-redux'
import './App.css'
import Counter from './Counter'
import CounterIncrement from './CounterIncrement'
import CounterDecrement from './CounterDecrement'

function App() {
let name = useSelector(gs=>gs.simpleReducer.name)  

  return (
    <>
      <h2>RTK Simple Example teaching by Mr {name}</h2>
      <Counter></Counter>
      <CounterIncrement></CounterIncrement>
      <CounterDecrement></CounterDecrement>

    </>
  )
}

export default App
