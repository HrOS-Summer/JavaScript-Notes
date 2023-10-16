const books = [
    {
        title: 'The Hobbit', genre: 'Fiction', publish: 1981, edition: 2004
    },
    {
        title: 'The civil war', genre: 'History', publish: 1977, edition: 1993
    },
    {
        title: 'Diary of a young girl', genre: 'Biography', publish: 1992, edition: 2003
    },
    {
        title: 'World War2', genre: 'History', publish: 1985, edition: 2006
    },
]

const historyBooks = books.filter( (book) => book.genre === 'History')
console.log(historyBooks);

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//chaning - method chaning
const newNums = myNumbers.map( (num) => num * 10 ).map( (num) => num+1 ).filter( (num) => num >= 40);
console.log(newNums);
