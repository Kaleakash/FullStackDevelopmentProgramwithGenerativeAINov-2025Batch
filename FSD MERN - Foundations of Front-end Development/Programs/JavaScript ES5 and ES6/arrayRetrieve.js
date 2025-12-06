let num = [1,2,3,4,5,6,7,8,9,10]
console.log(num);   // output as string format separated by ,
console.log(num.join(" ")); // separated by space 
console.log("retrieve element one by one using for loop")
for(let i=0;i<num.length;i++){
    console.log("value is "+num[i])
}
console.log("retrieve value one by one using for in loop - get index ")
for(let i in num){
    console.log("value is "+num[i])
}
console.log("retrieve the value using of loop - get the value")
for(let n of num){
    console.log("value is "+n)
}