//singleton - Object.create
const tinderUser = new Object(); //singleton object
//object literals
//keys in objects are treated as string


//symbol
const mySym = Symbol("key1") //symbol datatype

//object literals - key value
const JsUser = {
    name: "Hitesh",
    "surname" : "Singh",
    0 : "Prez",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"],
    //mySym : "myKey1"     //not a symbol anymore but a String
}

const JsUser2 = {
    name : "Ravish",
    [mySym] : "key2" //Syntax to add symbol to objects otherwise it will be treated as a string
}

//in above object, name, isLoggedIn and lastLoginays are tracked as String

//accessing objects
// console.log(JsUser.lastLoginDays)
// console.log(JsUser["lastLoginDays"]) //square notation
 
console.log(JsUser.surname);

// console.log(typeof mySym)
// console.log(typeof JsUser.mySym)
// console.log(JsUser2[mySym]) //symbol can only be accessed by square notation
// console.log(typeof JsUser2[mySym])

//freeze object
Object.freeze(JsUser2); //Now this object cannot be modified
//JsUser2.name = "Rathi"
//console.log(JsUser2)

//function in object
JsUser.greeting = function() {
    //console.log(`Hi ${this.name}`)  
}

//console.log(JsUser.greeting) //here function is not executed just reference is passed
//console.log(JsUser.greeting()) //here function is passed

//console.log(JsUser);
const values = JSON.stringify(JsUser);
console.log(values);

