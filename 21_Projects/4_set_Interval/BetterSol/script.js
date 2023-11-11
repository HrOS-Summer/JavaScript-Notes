//generating random hex codes
const randomColor = () => {
    let hex = "0123456789ABCDEF";
    let color = "#";
    for (let i=0;i<6;i++) {
        color += hex[Math.floor(Math.random()*hex.length)];
    }
    return color;    
}

let intervalId; //byDefault - null
const startChangingColor = function() {
    if(!intervalId) { //if intervalId is null -> set values to intervalId
        intervalId = setInterval(changeColor, 1000);
    }    

    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
}

const stopChangingColor = function() {
    clearInterval(intervalId);
    intervalId = null; //flush out intervalId and stop overwritting it.
    //memory efficient
}

document.querySelector('#start').addEventListener('click', startChangingColor);
document.querySelector('#stop').addEventListener('click', stopChangingColor);
