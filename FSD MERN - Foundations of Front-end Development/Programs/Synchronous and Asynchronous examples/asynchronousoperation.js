var obj;
function startTask(){
    obj = setInterval(start,1000)
}
let i=0;
function start() {
    let dd = new Date();
    document.getElementById("output").innerHTML=i
document.getElementById("clock").innerHTML=dd
if(i%2==0){
    document.getElementsByTagName("body")[0].style.backgroundColor="orange"
    document.getElementById("output").style.color="RED"
}else {
    document.getElementsByTagName("body")[0].style.backgroundColor="pink"
    document.getElementById("output").style.color="GREEN"
}
    i++;
}
function stop() {
    clearInterval(obj)
}