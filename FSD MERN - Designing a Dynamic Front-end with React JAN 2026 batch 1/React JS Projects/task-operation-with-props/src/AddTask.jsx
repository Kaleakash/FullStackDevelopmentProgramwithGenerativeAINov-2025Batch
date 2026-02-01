import { useState } from "react";

function AddTask(props) {
let [task,setTask]=useState("");    // local o Add Task ie state variable. 

let addTask = ()=> {
    console.log("Task to be added: "+task);
    props.passTaskToTaskOperation(task);    // passing the task value to parent component TaskOperation
    setTask(""); // clear the input field after adding the task
}

    return(
        <>
            <h3>Add Task</h3>
            <input type="text" placeholder="Add Task" name="task" 
            onChange={(e)=>setTask(e.target.value)} value={task}/>
            <input type="button" value="Add Task" onClick={addTask}/>
        </>
    )
}

export default AddTask;