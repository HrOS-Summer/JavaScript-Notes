// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
//         const data = await response.json(); //string to json
//         console.log(data);
//     }catch(error) {
//         console.log(error);
//     }
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json();
})
.then((data) => console.log(data))
.catch((error) => console.log(error));