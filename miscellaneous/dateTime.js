//Read about Temporal

const currentDate = new Date(); // Date - global class
// console.log(typeof currentDate); //object
// console.log(typeof Date);

//millisecond values are time from 1 Jan 1970 to current time

// console.log(currentDate.toString() + "  toString");
// console.log(currentDate.toDateString() + "  toDateString");
// console.log(currentDate.toISOString() + "  toISOString")
// console.log(currentDate.toLocaleString() + "  toLocaleString")
// console.log(currentDate.toLocaleDateString() + "  toLocaleDateString")
// console.log(currentDate.toLocaleTimeString() + "  toLocaleTimeString")

// console.log(currentDate.getTime()); //epoch timestamp in millisecond since 1 Jan 1970
// console.log(currentDate.getDate());
// console.log(currentDate.getMonth() + 1); //month starts from 0 to 11
// console.log(currentDate.getFullYear());

//Create own date
// let myCreatedDate = new Date(2023, 0, 12);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate2 = new Date(2023, 0, 12, 15, 3);
// console.log(myCreatedDate2.toLocaleString());

                            // mm-dd-yyyy
let myCreatedDate3 = new Date("01-14-2023");
//console.log(myCreatedDate3.toLocaleString());

                            // yyyy-mm-dd                 
let myCreatedDate4 = new Date("2023-01-16");
console.log(myCreatedDate4.toLocaleString());

//calculate time to execute sum function

let beforeDate = new Date();
let beforeTime = beforeDate.getTime();

function sum() {
    let a = 0;
    for(let i = 0; i<10000000; i++) {
        a = a + i;
    }
    return a;
}

let afterDate = new Date();
let afterTime = afterDate.getTime();

console.log(afterTime - beforeTime);

//Timestamp

const timestamp = Date.now();
console.log(Math.floor(timestamp/1000)); //converting milliseconds to seconds

//Custom Date
let newDate = new Date();
newDate.toLocaleString('default', {    
    weekday: "long",               //Ctrl+space - for suggestions                              
})
