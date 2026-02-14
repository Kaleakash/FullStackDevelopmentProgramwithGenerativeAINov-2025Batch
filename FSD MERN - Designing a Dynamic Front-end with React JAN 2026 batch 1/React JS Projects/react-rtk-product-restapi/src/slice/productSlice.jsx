import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"
let URL = "http://localhost:3000/products";
export let loadProductDetails = createAsyncThunk("product/loadProductsDetails",async()=> {
    let response = await axios.get(URL);
    return response.data;
})

export let addProductInJsonFile = createAsyncThunk("product/addProductInJsonFile",async(product)=> {
    let response = await axios.post(URL,product);
    return response.data;
})

let productSlice = createSlice({
    name:"product",
    initialState:{
        products:[],            // global state variable. 
        loading:false,
        message:""
    },
    reducers:{},        // in memory means in array 
    // handle asynchronous life cycle for promise object 
    // resolved : fullfil 
    // rejected : rejected 
    // process : pending 
    extraReducers:(builder)=> {
        builder.
        addCase(loadProductDetails.fulfilled,(state,action)=> {
                //console.log("fullfill")
                state.loading= false;
                //console.log(action)
                state.products= action.payload;     // data store in product array retrieve from json-server with help of axios 
        }).addCase(loadProductDetails.rejected,(state,action)=> {
                //console.log("rejected")
                state.loading= false;
        }).addCase(loadProductDetails.pending,(state,action)=> {
                //console.log("pending")
                state.loading= true;
        }).
        addCase(addProductInJsonFile.fulfilled,(state,action)=> {
                console.log("fullfill")
                state.loading= false;
                state.message= action.payload;
                //console.log(action)
                //state.products= action.payload;     // data store in product array retrieve from json-server with help of axios 
        }).addCase(addProductInJsonFile.rejected,(state,action)=> {
                console.log("rejected")
                //state.loading= false;
        }).addCase(addProductInJsonFile.pending,(state,action)=> {
                console.log("pending")
                state.loading= true;
        })
    }
})
export default productSlice.reducer;