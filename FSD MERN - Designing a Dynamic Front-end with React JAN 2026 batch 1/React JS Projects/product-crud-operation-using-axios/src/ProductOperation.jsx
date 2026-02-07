import axios from "axios";
import { useEffect, useState } from "react";
function ProductOperation() {
let [products,setProducts]=useState([]);        // array of object 
    let [product,setProduct]=useState({name:"",price:""}); //object name
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
let handleInputData= (event)=> {
    let {name,value}=event.target;
    //console.log(name+" "+value)
    setProduct({...product,[name]:value});  // common function to set pname and price form property 
}
let storeProduct = async (event)=> {
    event.preventDefault();
    //console.log(product);
    // logic to store the data in json form using axios 
    try{
        // post method to store the data
        // 1st parameter url and 2nd parameter is json data. 
    let result = await axios.post(URL,product)
    console.log(result);
    setMessage(result.statusText);

    }catch(error){
        console.log(error.message)
    }
    setProduct({name:"",price:""})
}
useEffect(()=> {
    loadAllProducts();
},[msg])
    return(
        <>
        <h2>Add Product</h2>
        <form onSubmit={storeProduct}>
                <input type="text" name="name" value={product.name}
                onChange={handleInputData} placeholder="Enter the Product Name"/><br/>
            <input type="text" name="price" value={product.price}
            onChange={handleInputData} placeholder="Enter the Product Price"/><br/>
            <input type="submit" value="Add Product"/>
        </form>
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