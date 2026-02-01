function DisplayTask(props) {



    return(
        <>
            <h3>Display Task</h3>
            <ul>
                {props.taskData.map((task,index)=><li key={index}>{task}</li>)}
            </ul>
        </>
    )
}

export default DisplayTask;