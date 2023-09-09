const tinderUser = new Object()  //Singleton object
const tinderUser2 = {} //non Singleton object

//two methods to create an object both objects are empty
//let's log the empty objects
console.log(tinderUser) //{}
console.log(tinderUser2) //{}

//Object inside object
const regularUser = {
    email : "someone@gmail.com",
    name : {
        userFullName : {
            firstName: 'John',
            lastName:'Doe'
        }
    }
}

console.log(regularUser.name.userFullName.firstName)

//combining two objects
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
const obj4 = {5: "e", 6: "f"}

const obj3 = {obj1, obj2} //Not a good practice, it will create an object place these two objects in it separately
console.log(obj3)

//correct methods
//Object.assign(target, source)
const obj5 = Object.assign({}, obj1, obj2, obj4)
console.log(obj5)
//If we do not place {} in target then also no problem but its a good practice to put {}
//If {} is not there all the values of object are stored in first argument, i.e. in obj1


//Method -2 : spread operator(...)
const obj6 = {...obj1, ...obj2}
console.log(obj6)

//Accessing keys and values of objects
//returns an array of keys and values
console.log(Object.keys(obj6))
console.log(Object.values(obj6)) 

console.log(Object.entries(obj6)) 
//stores each key-value pair in an array of array

//Array of objects
const users = [
    {
        id: 1,
        email: "hot@hotmail.com"
    },
    {
        id: 2,
        email: "cool@cotmail.com"
    }
]

console.log(users[0].email)

//check if entity is there is object or not
tinderUser2["name"] = "Jitesh"
tinderUser2["id"] = "123abc"
tinderUser2["age"] = 23
tinderUser2["isLoggedIn"] = false

console.log(tinderUser2.hasOwnProperty('isLoggedIn')) //returns true