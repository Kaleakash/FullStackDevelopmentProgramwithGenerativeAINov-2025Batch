import React,{useEffect, useState} from "react"

function SimpleUseEffect() {
let [count,setCount] = useState(0)
let [count1,setCount1] = useState(0)
// simple useEffect without dependencies array
// it call first and every time when component re-renders
// useEffect(()=> {
//     console.log("Component Mounted - loaded..")
// })

// useEffect with dependencies array ie empty array
// it call only first time when component mounts
// useEffect(()=> {
//     console.log("Component Mounted - loaded..")
// },[])

// useEffect with dependencies array with specific state variable
// it call only count not for count1
// useEffect(()=> {
//     console.log("Component Mounted - loaded..")
// },[count])

useEffect(()=> {
    console.log("Component Mounted - loaded..SimpleUseEffect")


    return ()=> {
        console.log("Component Unmounted - cleanup..SimpleUseEffect")
    }
},[])
    return(
        <React.Fragment>
            <h2>useEffect Example</h2>
            <p>Count: {count} and Count1 : {count1}</p>
            <input type="button"
            value="Increment Count"
            onClick={() => setCount(count + 1)}
            />
            <input type="button"
            value="Increment Count1"
            onClick={() => setCount1(count1 + 1)}
            />
        </React.Fragment>
    )
}

export default SimpleUseEffect