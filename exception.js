//exception handling
//handling error
// try {
//     let a = 10;
//     let b = 0;      
//     let c = a/b;
//     console.log(c);
// } catch (error) {
//     console.log("Error occurred:", error.message);
// }
//custom error
function checkAge(age) {
    if(age<18) {
        throw new Error("not");

    }
    console.log("yes");

}
try {
    checkAge(15);
} catch (error) {
    console.log("Error occurred:", error.message);
}