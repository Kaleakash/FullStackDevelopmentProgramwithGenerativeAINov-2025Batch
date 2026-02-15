import { useNavigate } from "react-router-dom";

function Dashboard() {

let navigate = useNavigate();

    return(
        <div>
            <h2>Welcome to Home Page

                <input type="button" 
                value="logout"
                onClick={()=>navigate("/login")}
                />
            </h2>
        </div>
    )

}

export default Dashboard;