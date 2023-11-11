const body = document.querySelector('body');
const colors = ['red', 'blue', 'brown', 'white', 'yellow', 'green']
const colorChanger = function() {
    let randomColorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[randomColorIndex];
}

let changeColor;
const start = document.querySelector("#start");
start.addEventListener('click', function() {
    changeColor = setInterval(colorChanger, 1000);
});

const stop = document.querySelector('#stop');
stop.addEventListener('click', () => {
    alert("Color changer terminated");
    clearInterval(changeColor);    
})
