import useAxiosConsumeApi from "./useAxiosConsumeApi";

let URL = "https://dummyjson.com/products"
function ProductComponent() {
let {data,loading,error} = useAxiosConsumeApi(URL)


    if(loading){
        return <h2>Data loading</h2>
    }else {
        return(
        <div>
            <h2>Number of Product area {data.length}</h2>
            <ol>
                {
                    data.products.map((product,index)=><li key={index}>{product.title}</li>)
                }
            </ol>
        </div>
        )
    }
}

export default ProductComponent;