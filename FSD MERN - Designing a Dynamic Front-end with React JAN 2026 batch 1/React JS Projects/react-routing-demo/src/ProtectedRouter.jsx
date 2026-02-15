import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./auth";

function ProtectedRouter(props){
//console.log(isAuthenticated)
    if(!isAuthenticated()){
        return <Navigate to="/login" />
    }
    return props.children;
}

export default ProtectedRouter;