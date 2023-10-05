//forEach Higher order function
//no name for callback function

const coding = ['js', 'cpp', 'c', 'java']
coding.forEach(function (item) {
    console.log('coding: ', item);
})

const game = ['NFS', 'GTA', 'FIFA', 'COD']
game.forEach((item) => {
    console.log('Game: ', item);
})

const country = ['IN', 'AU', 'FR', 'SL', 'USA']

function print(item) {
    console.log(item)
}

country.forEach(print)

//parameters for forEach callback function - item, index, whole array
coding.forEach((item, index, arr) => {
    console.log(`index ${index} : ${item} - ${arr}`)
});

//iterating over objects inside an array
const language = [
    {
        languageName : "Javascript",
        languageFileName : "js"
    },
    {
        languageName : "Python",
        languageFileName : "py"
    },
    {
        languageName : "Java",
        languageFileName : "java"
    }
]

language.forEach( (item) => {
    console.log(item.languageName + " - " +item.languageFileName)
})