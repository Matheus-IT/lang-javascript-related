/*	*** Array.forEach() ***
	The forEach() method calls a function (a callback function) once for each 
	array element */

// In this case we can omit the "index" and the "array"
function square(value, index, array) {
	str += ` ${value ** 2}`;
}

var arr = [45, 4, 9, 16, 25];
str = "";
arr.forEach(square); // Take each value of arr and sends to the function "square"
console.log(str);
