//async function always returns a promise
//on returning normal value, async will automatically wrap it into a promise and return a promise

const p = new Promise((resolve, reject) => {
    resolve("Promise resolved!");
});

async function getData() {
    return p;
}

const dataPromise = getData();

dataPromise.then((res) => console.log(res));
