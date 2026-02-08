import { useDispatch } from "react-redux";
import DecrementN from "./DecrementN";

function IncrementN() {

let dispatch = useDispatch();   // this hook help us to call reducer. 

let incrementNValue = ()=> {
    console.log("event fired")
    dispatch({"type":"INCREMENT_N"});   // it call reducer function and it display action type and payload (optional)
}

    return(
        <div>
            <h2>Increment N Value</h2>
    <input type="button" value="Increment N" onClick={incrementNValue}/>
    <DecrementN></DecrementN>
        </div>
    )
}

export default IncrementN;