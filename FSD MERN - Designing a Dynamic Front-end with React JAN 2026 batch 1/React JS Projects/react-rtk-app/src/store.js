import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

let storeRef = configureStore({
    reducer:{
        simpleReducer:reducer
    }
})

export default storeRef;