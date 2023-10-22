//reduce is used in calculating total of cart values
const myNums = [1, 2, 3, 4];
// const myTotal = myNums.reduce()
// console.log(myTotal) // undefined

const initialValue = 0;
const sumWithInitial = myNums.reduce(
    (accumulator, currentVal) => accumulator + currentVal,
    initialValue
);

console.log(sumWithInitial);