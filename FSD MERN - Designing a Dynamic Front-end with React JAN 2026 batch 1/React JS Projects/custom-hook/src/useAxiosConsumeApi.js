import axios from "axios";
import { useEffect, useState } from "react";

function useAxiosConsumeApi(url){

let [data,setData]=useState([]);
let [loading,setLoading]=useState(true);
let [error,setError]=useState(null)


let loadData = async() => {
    try{
        let response = await axios.get(url);
        setData(response.data);
    }catch(error){
        setError(error.message)
    }finally {
        setLoading(false);
    }  
}
useEffect(()=> {
    loadData();
},[])

return {data,loading,error}
}

export default useAxiosConsumeApi;