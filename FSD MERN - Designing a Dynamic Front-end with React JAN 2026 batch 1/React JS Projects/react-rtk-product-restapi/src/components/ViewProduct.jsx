import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProductDetails } from "../slice/productSlice";
function ViewProducts() {
// global state variable 
let loadingValue  = useSelector(gs=>gs.productReducer.loading)
let productData = useSelector(gs=>gs.productReducer.products);
let messageValue = useSelector(gs=>gs.productReducer.message)

let dispatch = useDispatch(); // to call action method of slide in RTK 
useEffect(()=> {
    // calling automatically action function part of slice 
    dispatch(loadProductDetails())

},[messageValue])
    if(loadingValue){
        return <h2>Data Loading...</h2>
    }else {
        return(
            <div>
                <table border='1'>
                    <thead>
                        <tr>
                            <th>PId</th>
                            <th>PName</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productData.map(product=> 
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        ) 
    }

}

export default ViewProducts;