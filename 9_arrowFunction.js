(parameters) => {} //syantax of arrow function

//Arrow function can be stored in a variable
const printName = () => {
    console.log("Tushil")
}

printName()

const chai = () => {
    let username = "hitesh"
    console.log(this) //again {} (empty object)
    console.log(this.username) //undefined
}

chai()

//Implicit return
const addTwo = (num1, num2) => num1 + num2 //no need to write return or use {}
//the function declaration should be one-liner
console.log(addTwo(4, 9));

const mul = (num1, num2) => (num1 * num2) //we can wrap in () 
console.log(mul(20, 67));

//return an object
const returnUser = () => {username: "hitesh"}  //undefined
console.log(returnUser());
const returnUsername = () => ({username:"hitesh"}) //we need to wrap an object in () while 
//returning
console.log(returnUsername());

const myArray = [3, 9, 7, 2, 4]
myArray.forEach(function () {})