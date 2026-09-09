//scope
//global scope
// let a = 10;
// function display() {
//     console.log(a);
// }
//function scope
// function display() {
//     let a = 20;
//     console.log(a);
// }
//block scope
// if(true)
// {
//     let x=10;
//     let y=20;
//     console.log(x);
//     console.log(y);
// }
//hoisting
// console.log(name);
// var name = "vikas";
//tdz start
// let age=20;
//tdz end
// the period between entering a scope and intialize by let and const is called temporal dead zone,when we assign the value from there tdz starts and ends where we stop declaring
//closure
//it will remember the inner variable even after the function is executed
function outer() {
    let count = 0;
    function inner() {
        count++;
        console.log(count);
    }
    return inner;
    
}
let i=outer();
i();
i();
i();