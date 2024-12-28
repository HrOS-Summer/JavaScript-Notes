//Regular expressions are patterns used to match character combinations in strings.

//In JavaScript, regular expressions are also objects.

//Constructing a RegExp

//Method-1 : Using Regular Expression Literal
const myRegex = /this/
const myRegex2 = /a+bc/

//In this case no need to put strings in "" or ''

//Regular expression literals provide compilation of the regular expression when the script is loaded.

//If the regular expression remains constant, using this can improve performance.

//Method-2 : Calling the constructor function of the RegExp object
const re = new RegExp("ab+c");

//Using the constructor function provides runtime compilation of the regular expression.
//Use the constructor function when you know the regular expression pattern will be changing, or you don't know the pattern and are getting it from another source, such as user input.

