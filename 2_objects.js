//singleton - Object.create
//object literals


//symbol
const mySym = Symbol("key1")

//object literals - key value
const JsUser = {
    name: "Hitesh",
    "surname" : "Singh",
    0 : "Prez",
    isLoggedIn : false,
    lastLoginDays : ["Monday", "Friday"],
    
}

//in above object, name, isLoggedIn and lastLoginays are tracked as String

//accessing objects
console.log(JsUser.lastLoginDays)
console.log(JsUser["lastLoginDays"]) //square notation
 
//surname cannot be accessed by . operator as it is declared as a String
console.log(JsUser["surname"])