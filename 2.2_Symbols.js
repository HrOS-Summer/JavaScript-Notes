//Symbol is primitive like Number or Character not an Object
const sym1 = Symbol()
const sym2 = Symbol('foo')

console.log(sym1)
console.log(sym2)
console.log(typeof sym1)

//Symbol is used for uniqueness
//Symbol is used to create unique keys
//Strings
let name = "Ricky"
let name2 = "Ricky"
console.log(name === name2) //true

//Symbol
let sym3 = Symbol('An identifier')
let sym4 = Symbol("An Identifier")
console.log(sym3 === sym4); //false because they are different symbols and the value of symbol is unique

console.log('-----------------------------yha dekho-----------------------------');
const k1 = Symbol('se')
const k2 = Symbol('se')
myObj = {};
myObj[k1] = "Harry"
myObj[k2] = "Sejal"
myObj["name"] = "Harish"
myObj['age'] = 21

console.log(myObj);
console.log(myObj[k1]);
console.log(k1);
console.log([k1]);
console.log('k1');

console.log(myObj.k2); //throw an error cause . searches for a string
//for a symbol we use []

//Symbols are ignored in for-in loop
console.log('------------------------------------');
for(key in myObj){
    console.log(key, myObj[key]);
}

console.log('------------------------------------');
//Stringify : converting object to JSON
//Here also Symbols are ignored
console.log(JSON.stringify(myObj));