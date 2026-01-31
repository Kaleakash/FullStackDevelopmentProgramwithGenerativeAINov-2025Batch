import { useState } from "react";
function ProductOperations() {
let [product,setProduct]=useState({"pid":0,"pname":"","price":0,"quantity":0});
let [products,setProducts]=useState([]); // array of product objects
let handleChange=(event)=>{
    let {name,value}=event.target;
    //console.log(name+"  "+value);   
    setProduct({...product,[name]:value}); 
    // 1st parameter is existing object, 2nd parameter is the updated key value pair
}
let handleSubmit=(event)=>{
    event.preventDefault();
    console.log(product)
    // 1st parameter is existing array, 2nd parameter is the new object to be added
    let found = products.find(p=>p.pid==product.pid);
    if(found){
            alert("Product with ID "+product.pid+" already exists.");
    }else {
        setProducts([...products,product]);
    }
    setProduct({"pid":0,"pname":"","price":0,"quantity":0})
}
    return (
        <>
            <h2>Product Operation</h2>
            <form onSubmit={handleSubmit}>
                <label>Product ID:</label>
                <input type="number" name="pid" onChange={handleChange} value={product.pid}/><br/>
                <label>Product Name:</label>
                <input type="text" name="pname" onChange={handleChange} value={product.pname}/><br/>
                <label>Product Price:</label>
                <input type="number" name="price" onChange={handleChange} value={product.price}/><br/>
                <label>Product Quantity:</label>
                <input type="number" name="quantity" onChange={handleChange} value={product.quantity}/><br/>
                <input type="submit" value="Add Product"/>
            </form>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((p,index)=><tr key={index}>
                        <td>{p.pid}</td>
                        <td>{p.pname}</td>
                        <td>{p.price}</td>
                        <td>{p.quantity}</td>
                    </tr>)}
                </tbody>
            </table>
        </>
    )
}

export default ProductOperations;