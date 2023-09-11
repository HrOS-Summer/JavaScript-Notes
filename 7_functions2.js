function Numbers(num1) {
    return num1
}

console.log(Numbers(200, 350, 798)) //justv pass the first argument

//If we are not sure about number of arguments user will pass then let user pass n number of 
//arguments using rest operator(...)
//rest operator - pack items in a bundle (like array)
function addCartValue(...num1) {
    return num1
} //returns array of values passed as argument to the function

console.log(addCartValue(20, 30, 56))

function restOperator(val1, val2, ...vals) {
    console.log("val1 = ",val1, "val2 = ",val2)
    console.log("vals = ",vals)
}
restOperator(25, 47, 56, 100, 67)


//Object handeling using functions
const user = {
    username: "Anushka",
    age: 22
}

function handeling(obj) {
    console.log(`Username is ${obj.username} and age is ${obj.age}`)
}
handeling(user)
//or pass each key-value pair

handeling({
    username: "Shubham",
    age: 20
})

//what if user passed different key that is not defined
function handle(obj) {
    if(obj !== Object) {
        console.log("Please pass an object")
        return
    }

    if(!obj["age"] || !obj["username"]){
        console.log("Please pass a defined key")
        return
    }

    console.log(`username is ${obj.username} and age is ${obj.age}`)
}

handle("lambu")

//Passing an array as argument
function returnSecondElement(getArray) {
    return getArray[1]
}

console.log(returnSecondElement([20, 35, 46, 20]))

//Hoisting

console.log(addOne(5))
function addOne(num) {
    return num+1
}

//console.log(addTwo(7))
const addTwo = function(num){
    return num+2
}
console.log(addTwo(7))

//In addOne function, it is accessible before declaration but addTwo which is
//declared using const can only be accessed after declaration of function
