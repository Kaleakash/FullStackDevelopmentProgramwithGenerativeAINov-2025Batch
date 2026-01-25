import { useState } from "react"

function BasicRendering() {
let isLoggedIn = useState(false)[0]; // it return array with 2 values
//let [isLoggedIn,setIsLoggedIn] = useState(true);

    if(isLoggedIn){
        return <div>Welcome John</div>
    }else {
        return <div>Welcome Guest User</div>
    }
}

export default BasicRendering