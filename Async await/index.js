const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 6000)
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise is resolved");
    }, 4000)
});

// function getData() {
//     p.then(res => console.log(res));
//     console.log("Namaste JS");
// }

// getData()

// async function handlePromise() {
//     console.log("Hello world")
//     //JS engine waits for the promise to get resolved then only it will move to next line(in case of await)
//     const val  = await p;
//     console.log("Namaste JavaScript");
//     console.log(val);

// //Although we are reolving promise twice but both the results will be printed together. For the second time it will not wait again for 6sec.    
//     const val2  = await p;
//     console.log("Namaste JavaScript");
//     console.log(val);
// }

// handlePromise();

async function handlePromise2() {    
    
    const val  = await p;
    console.log("Namaste JavaScript");
    console.log(val);

   
    const val2  = await p2;
    console.log("Namaste JavaScript");
    console.log(val2);

    //here also both promises will get rsolved together
}

handlePromise2();

