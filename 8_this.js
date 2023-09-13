const user = {
    username : "hitesh",
    price : 99,

    welcomeMessage : function() {
        console.log(`${this.username}, welcome back`)
        console.log(this)
    }
}

user.welcomeMessage()
user.username = "Robin"
user.welcomeMessage() //Robin 
//If we do not use this then it will only work when username="hitesh"
//But with the use of this it refers to ever current instance

console.log(this) //In node environment, it will return empty object because
//at this time there is no context in global

//If we console.log(this) in browser then it will return window as it is global
//object in browser


//this is not working in a function
function chai() {
    let username = "hitesh"
    console.log(this.username)
}
chai() //undefined