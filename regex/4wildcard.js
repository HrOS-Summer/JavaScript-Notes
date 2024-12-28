let difficultSpelling = "Mississippi";
let incorrectDifficultSpelling = "Mississipspi";

let myRegex = /s+/g;  //match characters that occur one or more times consecutively
let result1 = difficultSpelling.match(myRegex);
let result2 = incorrectDifficultSpelling.match(myRegex);

// console.log(result1);
// console.log(result2);

let crowd  = 'P1P2P3P4CCCP5P6';
let criminals = /C+/;
let caught = crowd.match(criminals);
//console.log(caught);


let soccerWord = "gooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/; //g occur once and o occur 0 or many times
//* - matches 0 or more occurences of preceding character

let r1 = soccerWord.match(goRegex);
let r2 = gPhrase.match(goRegex);
let r3 = oPhrase.match(goRegex);

//console.table([r1, r2, r3]);

let string = "titanic";
let regex = /t[a-z]*i/;    //greedy match
let regex2 = /t[a-z]*?i/;  //lazy match

let res1 = string.match(regex);
let res2 = string.match(regex2);

// console.log(res1);
// console.log(res2);

let gotText = "<h1>Winter is coming</h1>";
let gotRegex = /<.*>/;                //if we do not put . in <.*> then it will only return > because * expects a preceeding character
let gotRes = gotText.match(gotRegex);
//console.log(gotRes);

let lazyRegex = /<.*?>/;
let lazyResult = gotText.match(lazyRegex);
//console.log(lazyResult);


