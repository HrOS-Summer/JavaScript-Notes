const promise = new Promise(function(resolve, reject) {
    setTimeout(() => {
        let error = true;
        if(!error) {
            resolve("Data Loaded!");
        }else{
            reject("Error loading data");
        }
    }, 1000)
})

async function consumePromise() {
    try {
        const response = await promise;
        console.log(response);
    } catch(error) {
        console.log(error);
    }
}

consumePromise()