const clock = document.getElementById('clock');

setInterval(function() {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString(); //to display time
},1000) // time will be updated every second 1000ms = 1 sec 