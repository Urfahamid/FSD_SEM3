//exception handling
//handling error
try {
    let a = 10;
    let b = 0;      
    let c = a/b;
    console.log(c);
} catch (error) {
    console.log("Error occurred:", error.message);
}