/*
    All string methods return a new string. They don't modify the original string.
    Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
*/
/*
        *** Replacing String Content ***
    The replace() method replaces a specified value with another value in a string:
*/
str = "Please visit Microsoft and Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
console.log(n);
//By default, the replace() method replaces only the first match
//The replace() method does not change the string it is called on. It returns a new string.

//To replace ALL MATCHES, use a regular expression with a /g flag (global match):
str = "Please visit Microsoft and Microsoft!";
var n = str.replace(/Microsoft/g, "W3Schools");
console.log(n);
