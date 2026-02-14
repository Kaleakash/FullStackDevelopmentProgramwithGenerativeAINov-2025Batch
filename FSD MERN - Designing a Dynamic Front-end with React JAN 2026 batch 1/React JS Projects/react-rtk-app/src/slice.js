import { createSlice } from "@reduxjs/toolkit"

let simpleSlice = createSlice({
    name:"counter",
    initialState:{
        count:100,              // number 
        name:"Akash"            // string 
    },
    reducers:{
        // it can contains more than one actions. 
        increment(state){           // increment is consider as action type 
            state.count = state.count+1; 
        },
        decrement(state){           // decrement is consider as action type 
            state.count = state.count-1; 
        }
    }
})
export let {increment,decrement}=simpleSlice.actions;
export default simpleSlice.reducer;
