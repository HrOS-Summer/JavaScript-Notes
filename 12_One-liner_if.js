//Shorthand if statement
const balance = 1000

if(balance > 500) console.log("test");

const balance2 = 800;
if(balance2 > 500) console.log("test"), //can use comma for multiple lines
console.log("test2");

//But this if technique reduces readability

//falsy values: false, 0, -0, BigInt 0n, "", null, unefined, NaN
//truthy values: true, "0", 'false', ' ', [], {}, function(){}, 

userEmail = ["alisha@khalisa.com", "tinka@dinka.com"]
if(userEmail.length === 0){
    console.log("Array is empty");
}

const emptyObj = {}
if(Object.keys(emptyObj)) {
    console.log("Object is empty");
}

//Nullish Coalescing Operator (??): To handle null, undefined
let val1;
val1 = null ?? 10
console.log(val1);

let val2;
val2 = undefined ?? 15
console.log(val2);

let val3;
val3 = null ?? 14 ?? 67 ?? 70
console.log(val3); //Takes 1st value