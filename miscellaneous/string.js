const name = "Hitesh"
const age = 27

text = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(text);

const playerName = new String('Virat');
console.log(playerName);

console.log(playerName[2]);

console.log(playerName.length); //length is not a method but a data property of String value (MDN)

const newText = playerName.toLocaleUpperCase()
console.log(newText); //here we are not modifying the original string
console.log(playerName.charAt(2)); //to get index value of a string
console.log(playerName.indexOf('a')); //to get the index of a
sentence = "Hello World World World";
console.log(sentence.lastIndexOf('World')); //to get index of last occurence

console.log(playerName.substring(0, 3)); //does not accept negative values
console.log(playerName.slice(-4, 4));

let word = "  Water  ";
console.log(word);
console.log(word.trim()); // trimStart() and trimEnd()

const url = "https://hitesh.com/hitesh%20chaudhary"
console.log(url.replace("%20", "-"));

console.log(url.includes('hitesh'));

let t = "Harkirat"
console.log(t.substr(2, 5)); //here 5 is no of characters, not index value

console.log(parseInt("44"));
console.log(parseInt("334asdf"));

console.log(parseFloat("55.6"));
console.log(parseFloat("55asdf"));