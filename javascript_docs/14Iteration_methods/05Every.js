/*	*** Array.every() ***
	The every() method check if all array values pass a test, returning a boolean.
	This example check if all array values are larger than 18: */

// In this case we can omit the "index" and the "array"
	function myFunction(value, index, array) {
	return value > 18;
}

var numbers = [45, 4, 9, 16, 25];
var allOver18 = numbers.every(myFunction);
console.log(allOver18);
