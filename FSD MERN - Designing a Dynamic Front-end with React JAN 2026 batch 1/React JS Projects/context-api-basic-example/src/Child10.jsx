import { useContext } from "react";
import MyContext from "./MyContext";

function Child10() {
let data = useContext(MyContext);

    return(
        <>
        <h2>Child10 Component</h2>
              <p>Value is in child10 component is {data.name} and age is {data.age}</p>
        </>
    )
}

export default Child10;