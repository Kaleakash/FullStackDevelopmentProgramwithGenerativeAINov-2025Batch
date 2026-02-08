import { useDispatch, useSelector } from "react-redux";

function Employee() {
let employeeData = useSelector(gs=>gs.employee) // access employee values. 
let dispatch = useDispatch();       // dispatch 

let updateEmployee = ()=> {
    dispatch({type:"UPDATE_EMPLOYEE"}); // action is UPDATE_EMPLOYEE
}
    return(
        <div>
            <h3>Employee component</h3>
            <p>Id is {employeeData.id} name is {employeeData.name} and age is {employeeData.age}</p>
            <input type="button" value="Update Employee details"
            onClick={updateEmployee}/>
        </div>
    )
}

export default Employee;