const fs = require("fs");

// fs.writeFileSync("./test.txt", "This is JS");
// fs.writeFile("./test.txt", "This is JS");

// const contacts = fs.readFileSync("./contacts.txt", "utf-8");
// console.log(contacts);

// fs.readFile("./contacts.txt", "utf-8", (err, result) => {
//     if(err) {
//         console.error("Error encountered", err.message);
//     } else {
//         console.log(result);
        
//     }
// });


//appendFileSync - instead of overwritting a file it appends/adds content to the 

fs.appendFileSync("test.txt", `\nI am Ronny`);