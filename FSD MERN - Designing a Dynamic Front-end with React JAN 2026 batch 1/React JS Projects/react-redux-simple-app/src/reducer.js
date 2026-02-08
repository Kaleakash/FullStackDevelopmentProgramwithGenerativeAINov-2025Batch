let initialState = {
    n:100,          // number type
    fname:"Akash",
    employee:{id:100,name:"John",age:21},
    products:[
        {id:100,name:"TV",price:67000},
        {id:101,name:"computer",price:56000}
    ] 
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
    if(action.type=="DYNAMIC_INCREMENT_N"){
        // 1st parameter state object with all property, 2nd property name which you want to change
        // third property value. 
        console.log("in if")
        return {...state,n:state.n+parseInt(action.payload)}
    }

    if(action.type=="UPDATE_EMPLOYEE"){
        // 1st parameter state ie all property n,fname,employee and products 
        // 2nd parameter want to change employee ie object property which contains id,name and age 
        // 3rd parameter is another objects which is state.employee, employee property and new value can be 
        // static or dynamic 
            //return {...state,employee:{...state.employee,age:24}}
            //return {...state,employee:{...state.employee,age:24,name:"Jony"}}
            return {...state,employee:{...state.employee,age:24,name:"Jony",id:101}}
    }
    return state;
}
export default reducer;