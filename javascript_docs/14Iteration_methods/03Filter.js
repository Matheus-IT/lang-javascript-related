/*	*** Array.filter() ***
	The filter() method creates a new array with array elements that passes a test.
	This example creates a new array from elements with a value larger than 18: */

// In this case we can omit the "index" and the "array"
function myFunction(value, index, array) {
	return value > 18;
} 

var numbers = [45, 4, 9, 16, 25];
var over18 = numbers.filter(myFunction);
console.log(over18);
