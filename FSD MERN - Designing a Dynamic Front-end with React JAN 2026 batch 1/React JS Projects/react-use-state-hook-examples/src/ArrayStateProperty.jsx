import { useState } from "react"

function ArrayStateProperty() {
    // state is type of array
let [names,setNames]=useState(["Alice","Bob","Charlie"])    // array of string variable 
    let [fname,setFname]=useState("");                // string variable
let handleChange=(event)=>{
    //console.log("event called.")
    // event.target.name gives the name attribute of the input field
    // event.target.value gives the value entered in the input field
   // console.log(event.target.name+" "+event.target.value);
   setFname(event.target.value);
}
let addNames=()=>{
    console.log("Adding name "+fname);
    //setNames(fname);    // fname is string value replace all array values.
    //names.push(fname);   // adding fname to names array
    //setNames(names); 
    //let anotherTemp = names;    // names and anotherTemp both pointing to same array in memory deep copy
    // let tempName = [...names]; // copying names array to tempName array : shallow copy
    // tempName.push(fname);  // adding fname to tempName array
    // setNames(tempName);    // updating names array with tempName array
    // ...names is spared operator which will extract all array elements of names array
    // fname added to the extracted array elements and a new array is formed
    setNames([...names,fname]); // spread operator to add fname to names array
    setFname(""); // clear the input field after adding the name
}
    return(
        <div>
            <h2>Student names</h2>
            <input type="text" placeholder="Enter the name" name="fname" onChange={handleChange}
            value={fname}/>
            <input type="button" value="Add" onClick={addNames}/>
            <p>All names in string format {names}</p>
            <p>First name is {names[0]}</p>
            <p>Second name is {names[1]}</p>
            <p>Third name is {names[2]}</p>
            <h2>All names as list</h2>
            <ul>
                {names.map(name=><li>{name}</li>)}
            </ul>
            <br/>
            {names.map(n=><p>{n}</p>)}
        </div>
    )
}

export default ArrayStateProperty