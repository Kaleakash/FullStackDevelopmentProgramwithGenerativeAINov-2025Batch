import { configureStore } from "@reduxjs/toolkit";
import productReducer from './slice/productSlice'

let storeRef = configureStore({
    reducer: {
        productReducer :productReducer
    }
})

export default storeRef;