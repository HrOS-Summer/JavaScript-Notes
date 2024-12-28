//callback hell
const cart = ["aloo", "baigan", "tamatar"]

createOrder(cart, function(orderId) {
    proceedToPayment(orderId, function(paymentInfo) {
        showOrder(paymentInfo, function() {
            updateWalletBalance();
        });
    });
});


//thenable  version of callbacks
createOrder(cart)
.then(function(orderId) {
    return proceedToPayment(orderId);
})
.then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
})
.then(function (paymetnInfo) {
    return updateWalletBalance(paymentInfo);
});

//arrow function
createOrder(cart)
    .then(order => proceedToPayment(order))
    .then(paymentInfo => showOrderSummary(paymentInfo))
    .then(paymentInfo => updateWalletBalance(paymentInfo))