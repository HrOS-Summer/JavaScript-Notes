//"use strict"; // treat all code as newer version
 
//In vs code we actually use node JS and in browser js
const accountID = "21BCS5872" //cannot be reassigned or redeclared
let accountNumber = "12130848" 
var password = "Ggs@678" // reassigned, redeclared, global scope

city = "Jaipur" //does not work in strict mode
let state; //undefined
let temp = null; //not undefined but contains no value

console.log(typeof city)
console.log(typeof(city))

console.table([accountID, accountNumber, password, city, state]);

//type conversion

let score = "33"
let scoreInNumber = Number(score)
console.log(typeof score)
console.log(typeof scoreInNumber)

//But
let id = "123abc"
let idNum = Number(id)
console.log(typeof idNum); //Number
console.log(idNum) //NaN - Not a number

//------To Boolean--------
let myName = "" 
let boo = Boolean(myName) //false
console.log(boo);

let yourName = "Lk"
let secondBoo = Boolean(yourName) //true
console.log(secondBoo)

//----Number to String ------
let num = 48
let str = String (num)
console.log(str)
console.log(typeof str)