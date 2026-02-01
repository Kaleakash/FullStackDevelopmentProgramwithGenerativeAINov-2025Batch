import { useState } from "react";
import AddTask from "./AddTask";
import DisplayTask from "./DisplayTask";

function TaskOperation() {          // parent component for AddTask and DisplayTask components 
let [tasks,setTasks]=useState([]);  // string array variable

let addTask = (taskValue)=> {
    setTasks([...tasks,taskValue]); // updating the tasks array variable
}
    return(
        <>
            <h3>Task Operation</h3>
            <AddTask passTaskToTaskOperation={addTask}></AddTask>
            <DisplayTask taskData = {tasks}></DisplayTask>
        </>
    )
}

export default TaskOperation;