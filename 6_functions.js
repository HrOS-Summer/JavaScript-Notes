function addTwoNumbers(number1, number2) {
    console.log(number1 + number2)
}

addTwoNumbers(5, -7)
addTwoNumbers(3, null)
addTwoNumbers(5, "8")

function userLoginMessage(username) {
    return `${username} just logged in.`
}

console.log(userLoginMessage("Hariom"))
console.log(userLoginMessage(""))
console.log(userLoginMessage()) //undefined

function updatedUserLoginMessage(username) {
    if(username === undefined) {    //or if(!username) or if(!undefined) or if(!""), !false = true
        return "Please enter a username"
    }

    return `${username} just logged in.`
}

console.log(updatedUserLoginMessage())
//undefind or empty string is treated false in JS 

function userLogin2(username = "Sam") {  //default username
    if(!username) {
        return 'Please enter a username'
    }
    return `${username} just logged in.`
}

console.log(userLogin2())