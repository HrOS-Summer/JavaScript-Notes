const fs = require('fs');

function kiratReadFile(cb) {
    fs.readFile("kirat.txt", "utf-8", function(err, data) {
        cb(data);
    });
}

function onDone(data) {
    console.log(data);
}

kiratReadFile(onDone);

// function kiratReadFile() {
//     return new Promise((resolve) => {
//         fs.readFile("./kirat.txt", "utf8", (err, data) => {
//             resolve(data);
//         })
//     });
// }

// function onDone(data) {
//     console.log(data);
// }

// kiratReadFile().then(onDone);

function kiratAsyncFunction() {
let p = new Promise(function(resolve) {
    resolve("hi there");
});
return p;
}

async function main() {
    const value = await kiratAsyncFunction();
    console.log(value);
}

main();