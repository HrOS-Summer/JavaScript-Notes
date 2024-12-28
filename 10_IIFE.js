//Immediately Invoked Function Expression
//Sometimes we have file that has database connection
//and we want that database connection invoked immediately as soon as that file opens
 
//It also prevent problems(or pollution) caused by global variables
//These are two main reasons there can be other reason to use IIFE
//function invoked immediately

(function chai(){
    console.log('DB CONNECTED');
})();

//()()
//1st () - for function declaration
//2nd () - function call

//IIFE as Arrow function
( () => {
    console.log("DB2 CONNECTED");
}) ();
//Always put ; at the end else it will throw error as IIFE does not know where to stop

( (name) => {
    console.log(`Hello, ${name}`);  //ES6 template literals
} )('HrOS');