const myArr = [0, 1, 2, 3, 4, 5]
console.log(myArr);

console.log(myArr[0]); //indexing starts from zero

//In JS arrays are resizable and can contain elements with mix data types
//JS array-copy operations create shallow copies. Same reference to copied array

const arr1 = [1, "Rohit", "Lee", 100, 69.7];
const arr2 = arr1;

arr2[3] = "Arohi"
console.log(arr1[3]);

myArr.push(10); //adds an element to the end
console.log(myArr);

myArr.pop(); //removes last element

myArr.unshift(11); //add elements to the beginning of the array
myArr.shift(); //removes first element
//above two are expensive operations and usually not preferred

console.log(myArr);
//questionaire methods
console.log(myArr.includes(4));
console.log(myArr.indexOf(2)); //returns -1 if value does not exist

const newArr = myArr.join(); //binds the elements of an array and also converts them to string
console.log(newArr);
console.log(typeof newArr);

const theArray = [12, 13, 14, 56, 72, 80]
const subArray = theArray.slice(2, 5);

console.log("Sliced Array: ", subArray);
console.log("Original array: ", theArray);

const splicedArray = theArray.splice(2, 5);
console.log("Spliced Array: ", splicedArray);
console.log("Original Array: ", theArray);

//slice(start, end) -> start to (end-1) and do not modify the original array
//splice(start, end)  -> start to end and modifies the original array


//Array Merging
const fruits = ["Apple", "Banana", "Strawberry", "Mango"];
const vegetables = ["Potato", "Spinach", "Tomatao", "Cucumber"];

fruits.push(vegetables);
console.log(fruits);

//push method add vegetables as a single element to the end of fruits
fruits.pop();
const concatenatedArray = fruits.concat(vegetables);
console.log("Concatenated: ", concatenatedArray);

//Spread operator
const spreadedArray = [...fruits, ...vegetables];
console.log("Spreaded: ", spreadedArray);


//Multidimensional Array
const mArray = [1, 2, [4, 5,7], 8, 2, [5, [4, 7]]];
console.log(mArray.length);
console.log(mArray[5][1][1]);

//Flatten m-dimensional array in single dimension
const flattenedArray = mArray.flat(Infinity); //At what depth you want to flatten the array 
//1, 2, 3, or infinity
console.log(flattenedArray);


//some extras

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hariom")); //string converted to array

console.log(Array.from({name: "Friend"}));
//returns empty array
//because it is not able to convert an object directly to an array
//so we need to specify whether key or value to be converted to array


let r1 = 21
let r2 = 23
let r3 = 27

const formedArray = Array.of(r1, r2, r3) //vars to array
console.log(formedArray);


//Array destructuring: unpack values from arrays into distinct variables
let [z1, z2] = [10, 20];
console.log(z2);

let [m, n, ...rest] = [2, 5, 7, 11, 13];
console.log(m);
console.log(n);
console.log(rest); //array of remaining elements
