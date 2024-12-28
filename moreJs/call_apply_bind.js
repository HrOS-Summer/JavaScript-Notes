//refer notes for theory
const user = {
    firstname: "Harish",
    lastname: "Reddy"
}

let printUserDetail = function (hometown, state) {
    console.log(this.firstname + " " + this.lastname + " from " + hometown + ", "+ state);    
}

//call and apply are invoked immediately
printUserDetail.call(user, "Arrah", "Bihar"); //arguments are passed individually

printUserDetail.apply(user, ["Arrah", "Bihar"]); //arguments are passed as elements of array

const callUser = printUserDetail.bind(user, "Arrah", "Bihar");
callUser();               //bind creates a copy of original function and binds to the object
                            //used to invoke the new function later
const person = {
    name: "Alice",
    age: 24
}

function greet(name, age) {
    console.log(`Hello ${name}. You are ${age} years old.`);    
}

greet.call(person, person.name, person.age);

greet.apply(person, [person.name, person.age]);

const greetUser = greet.bind(person);
greetUser(person.name, person.age);
