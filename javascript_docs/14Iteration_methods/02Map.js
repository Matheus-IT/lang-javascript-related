/*	*** Array.map() ***
	The map() method CREATES a new array by performing a function on each array element.
	The map() method does not execute the function for array elements without values.
	The map() method does not change the original array.
	This example multiplies each array value by 2: */

// In this case we can omit the "index" and the "array"
function square(value, index, array) { 
	return value ** 2;
}

var numbers1 = [45, 4, 9, 16, 25];
var numbers2 = numbers1.map(square); //Take each element to the function square
console.log(numbers2);
