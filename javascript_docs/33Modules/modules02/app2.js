const calcAverage = require("./lib/module2.js");

var grades = [9.5, 8.75, 9];

var average = calcAverage(grades);

console.log(`The average is ${average.toFixed(2)}`);
