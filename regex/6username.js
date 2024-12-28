/* 
Create a username validator
Requirements:
1) If there are numbers, they must be at the end.
2) Letters can be lowercase and uppercase.
3) At least two characters long. Two letter names can't have numbers.
*/

let username = "JackOfAllTrade9";
let userCheck = /^[a-zA-Z]{2,}\d*$/;
let result = userCheck.test(username);
console.log(result);

//Explanation
//Start with alphabet
//{min, max} if max not specified then it is infinite
//after two alphabetical characters there can numbers
//$ - in the end