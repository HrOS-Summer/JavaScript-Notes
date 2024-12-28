const cart = ["shoes", "pants", "kurta"];

const promise = createOrder(cart); //orderId

promise.then(function() {
    console.log(orderId);
    //proceedToPayment(orderId);
})
.catch(function(err) {
    console.log(err.message);
})

//Producer

function createOrder(cart) {
    const pr = new Promise(function(resolve, reject) { //Promise constructor
        if(!validCart(cart)) {
            const err = new Error("Cart is not valid");
            reject(err);
        }
        const orderId = "12345"
        if(orderId) {
            resolve(orderId);
        }
    });
    return pr;
}