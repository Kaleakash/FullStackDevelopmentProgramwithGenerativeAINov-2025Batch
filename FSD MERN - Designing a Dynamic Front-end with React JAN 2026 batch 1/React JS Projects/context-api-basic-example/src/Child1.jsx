import { useContext } from "react";
import Child4 from "./Child4";
import MyContext from "./MyContext";

function Child1() {
    // ready to consume data from context 
    // the child component can be any level. 
let data = useContext(MyContext);
    return(
        <>
        <h2>Child1 Component</h2>
        <p>Value is in child1 component is {data.name} and age is {data.age}</p>
        <Child4></Child4>
        </>
    )
}

export default Child1;