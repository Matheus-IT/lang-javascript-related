/*
    All string methods return a new string. They don't modify the original string.
    Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
*/
/*
        *** The concat() Method ***
    concat() joins two or more strings:
*/
var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2);
console.log(text3);
