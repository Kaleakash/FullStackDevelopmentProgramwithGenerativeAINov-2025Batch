import { useState } from "react";
let FirstComponent  = ()=><p>First Component</p>
let SecondComponent = ()=><h3>Second Component</h3>
function DynamicRendering() {
let [flag,setFlag] = useState(false);
let [msg,setMessage]=useState("Show Paragraph");
    return(
        <div>
            <input type="button" value={msg} onClick={()=>{
                setFlag(!flag);
                if(!flag){
                    setMessage("Hide Paragraph");
                }else{
                    setMessage("Show Paragraph");
                }
            }}/>
            {flag && <p>This is a dynamically rendered paragraph.</p>}

            {/* {!flag ? <FirstComponent/> : <SecondComponent/>} */}
        </div>
    )
}

export default DynamicRendering;