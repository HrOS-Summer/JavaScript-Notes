//[{}, {}, {}] Array of objects
// const nums = [2, 6, 9, 8]
// for (const num of nums) { //for-of loop
//     console.log(num);
// }

// const greeting = 'Hello World!'
// for (const eachWord of greeting){
//     console.log(`Each word is ${eachWord}`);
// }

// Maps in JS : stores elements in key-value form
// Keys must unique
// const map = new Map()
// map.set('IN', "India")
// map.set('USA', "United States of America")
// map.set('SL', "Sri Lanka")
// map.set('IN', "India")
// console.log(map);

// for(const elements of map) {
//     console.log(elements);
// }

// for(const [key, value] of map) { //destructuring of array 
//     console.log(key, ':', value);
// }

// //for-of does not iterate on objects
// //Objects does not implement an iteration protocol, and so objects are not directly iterable
// const myObject = {
//     js : 'JavaScript',
//     cpp : 'C++',
//     rb : 'Ruby',
//     py : 'Python'
// }
// console.log();

// for-in loop works on Objects
// for (const key in myObject) {
//     console.log(`Extension of ${myObject[key]} is ${key}`);  //prints the keys
// }

// const programming = ['js', 'rb', 'java', 'cpp', 'py', 'go']

// //for-in on array
// for (const key in programming) {
//     console.log(key);
// }//In array key are the indices starting from 0

// for (const key in programming) {
//     console.log(programming[key]);
// }

// //for-in on maps
// for (const key in map) {
//     console.log(key);
// } //Nothing will be printed, no error msg. Maps are non-iterable using for-in

