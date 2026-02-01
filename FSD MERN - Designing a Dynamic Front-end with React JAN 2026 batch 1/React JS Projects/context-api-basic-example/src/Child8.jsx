import { useContext } from "react";
import Child7 from "./Child7";
import MyContext from "./MyContext";

function Child8() {
let data = useContext(MyContext);

    return(
        <>
        <h2>Child8 Component</h2>
        <p>Value is in child8 component is {data.name} and age is {data.age}</p>
        <Child7></Child7>
        </>
    )
}

export default Child8;