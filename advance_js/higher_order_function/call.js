//higher_order_functions
//fuctions that take other functions as arguments or return functions as their result are called higher-order functions.
// function calculate(a,b,operations) {
//     return operations(a,b);

// }
// function add(x,y) {
//     return x+y;
// }
// function multiply(x,y) {
//     return x*y;
// }
// console.log(calculate(4,18,add));

// //.map
// let numbers=[1,2,3,4,5];
// let squares=numbers.map(function(number) 
// {
// return number*number;
// });
// console.log(squares);

//arrow function
// let numbers = [1, 2, 3, 4, 5];
// let squares = numbers.map((number) => number * number);
// console.log(squares);


//.filter
// let numbers = [1, 2, 3, 4, 5];
// let even=numbers.filter((number) => {
// return number%2==0
// }
// );

//reduce
// let numbers = [1, 2, 3, 4, 5];
// let total = numbers.reduce((sum, number) => {
//     return sum + number;
// })
// console.log(total);

// let numbers = [10, 20, 30, 40, 50];
// let total = numbers.reduce((max, number) => { 
//     return number > max ? number : max;
// });
// console.log(total);


//find
let students=[
    
        {id:1,name:"vikas",marks:30},
        {id:1,name:"vikas",marks:30},
        {id:1,name:"vikas",marks:30},
        {id:1,name:"vikas",marks:30},
        {id:1,name:"vikas",marks:30}
    
];
let student=students.find(s=>s.id==2);
console.log(student)
