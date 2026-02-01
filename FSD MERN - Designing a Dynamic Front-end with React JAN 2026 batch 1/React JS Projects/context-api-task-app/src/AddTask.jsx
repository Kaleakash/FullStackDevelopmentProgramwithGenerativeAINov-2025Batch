import { useContext, useState } from "react";
import TaskContext from "./TaskContext";
import DisplayTask from "./DisplayTask";

function AddTask() {
let contextRef = useContext(TaskContext);
let [task,setTask]=useState("");
let handleSubmit = (event)=> {
    event.preventDefault();
    console.log(task)
    // ready to do add the task
    // previousTask is local variable which hold previousTask data and task 2nd parameter add new task. 
    contextRef.setTasks(previousTask=>[...previousTask,task]);
    setTask("");
}
    return(
        <>
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" value={task}
                placeholder="Enter the Task" onChange={(e)=>setTask(e.target.value)}/>
                <input type="submit" value="Add Task"/>
            </form>
            <hr/>
            <DisplayTask></DisplayTask>
        </>
    )
}

export default AddTask;