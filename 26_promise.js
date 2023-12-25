//creating promise
//Promise is an object
const promiseOne = new Promise(function(resolve, reject) {
    //Do async task
    //Ex - DB call, cryptography, network etc.
    setTimeout(() => {
        //console.log('Async task is completed');
        resolve() //connects resolve in arg of promise to then
    }, 1000);
})

//consuming promise - below code will execute only after execution of above code block(or after resolve())
promiseOne.then(function() { //then has direct connection to resolve
    //then has an anonymous function that receives value returned from promiseOne as an argument
    //console.log("Promise consumed");
})

//Promise without storing in a varable

new Promise(function(resolve, reject) {
    setTimeout(()=>{
        //console.log('Async task2');
        resolve();
    }, 1000);
    
}).then(function() {
    //console.log('Async Task2 resolved');
})

//Promise consumption - parameters of resolve are passed to then

const promiseThree = new Promise(function(resolve, reject) {
    setTimeout(function(){
        resolve({username : "HrOS-Summer", email : "21bcs5872@cuchd.in"});
    }, 1000);
});

promiseThree.then(function(user) {
    //console.log(user);
})

//chaining in Promise
const promiseFour = new Promise(function(resolve, reject) {
    setTimeout(function() {
        let error = false;
        if (!error){
            resolve({username : "HrOS", password : "12345"})
        }else {
            reject('ERROR : Something went wrong!'); //connects reject to catch
        }
    }, 1000)
});

promiseFour.then(function(user){
    console.log(user);
    return user.username;
}).then(function(username) {
    console.log(username);
}).catch((error) => {        //consumes reject
    console.log(error);
}).finally(() => {
    console.log("This is the end!");   //executes irrespective of whether there was a resolution or rejection</s>
});
