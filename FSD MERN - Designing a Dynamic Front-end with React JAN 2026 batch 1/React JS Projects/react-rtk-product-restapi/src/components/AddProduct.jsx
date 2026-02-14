import { useState } from "react";
import { addProductInJsonFile } from "../slice/productSlice";
import { useDispatch } from "react-redux";

function AddProduct() {
let [product,setProduct]=useState({"name":"","price":""})

let dispatch = useDispatch();
let addProduct = (event)=> {
    event.preventDefault();
    //console.log(product)
    dispatch(addProductInJsonFile(product))     // calling function as well as passing product data
    setProduct({"name":"","price":""})
}

let handleFormData = (event)=> {
    let {name,value}=event.target;
    setProduct({...product,[name]:value})
}

    return(
        <div>
            <h2>Add Product</h2>
            <form onSubmit={addProduct}>
            <input type="text" name="name" value={product.name}
            placeholder="Enter pname" 
            onChange={handleFormData}/><br/>

            <input type="text" name="price" value={product.price}
            placeholder="Enter price" 
            onChange={handleFormData}/><br/>
            <input type="submit" value="Add Product"/>
            </form>
        </div>
    )
}

export default AddProduct;