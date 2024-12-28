//RegExp methods

const myString = "This pet home has cats and dogs";
const reg1 = /cat/

//test() method - returns a boolean for the match
//console.log(reg1.test(myString));

//this mehtod returns true if exact match found (case-sensitive)
//to ignore the case sensitivity we can use i flag in the RegExp

const reg2 = /Dog/i      
//console.log(reg2.test(myString));

//or operator |

const reg3 = /dog|cat/
//console.log(reg3.test(myString));

//match method - returns the matched expression
            //   returns null if match not found
let extractStr = "Extract the word 'coding' from the string";
let codingRegex = /coding/;
let result = extractStr.match(codingRegex);
//console.log(result);


let str = "Twinkle twinkle little star";
let regex = /twinkle/gi
console.log(str.match(regex));
//  /g - glbal (match all occurences)  /i - ignore casing



