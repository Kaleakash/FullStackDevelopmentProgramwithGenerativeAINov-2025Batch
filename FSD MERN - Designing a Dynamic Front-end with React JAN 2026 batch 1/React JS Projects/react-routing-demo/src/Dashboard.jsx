import { useNavigate } from "react-router-dom";

function Dashboard() {

let navigate = useNavigate();

let user = sessionStorage.getItem("user")
    return(
        <div>
            <h2>Welcome to Home Page {user}

                <input type="button" 
                value="logout"
                onClick={()=>{
                    sessionStorage.removeItem("user");
                    navigate("/login")


                }}
                />
            </h2>
        </div>
    )

}

export default Dashboard;