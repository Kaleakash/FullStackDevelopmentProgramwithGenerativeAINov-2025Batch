import './App.css'
import ViewProducts from './components/ViewProduct'
import AddProduct from './components/AddProduct'
function App() {


  return (
    <>
      <h2>Product CRUD Operation using RTK</h2>
      <AddProduct></AddProduct>
      <ViewProducts></ViewProducts>
    </>
  )
}

export default App
