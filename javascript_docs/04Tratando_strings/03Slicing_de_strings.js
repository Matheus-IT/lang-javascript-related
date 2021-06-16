/*
    All string methods return a new string. They don't modify the original string.
    Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
*/
/*
        *** The slice() Method ***
    slice() extracts a part of a string and returns the extracted part in a new string.
    The method takes 2 parameters: the start position, and the end position (end not included).
    str(start, end-1)
*/
var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13);
console.log(res);

//If a parameter is negative, the position is counted from the end of the string:
var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6);
console.log(res);

//If you omit the second parameter, the method will slice out the rest of the string:
var res = str.slice(7);
console.log(res);
//or, counting from the end:
var res = str.slice(-12);
console.log(res);
