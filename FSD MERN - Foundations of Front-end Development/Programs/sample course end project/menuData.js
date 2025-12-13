let cartInfo=[];
function showCartData() {
    console.log(cartInfo.length)
    document.getElementById("menu-item").style.display="none"
    document.getElementById("cart-item").style.display="inline-block"
    cartInfo.forEach(cartData=> {
        let div = document.createElement("div")
        let divContent = document.createTextNode(cartData)
        div.appendChild(divContent);
        document.getElementById("cart-item").appendChild(div);
    })
}
function loadFakeData() {
    document.getElementById("cart-item").style.display="none"
    document.getElementById("menu-item").style.display="inline-block"
    fetch('https://dummyjson.com/recipes')
.then(res => res.json())
.then(result=> {
    //console.log(result.users)
    result.recipes.forEach(menu=> {
        let div = document.createElement("div")
        let divContent = document.createTextNode(menu.name)
        div.addEventListener("click",()=> {
            console.log(menu.name)
            let result = cartInfo.find(cartItem =>cartItem==menu.name)
            if(result==undefined){
                cartInfo.push(menu.name)
                alert("Item Added in cart")
            }else {
                alert("Item already present in cart")
            }
            
        })
        div.appendChild(divContent);
        //document.getElementsByTagName("body")[0].appendChild(div)
        document.getElementById("menu-item").appendChild(div);
    })
});  
}