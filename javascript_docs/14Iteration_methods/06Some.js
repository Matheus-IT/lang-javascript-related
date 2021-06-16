/*  *** Array.some() ***
	The some() method check if some array values pass a test, returning a boolean.
	This example check if some array values are larger than 18: */

// In this case we can omit the "index" and the "array"
function myFunction(value, index, array) {
	return value > 18;
}

var numbers = [45, 4, 9, 16, 25];
var someOver18 = numbers.some(myFunction);
console.log(someOver18);
