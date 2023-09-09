//Primitive data types - Stack
//Non-primitive - Heap

//Stack Example
let stud1 = "Harish"
let stud2 = stud1  //Here a copy of stud1 is passed to stud2 so any changes in stud2 will not effect the value stored in stud1
console.table([stud1, stud2])

stud2 = "Rishi"
console.table([stud1, stud2])

//heap example
let det1 = {
    name : "Harish",
    upi : "user@ybl"
}
console.log(det1)

let det2 = det1
det2["name"]="Rishi"; //this will change the value of both variables as the key value of det1 are stored in heap and a reference is passed to det1 and det2
console.log(det1)