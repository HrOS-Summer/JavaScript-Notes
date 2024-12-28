// A higher order function is a function that takes one or more functions as arguments, or returns a function as its result.

// There are several different types of higher order functions like map and reduce.

//Given an array of radius of circles. Calculate area, circumference and diameter

const radius = [3, 4, 6, 12];

//Method - 1 
const calculateArea = function(radius) {
    const area = [];
    for(let i = 0; i<radius.length; i++) {
        area.push(Math.PI * radius[i] * radius[i])
    }
    return area;
}

const calculateCircumference = function(radius) {
    const circumference = [];
    for(let i = 0; i<radius.length; i++) {
        circumference.push(2 * Math.PI * radius);
    }
    return circumference;
}

const calculateDiameter = function(radius) {
    const diameters=[];
    for(let i = 0; i<radius.length; i++) {
        diameters.push(2 * radius);
    }
    return diameters; 
}

//Method - 2
//Higher order function
//Modular

function area(radius) {
    return Math.PI*radius*radius;
}

function circumference(radius) {
    return 2*Math.PI*radius;
}

function diameter(radius) {
    return 2*radius;
}

//logic is a callback function 
const calculate = function (radius, logic) {
    const result=[]
    for(let i = 0; i<radius.length; i++) {
        result.push(logic(radius[i]));
    }
    return result;
}

//console.log(calculate(radius, diameter));


//Array prototype

Array.prototype.calculate = function (logic) {
    const result=[]
    for(let i = 0; i<radius.length; i++) {
        result.push(logic(radius[i]));
    }
    return result;
}

//now we can use this as an array method
const areas = radius.calculate(area);
console.log(areas);
