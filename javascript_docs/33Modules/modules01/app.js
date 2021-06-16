import { calcAverage } from "./lib/module.js";

var grades = [9.5, 8.75, 9];

var average = calcAverage(grades);

console.log(`The average is ${average.toFixed(2)}`);
