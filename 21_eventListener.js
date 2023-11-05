const printer = document.getElementById('printer');
const speaker = document.getElementById('speaker');
const table = document.querySelector('#table');
const keyboard = document.querySelector('#keyboard');
const game = document.getElementById('game');
const headphone = document.getElementById('headphone');
const google = document.getElementById('google');

printer.onclick = function() {
    alert("Printer clicked");
}
//using onclick is not a good practice
//Instead use event listeners

//Best method is to use addEventListener


//Topics to cover
//type, timestamp, defaultPrevented
//target, toElement, srcElement, currentTarget
//clientX. clientY, screenX, screenY
//keyboard keys: alt ket, ctrl key etc.


speaker.addEventListener('mouseover', (e) => {
    alert("hovered");
}, false);  //By default: false

// Event Propagation - two context : 1. Event Public, 2. Event Capturing
//Event Propagation - bubbling concept: inside to outside

table.addEventListener("click", function(e) {
    console.log('table clicked!');
})

keyboard.addEventListener("click", (e) => {
    console.log("keyboard clicked!");
})

//In above example first keyboard and the table (inside -> outside)
//event propagation: img -> tr -> td -> table (in case of public (false))

//Event Capture - capturing the events from top to bottom of DOM tree
//Event capturing: outside -> inside (true)
game.addEventListener('click', (e) => {
    console.log('game clicked!');
}, true)

// table.addEventListener("click", function(e) {
//     console.log('table clicked!');
// }, true)

//to stop propagation
headphone.addEventListener("click", (e) => {
    
    console.log("Headphone Clicked");
    e.stopPropagation();
})

//preventDefault : prevent the default behaviour
google.addEventListener('click', function(e) {
    e.preventDefault(); //stops the link to open
    console.log('Google clicked!');
})








