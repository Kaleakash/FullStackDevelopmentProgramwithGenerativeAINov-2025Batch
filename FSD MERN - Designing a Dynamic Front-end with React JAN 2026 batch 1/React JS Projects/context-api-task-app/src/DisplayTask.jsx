import { useContext } from "react";
import TaskContext from "./TaskContext";

function DisplayTask() {

let contextRef = useContext(TaskContext);

let deleteTask = (index)=> {
    console.log("delete task function called.. with index as "+index)
    // filter return new array with filter condition. 
    let filterTaskData = contextRef.tasks.filter((task,i)=>i!=index);
    contextRef.setTasks(filterTaskData);
}
    return(
        <>
        <ul>
            {contextRef.tasks.map((tt,index)=><li key={index}>{tt}

            <input type="button" value="Delete" onClick={()=>deleteTask(index)}/>

            </li>)}
        </ul>
        </>
    )
}

export default DisplayTask;