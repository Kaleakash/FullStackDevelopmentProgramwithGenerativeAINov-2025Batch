let initialState = {
    n:100,          // number type
    fname:"Akash" 
}
function reducer(state=initialState,action){

    // base upon action we do change on state variable 
    // using if or switch or other way 
    console.log("in reducer function")
    console.log(action)
    if(action.type=="INCREMENT_N"){
        // 1st parameter state object with all property, 2nd property name which you want to change
        // third property value. 
        return {...state,n:state.n+1}
        //return {...state,n:state.n+1,fname:"Vikash"}
    }
    if(action.type=="DECREMENT_N"){
        // 1st parameter state object with all property, 2nd property name which you want to change
        // third property value. 
        return {...state,n:state.n-1}
    }
    if(action.type=="CHANGE_FNAME"){
        // 1st parameter state object with all property, 2nd property name which you want to change
        // third property value. 
        return {...state,fname:"Vikash"}
    }
    return state;
}
export default reducer;