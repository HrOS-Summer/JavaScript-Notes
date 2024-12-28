//if we use ^ outside [] then it can be used to match starting index characters.
//returns null otherwise

let race = "Cal and Rak both like racing";
let race2 = " and Cal Rak both like racing";
let calRegex = /^Cal/;
let calResult = race.match(calRegex);
let calResult2 = race2.match(calRegex);
// console.log(calResult);
// console.log(calResult2);

//$ - match ending index characters;

//** To match / use \ before / 
let gotText = "<h1>Winter is coming</h1>";
let lazyRegex = /<\/h1>$/;     
let lazyResult = gotText.match(lazyRegex);
//console.log(lazyResult);


//Match all numbers (digits)
//Shorthand character class - /\d/ - match the first digit in the string
let numString = "Mount Everest is 8848m high";
let numRegex = /\d/g;
let numResult = numString.match(numRegex);
//console.log(numResult);

// /\D/ - match all non-numbers (including whitespace)
let nonNumRegex = /\D/g;
let nonNumbers = numString.match(nonNumRegex);
//console.log(nonNumbers);

let noOfNonNumberCharacters = nonNumbers.length;
//console.log(noOfNonNumberCharacters);



