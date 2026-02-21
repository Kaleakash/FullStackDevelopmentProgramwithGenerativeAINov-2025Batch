import axios from "axios";
import { useEffect, useState } from "react";

function UsersComponent() {
let [usersData,setUsersData]=useState([]);
let [error,setError]=useState("");


useEffect(()=> {
    axios.get("https://dummyjson.com/users").then(
        result=>setUsersData(result.data.users)
    ).catch(
        error=>setError(error.message)
    )
},[])

return(
    <div>
        <ol>
        {
            usersData.map(user=> 
                <li key={user.id} role="userInfo">{user.firstName} {user.lastName}</li>
            )
        }
        </ol>
    </div>
)

}

export default UsersComponent;