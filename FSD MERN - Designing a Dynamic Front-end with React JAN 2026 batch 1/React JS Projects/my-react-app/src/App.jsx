import FunctionStyleComponent from "./FunctionStyleComponent";
import ClassStyleComponent from "./ClassStyleComponent";
import { useState } from "react";
function HeaderComponent() {
  return <div>This is Header Component</div>
}
function FooterComponent() {

  return <div>This is Footer Component</div>
}
function Employee() {
  
  let name = "John"     // local variable 
  let age = 21;

  return(
    <div>
      <h2>Employee Component</h2>
      <p>id is {name} and age is {age}</p>
    </div>
  )
}
function MainComponent() {
  return (<div>
          <h4>This is Main Component</h4>
          <Employee></Employee>
        </div>)
}
function App() {
let [desgination,setDesignation] = useState("Software Engineer");
  //return <div>Welcome to React JS created by Akash</div>
  // return(<div> 
  //         <HeaderComponent></HeaderComponent>
  //         <h2>This is App Component</h2>
  //         <p>This is App Component Description</p>
  //         <MainComponent></MainComponent>
  //         <MainComponent></MainComponent>
  //         <MainComponent></MainComponent>
  //         <FooterComponent/>
  //       </div>
  //       )

  return(
    <div>
      <h2>Types of Component</h2>
      <FunctionStyleComponent id="100" desg={desgination}></FunctionStyleComponent>
      <ClassStyleComponent id="101" desg={desgination}></ClassStyleComponent>
    </div>
  )
}

export default App;