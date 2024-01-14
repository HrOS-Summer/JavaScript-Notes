function findSum(n) {
    let ans = 0;
    for (let i = 1; i<=n; i++) {
        ans = ans + i;
    }
    return ans;
}

function findSumTill100() {
    console.log(findSum(100));
}

// setTimeout(findSumTill100, 1000);
// console.log("This is printed immediately");


//Part 2
//File Reading
const fs = require('fs');
fs.readFile('a.txt', 'utf8', (err, data) => {
    console.log(data);
})

console.log("Hello");

let b = 0;
for(let j = 0; j<1000000000; j++) {
    b++;
}

console.log("Finally");