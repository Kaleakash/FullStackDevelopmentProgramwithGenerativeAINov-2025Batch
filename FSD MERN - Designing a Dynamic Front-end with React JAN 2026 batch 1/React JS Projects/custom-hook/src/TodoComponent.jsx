import useAxiosConsumeApi from "./useAxiosConsumeApi";

let URL = "https://jsonplaceholder.typicode.com/todos"
function TodoComponent() {
let {data,loading,error} = useAxiosConsumeApi(URL)


    if(loading){
        return <h2>Data loading</h2>
    }else {
        return(
        <div>
            <h2>Number of Todos area {data.length}</h2>
        </div>
        )
    }
}

export default TodoComponent;