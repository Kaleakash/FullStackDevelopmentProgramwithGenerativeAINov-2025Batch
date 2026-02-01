import { useState } from "react";
import AddTask from "./AddTask";
import TaskContext from "./TaskContext";

function TaskOperation() {
let [tasks,setTasks]=useState([]);

    return(
        <>
        {/* Value as tasks array object and setTasks function */}
        <TaskContext.Provider value={{tasks,setTasks}}>
            <h2>Task Operation</h2>
            <AddTask></AddTask>
        </TaskContext.Provider>
        </>
        
    )
}

export default TaskOperation;