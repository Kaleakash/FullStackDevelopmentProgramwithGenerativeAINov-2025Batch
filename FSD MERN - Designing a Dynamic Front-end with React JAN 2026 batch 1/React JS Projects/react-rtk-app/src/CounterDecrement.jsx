import { useDispatch } from "react-redux";
import { decrement} from "./slice";

function CounterDecrement() {

    let dispatch = useDispatch();

let decrementCounterValue = ()=> {
    dispatch(decrement())
}
    return(
        <div>
            <h3>Counter Increment</h3>
            <input type="button"
            value="Decrement counter"
            onClick={decrementCounterValue}/>
        </div>
    )
}

export default CounterDecrement;