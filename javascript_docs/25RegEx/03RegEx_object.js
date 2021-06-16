/*  
        *** Using test() ***
    - The test() method searches a string for a pattern, and returns true or false, depending
    on the result.
    - The following example searches a string for the character "e": */
    var patt = /e/;
    var res = patt.test("The best things in life are free!");
    console.log(res); //true there's at leat one "e"
    /* - You don't have to put the regular expression in a variable first. The two lines above
    can be shortened to one:
    /e/.test("The best things in life are free!"); */

/*
        *** Using exec()***
    - The exec() method searches a string for a specified pattern, and returns the found text
    as an object.
    - If no match is found, it returns an empty (null) object.
    - The following example searches a string for the character "e": */
    var obj = /e/.exec("The best things in life are free!");
    console.log(`Found "${obj[0]}" in position ${obj.index} in the text: "${obj.input}"`);
