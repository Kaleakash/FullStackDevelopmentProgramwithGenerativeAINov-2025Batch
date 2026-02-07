import axios from "axios";
import { useEffect, useState } from "react";
function ProductOperation() {
let [products,setProducts]=useState([]);
let [msg,setMessage]=useState("");
let [errorMsg,setErrorMsg]=useState();
let URL = "http://localhost:3000/products";
let loadAllProducts = async () => {
    try{
    let result = await axios.get(URL);
    console.log(result);
    setProducts(result.data);
    setMessage(result.status)
    }catch(error){
        //console.log(error.message)
        setErrorMsg(error.message)
    }
}
useEffect(()=> {
    loadAllProducts();
},[])
    return(
        <>
        <span style={{"color":"red"}}>{msg} {errorMsg}</span>
        <table border="1">
                <thead>
                    <tr>
                        <th>PId</th>
                        <th>PName</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(product=>
                        <tr>
                            <td>{product.id}</td>
                            <td>{product.name}</td>
                            <td>{product.price}</td>
                        </tr>
                    )}
                </tbody>
        </table>
        </>
    )
}

export default ProductOperation;