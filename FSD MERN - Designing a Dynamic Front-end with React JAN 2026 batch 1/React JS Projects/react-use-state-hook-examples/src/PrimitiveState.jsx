import { useState } from "react";

function PrimitiveState() {
let n = 100;    // local variable if we do any changes and doesn't reflect in the UI or re-render the component
console.log(useState(1))     // it return array 0 index default value and 1 index is function to update the value
let [id,setId]=useState(100);  // state variable
let [name,setName]=useState("Rahul");
let [salary,setSalary]=useState(45000.50);
let [isActive,setIsActive]=useState(true);
let changeValue = () => {
    // n= n+1;
    // console.log("Value of n after increment: "+n);
    // id = id+1;   // this will not update the state variable
    // console.log("Value of id after increment: "+id);
    setId(id+1);   // correct way to update the state variable
    setName("Rahul Kumar");
    setSalary(salary+5000);
    setIsActive(!isActive);
}
    return(
        <div>
            <h3>Primitive State Example</h3>
            <p>Employee details  id is {id} name is {name} salary is {salary} isActive is {isActive?"Yes":"No"}</p>
            <input type="button" value="Increment" onClick={changeValue}/>
        </div>
    )
}

export default PrimitiveState