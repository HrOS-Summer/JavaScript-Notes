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

console.log("smtp")
console.log("")
console.log(+"") //converts string to boolean

//----Number to String ------
let num = 48
let str = String (num)
console.log(str)
console.log(typeof str)

<<<<<<< HEAD
// ---------Operations---------
let val = 4
let negVal = -val //storing -ve of a value
console.log(negVal)

console.log(1 + "1") //String
console.log("1" + "1") //String
console.log("1" + 3)  //String
console.log("3" + 7 + 7) //String

console.log (1 + + "7") //Number
console.log("2" + + "2") //String
console.log("2" + + 2) //String
console.log(3 + 2 + "6") // 56 Number, String

console.log(4 - "1") //Number
console.log("6" - "3") //Number
console.log("5" - 4) //Number
=======
//A simple comment
>>>>>>> ab7015c06a0d4e7a93257e41c16398ef7115ace8
