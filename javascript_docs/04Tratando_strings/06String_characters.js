/*
    All string methods return a new string. They don't modify the original string.
    Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
*/
/*
        *** The charAt() Method ***
    The charAt() method returns the character at a specified index (position) in a string:
*/
var str = "HELLO WORLD";
console.log(str.charAt(0)); // returns H

/*
        *** Property Access ***
    ECMAScript 5 (2009) allows property access [ ] on strings:
*/
var str = "HELLO WORLD";
console.log(str[0]); // returns H
