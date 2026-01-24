import { useState } from "react";

function FunctionStyleComponent(props) {
let [name,setName] = useState("Akash") // state variable

let changeName = ()=> {
    setName("Akash Kale")
}
//changeName();
    return(
        <div>
            <p>This is function style component</p>
            <p>Name from state is {name} and id is {props.id} and desgination is {props.desg}</p>
            <input type="button" value="Change Name JS" onclick="changeName()"/>
            <input type="button" value="Change Name React JS" onClick={changeName}/>
        </div>
    )
}
export default FunctionStyleComponent;