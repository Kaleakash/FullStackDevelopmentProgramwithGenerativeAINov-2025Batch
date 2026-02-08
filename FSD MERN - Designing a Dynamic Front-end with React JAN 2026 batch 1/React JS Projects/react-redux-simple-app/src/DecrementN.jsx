import { useDispatch } from "react-redux";

function DecrementN() {

let dispatch = useDispatch();   // this hook help us to call reducer. 

let decrementNValue = ()=> {
    console.log("event fired")
    dispatch({"type":"DECREMENT_N"});   // it call reducer function and it display action type and payload (optional)
}

    return(
        <div>
            <h2>Decrement N Value</h2>
    <input type="button" value="DecrementN" onClick={decrementNValue}/>
        </div>
    )
}

export default DecrementN;