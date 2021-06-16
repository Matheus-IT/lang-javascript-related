/*	*** Array.reduce() ***
	- The reduce() method runs a function on each array element to produce
	(reduce it to) a single value.
	- The reduce() method works from left-to-right in the array.
	- The reduce() method does not reduce the original array */

// In this case we can omit the "index" and the "array"
function myFunction(total, value, index, array) {
	return total + value;
}

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduce(myFunction);
console.log(sum);

// The reduce() method can accept an initial value:
var sum = numbers1.reduce(myFunction, 100); // Sum will start with 100


/*	*** Array.reduceRight() ***
	- The reduceRight() method runs a function on each array element to produce
	(reduce it to) a single value.
	- The reduceRight() works from right-to-left in the array.
	- The reduceRight() method does not reduce the original array */

// In this case we can omit the "index" and the "array"
function myFunction(total, value, index, array) {
	return total + value;
}

var numbers1 = [45, 4, 9, 16, 25];
var sum = numbers1.reduceRight(myFunction);
console.log(sum);

// The reduceRight() method can accept an initial value:
var sum = numbers1.reduceRight(myFunction, 100); // Sum will start with 100
