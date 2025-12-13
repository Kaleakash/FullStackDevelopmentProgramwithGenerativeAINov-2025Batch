function validate() {
    //alert("event fired")
    let emailId = document.getElementById("emailId").value 
    // if(emailId.length==0){
    //     alert("Enter the emailId")
    //     return false;
    // }else 
    // 
    if(emailId=="admin@gmail.com"){
        alert("successfully login")
        return true;
    }else { 
        alert("failure try once again")
        return false;
    }
    
}