import { createSlice } from "@reduxjs/toolkit"

let simpleSlice = createSlice({
    name:"counter",
    initialState:{
        count:100,              // number 
        name:"Akash"            // string       in memory data. 
    },
    reducers:{
        // it can contains more than one actions. 
        increment(state){           // increment is consider as action type 
            state.count = state.count+1; 
        },
        decrement(state){           // decrement is consider as action type 
            state.count = state.count-1; 
        },
        dynamicIncrement(state,action){
            //console.log(state)
            //console.log(action)       // type of action ie function name and payload 
            state.count = state.count + parseInt(action.payload)
        }
    }
})
export let {increment,decrement,dynamicIncrement}=simpleSlice.actions;
export default simpleSlice.reducer;
