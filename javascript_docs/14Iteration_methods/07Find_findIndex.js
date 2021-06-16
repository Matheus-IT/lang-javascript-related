/*	*** Array.find() ***
	- The find() method returns the VALUE of the first array element that passes a 
	test function.
	- This example finds (returns the value of) the first element that is larger 
	than 18: */

// In this case we can omit the "index" and the "array"
function myFunction(value, index, array) {
	return value > 18;
}

var numbers = [4, 9, 16, 25, 29];
var first = numbers.find(myFunction);
console.log(`Value: ${first}`);


/*	*** Array.findIndex() ***
	- The findIndex() method returns the INDEX of the first array element that passes a
	test function.
	- This example finds the index of the first element that is larger than 18: */

function myFunction(value, index, array) {
	return value > 18;
}

var numbers = [4, 9, 16, 25, 29];
var first = numbers.findIndex(myFunction);
console.log(`Index: ${first}`);
