const start = document.querySelector('#start');

  const text = function() {
    console.log("HrOS", Date.now());
  }

  let startGen;
  start.addEventListener('click', function() {
    // Start the interval when the button is clicked
    startGen = setInterval(text, 2000);
  });

const stop = document.querySelector('#stop');
stop.addEventListener('click', function() {
    clearInterval(startGen);
    console.log("STOPPED!");
});