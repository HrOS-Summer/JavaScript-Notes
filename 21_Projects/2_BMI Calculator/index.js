const form = document.querySelector('form');
//here we are not declaring height and weight outside the eventListner
//Reason : check doc in the folder

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    //value return a string 
    //to convert string to int, we use parseInt
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        //recommended way to check if input is number or not, use isNaN method
        results.innerHTML = `Please give a valid height ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)) {
        //recommended way to check if input is number or not, use isNaN method
        results.innerHTML = `Please give a valid height ${weight}`;
    }
    else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        //toFixed truncates to defined decimal place
        if(bmi < 18.6) {
            results.innerHTML = `<span>${bmi} You're underweight.<span>`;
        }
        else if(bmi >= 18.6 && bmi <= 24.9) {
            results.innerHTML = `<span>${bmi} You're normal.</span>`;
        }
        else {
            results.innerHTML = `<span>${bmi} You're overweight.</span>`;
        }
    }
})