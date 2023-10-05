//

const myNums = [1, 2, 3, 4, 5, 6, 7, 8];
const newNums = myNums.filter( (num) => num > 4); //here it will return implicitly as we have not used any scope
console.log( newNums );
//filter returns array

const Nums = myNums.filter( (num) => { //if we use {} scope, then we have to explicitly return value
    return num % 2 === 0;
})
console.log(Nums);

//Using forEach
myNums.forEach((num) => {
    if(num > 4)
        console.log(num)
});