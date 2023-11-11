setTimeout(() => {
    console.log("Uploaded Successfully!");
}, 6000); //Executes after 6sec of loading the webpage once

//Pass by reference
const greet = () => {
    console.log("Good Morning");
}
setTimeout(greet, 2000); // Do not pass as greet()

// setInterval(() => {
//     console.log("Love you");
// }, 4000) //executes continuously at an interval of 4sec


const changeText = function() {
    document.getElementById('text').innerHTML = "Text changed";
}
const changeMe = setTimeout(changeText, 4000);
//clearTimeout(changeMe); //stops setTimeout

document.querySelector('#stop').addEventListener("click",
    function() {
        clearTimeout(changeMe); //stops setTimeout
        alert("STOPPED");
    }
)