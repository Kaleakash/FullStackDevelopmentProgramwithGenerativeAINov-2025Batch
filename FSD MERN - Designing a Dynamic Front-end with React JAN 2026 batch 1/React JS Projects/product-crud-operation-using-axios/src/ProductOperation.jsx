// import axios from "axios";
// import { useEffect, useState } from "react";
// function ProductOperation() {
// let [products,setProducts]=useState([]);        // array of object 
// let [product,setProduct]=useState({name:"",price:""}); //object name
// let [msg,setMessage]=useState("");
// let [errorMsg,setErrorMsg]=useState();
// let [buttonValue,setButtonValue]=useState("Add Product");

// let URL = "http://localhost:3000/products";
// let loadAllProducts = async () => {
//     try{
//     let result = await axios.get(URL);
//     console.log(result);
//     setProducts(result.data);
//     setMessage(result.status)
//     }catch(error){
//         //console.log(error.message)
//         setErrorMsg(error.message)
//     }
// }
// let handleInputData= (event)=> {
//     let {name,value}=event.target;
//     //console.log(name+" "+value)
//     setProduct({...product,[name]:value});  // common function to set pname and price form property 
// }
// let storeOrUpdateProduct = async (event)=> {
//     event.preventDefault();
//     //console.log(product);
//     // logic to store the data in json form using axios 
//     try{
//         // post method to store the data
//         // 1st parameter url and 2nd parameter is json data. 
//     if(buttonValue=="Add Product"){
//     let result = await axios.post(URL,product)      // store new product 
//     console.log(result);
//     setMessage(result.statusText);
//     } else {
//     let result = await axios.put(URL+"/"+product.id,product)    // update product price or name using id 
//     console.log(result);
//     setMessage(result.statusText);
//     }

//     }catch(error){
//         console.log(error.message)
//     }
//     setProduct({name:"",price:""})
// }
// let deleteProduct = async (pid)=> {
//     console.log(pid)
//     let result = await axios.delete(URL+"/"+pid);
//     setMessage(result.statusText);
// }
// let setValueInFormToUpdate = async(updateProduct)=> {
//     //console.log(updateProduct);
//     setProduct(updateProduct);      // updateProduct local variable set to state variable ie product 
//     setButtonValue("Update Product");
// }
// useEffect(()=> {
//     loadAllProducts();
// },[msg])
//     return(
//         <>
//         <h2>Add Product</h2>
//         <form onSubmit={storeOrUpdateProduct}>
//                 <input type="text" name="name" value={product.name}
//                 onChange={handleInputData} placeholder="Enter the Product Name"/><br/>
//             <input type="text" name="price" value={product.price}
//             onChange={handleInputData} placeholder="Enter the Product Price"/><br/>
//             <input type="submit" value={buttonValue}/>
//         </form>
//         <span style={{"color":"red"}}>{msg} {errorMsg}</span>
//         <table border="1">
//                 <thead>
//                     <tr>
//                         <th>PId</th>
//                         <th>PName</th>
//                         <th>Price</th>
//                         <th>Delete</th>
//                         <th>Update</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {products.map(product=>
//                         <tr key={product.id}>
//                             <td>{product.id}</td>
//                             <td>{product.name}</td>
//                             <td>{product.price}</td>
//                             <td>
//                                 <input type="button" value="Delete"
//                                 onClick={()=>deleteProduct(product.id)}/>
//                             </td>
//                             <td>
//                                 <input type="button" value="Update"
//                                 onClick={()=>setValueInFormToUpdate(product)}/>
//                             </td>
//                         </tr>
//                     )}
//                 </tbody>
//         </table>
//         </>
//     )
// }

// export default ProductOperation;

import axios from "axios";
import { useEffect, useState } from "react";

const URL = "http://localhost:3000/products";

function ProductOperation() {

const [products, setProducts] = useState([]);
const [product, setProduct] = useState({name: "", price: "" });
const [msg, setMsg] = useState("");
const [errorMsg, setErrorMsg] = useState("");
const [buttonValue, setButtonValue] = useState("Add Product");


// Load all products
const loadAllProducts = async () => {
    try {
        const { data } = await axios.get(URL);
        setProducts(data);
    } catch (error) {
        setErrorMsg(error.message);
    }
};


// Handle input fields
const handleInputData = (event) => {
    const { name, value } = event.target;
    setProduct(prev => ({ ...prev, [name]: value }));
};


// Add or Update Product
const storeOrUpdateProduct = async (event) => {
    event.preventDefault();

    try {

        if (buttonValue === "Add Product") {
            console.log(product);
            await axios.post(URL, product);
            setMsg("Product Added Successfully");

        } else {

            await axios.put(`${URL}/${product.id}`, product);
            setMsg("Product Updated Successfully");
            setButtonValue("Add Product");

        }

        setProduct({ id: "", name: "", price: "" });
        loadAllProducts();

    } catch (error) {
        setErrorMsg(error.message);
    }
};


// Delete Product
const deleteProduct = async (pid) => {

    try {

        await axios.delete(`${URL}/${pid}`);
        setMsg("Product Deleted Successfully");
        loadAllProducts();

    } catch (error) {
        setErrorMsg(error.message);
    }

};


// Set values for update
const setValueInFormToUpdate = (updateProduct) => {

    setProduct(updateProduct);
    setButtonValue("Update Product");

};


// Load products on component mount
useEffect(() => {
    loadAllProducts();
}, []);


return (
<>
<h2>Product Management</h2>

<form onSubmit={storeOrUpdateProduct}>

<input
type="text"
name="name"
value={product.name}
onChange={handleInputData}
placeholder="Enter Product Name"
/>
<br/>

<input
type="text"
name="price"
value={product.price}
onChange={handleInputData}
placeholder="Enter Product Price"
/>
<br/>

<input type="submit" value={buttonValue}/>

</form>

<p style={{ color: "green" }}>{msg}</p>
<p style={{ color: "red" }}>{errorMsg}</p>

<table border="1">

<thead>
<tr>
<th>PId</th>
<th>PName</th>
<th>Price</th>
<th>Delete</th>
<th>Update</th>
</tr>
</thead>

<tbody>

{products.map((p) => (

<tr key={p.id}>

<td>{p.id}</td>
<td>{p.name}</td>
<td>{p.price}</td>

<td>
<button onClick={() => deleteProduct(p.id)}>
Delete
</button>
</td>

<td>
<button onClick={() => setValueInFormToUpdate(p)}>
Update
</button>
</td>

</tr>

))}

</tbody>

</table>

</>
);
}

export default ProductOperation;