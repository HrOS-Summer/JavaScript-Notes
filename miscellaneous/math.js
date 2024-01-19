const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance);

const bal = balance.toString(); //now bal has all the properties and method available to string
console.log(bal);
console.log(typeof bal);

//100.00
console.log(balance.toFixed(2));

const num = 54.6467;
console.log(num.toPrecision(3));

const num2 = 46.8676
console.log(num2.toPrecision(3));

const num3 = 123.8676
console.log(num3.toPrecision(3));

const num4 = 1223.8676
console.log(num4.toPrecision(3));
console.log(num4.toPrecision(4));

const bigNum = 100000000
console.log(bigNum.toLocaleString()); //International standards
console.log(bigNum.toLocaleString('en-IN')); //Indian Standard

//MIN_SAFE_INTEGER
//MAX_SAFE_INTEGER
//isSafeInteger
//MAX_VALUE
//MIN_VALUE

console.log('\n---------------Maths LIB----------------\n');

console.log(Math.abs(-7)); //outputs +ve value
console.log(Math.round(4.4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(3, 8, 9, 7, 2, 5));
console.log(Math.max(3, 8, 9, 7, 2, 5));

console.log('\n---------Random--------\n');

console.log(Math.random()); //Range: 0.0... - 0.9...

console.log(Math.floor((Math.random() * 10))+1); //To get integer values only

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); 
//To get random integer values in a defined range