import { useContext } from "react";
import TaskContext from "./TaskContext";

function DisplayTask() {

let contextRef = useContext(TaskContext);
    return(
        <>
        <ol>
            {contextRef.tasks.map((tt,index)=><li key={index}>{tt}</li>)}
        </ol>
        </>
    )
}

export default DisplayTask;