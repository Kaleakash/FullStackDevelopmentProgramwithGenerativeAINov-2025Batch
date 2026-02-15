import useCount from "./useCount";

function Counter(){

let {count,increment,decrement,reset}=useCount(100);


    return(
        <div>
            <h2>Simple Custom counter hook</h2>
            <p>Count value is {count}</p>
            <input type="button" value="Increment" onClick={increment}/>
            <input type="button" value="Decrement" onClick={decrement}/>
            <input type="button" value="reset" onClick={reset}/>
        </div>
    )

}

export default Counter;