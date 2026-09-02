//set timeout()
//particular time ke baad output display hoga
// console.log("start");
// setTimeout(() => {
//     console.log("execute now");
// }, 5000);
// console.log("stop");
//set interval()
let count=1;
let timeout=setInterval(()=>{
    console.log(count);
    count++;
    if(count==6){
        clearInterval(timer);
}
},5000);