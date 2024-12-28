//1.    . wild card

const str = "That is a humming bird";
const str2 = "I will hum this song";
const huRegex = /hu.../   // starts with hu and match 3 more characters

let result1 = str.match(huRegex);
//console.log(result1);


const example = "He will jump";
const reg = /.um/;

const reg2 = /.um./

let wildResult1 = example.match(reg);
let wildResult2 = example.match(reg2);
//console.log(wildResult2);


//2.  [] character set wild card
let bgRegex = /b[aiu]g/;  //b(a or i or u)g
let exString = "This code has a bug";
let exmString = "This is big";
let exmpString = "A random word baug"

// console.log(bgRegex.test(exString));
// console.log(bgRegex.test(exmString)); 
// console.log(bgRegex.test(exmpString));


let sampleString = "There is an error";
let bracketRegex = /[a-z]/ig; //extracts all characters in the string
let currentResult = sampleString.match(bracketRegex);
//console.log(currentResult);  

let sampleText = "The value of pi is 3.141592653 till 9 decimal places";
let alphaNumericRegex = /[1-9p-t]/ig
let specialRegex = /\w/g;
let resultText = sampleText.match(alphaNumericRegex);
//console.log(resultText);
//console.log(sampleText.match(specialRegex));


// regexp - /\w/g - is same as /[a-z0-9_]/g   (\/w/ - returns 1st charecter)
//  /\w/ does not match whitespaces
// /\W/ - excludes letters, numbers and _ (matches whitespaces and other characters)

//exclude the matched regexp  [^]
let quoteSample = "3 blind mice";
let excludeRegex = /[^0-9aeiou ]/ig;  //[^...] - negated character set (exclude any number, whitespace and vowel in this example)
let newResult = quoteSample.match(excludeRegex);
console.log(newResult);
