import { useState } from "react";

function Students() {
let [snames,setSnames]=useState(["John","Alice","Bob","Mary","Alice"]);
let listOfStudents = snames.map((sname,index)=><li key={index}>{index}-{sname}</li>)
    
    return(
        <div>
            {snames}
            <ul>
                {listOfStudents}
            </ul>
            <hr/>
            <ul>
                {snames.map((sname,index)=><li key={sname+index}>{index}-{sname}</li>)}
            </ul>
        </div>
    )
}

export default Students;