import { useDispatch } from "react-redux";
import { increment } from "./slice";

function CounterIncrement() {

    let dispatch = useDispatch();

let incrementCounterValue = ()=> {
    dispatch(increment())
}
    return(
        <div>
            <h3>Counter Increment</h3>
            <input type="button"
            value="Increment counter"
            onClick={incrementCounterValue}/>
        </div>
    )
}

export default CounterIncrement;