/*
        *** How to Display JavaScript Objects? ***
    - Displaying a JavaScript object will output [object Object].

    Some common solutions to display JavaScript objects are:
    - Displaying the Object Properties by name
    - Displaying the Object Properties in a Loop
    - Displaying the Object using Object.values(name_object)
    - Displaying the Object using JSON.stringify(name_object)
*/

var person = {name:"John", age:30, city:"New York"};

//Using Object.values(name_object):
var myArray = Object.values(person);
console.log(myArray);

//Using JSON.stringify(name_object):
var myString = JSON.stringify(person);
console.log(myString); //The result will be a string following the JSON notation
//JSON.stringify will not stringify functions           <-- Pay attention
