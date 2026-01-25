// normal global variable but it is not a state variable. 
let products = [
        {"pid":100,"pname":"Laptop","price":45000},
        {"pid":101,"pname":"Mobile","price":25000},
        {"pid":102,"pname":"Tablet","price":15000},
        {"pid":103,"pname":"Smart Watch","price":8000},
        {"pid":104,"pname":"Headphones","price":3000}
    ];

function Products() {
let productRow = products.map((product)=>
    <tr key={product.pid}>
        <td>{product.pid}</td>
        <td>{product.pname}</td>
        <td>{product.price}</td>
    </tr>
)
    return(
        <div>
            <h3>List Of Products</h3>
            <table border="1">
                <thead>
                <tr>
                    <th>Product ID</th>
                    <th>Product Name</th>
                    <th>Product Price</th>
                </tr>
                </thead>
                <tbody>
                {
                    productRow
                }
                </tbody>
            </table>
        </div>
    )
}

export default Products;