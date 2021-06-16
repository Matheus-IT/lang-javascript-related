/*
        *** Brackets ***
    Brackets are used to find a range of characters:
    [abc] 	Find any of the characters between the brackets: */
    console.log("Brackets");
    var str = "Is this all there is?";
    var patt1 = /[th]/g; 
    var result = str.match(patt1);
    console.log(result);

    /* [0-9] 	Find any of the digits between "start - end": */
    var str = "123456789";
    var patt1 = /[1-4]/g;
    var result = str.match(patt1);
    console.log(result);

    /* (x|y) 	Find any of the alternatives separated with | */
    var str = "re, green, red, green, gren, gr, blue, yellow";
    var patt1 = /(red|green)/g;
    var result = str.match(patt1);
    console.log(result);


/*
        *** Metacharacters ***
    Metacharacters are characters with a special meaning:
    /* \d 	Find a digit */
    console.log("Metacharacters");
    var str = "Give 100%!"; 
    var patt1 = /\d/g;
    var result = str.match(patt1);
    console.log(result);

    /* \s 	Find a whitespace character */
    var str = "Is this all there is?";
    var patt1 = /\s/g;
    var result = str.match(patt1);
    console.log(result);

    /* \b 	Find a match at the beginning of a word like this: \bWORD, or at the end of a word
    like this: WORD\b */
    var str = "HELLO, LOOK AT YOU!"; 
    var patt1 = /\bLO/;
    var result = str.search(patt1); //This will return the position
    console.log(result);

    /* \uxxxx 	Find the Unicode character specified by the hexadecimal number xxxx */
    var str = "Visit W3Schools. Hello World!"; 
    var patt1 = /\u0057/g;
    var result = str.match(patt1);
    console.log(result);

/* 
        *** Quantifiers ***
    Quantifiers define quantities:
    n+ 	Matches any string that contains at least one n */
    console.log("Quantifiers");
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt1 = /o+/g;
    var result = str.match(patt1);
    console.log(result);

    /* n* 	Matches any string that contains zero or more occurrences of n */
    var str = "Hellooo World! Hello W3Schools!"; 
    var patt1 = /lo*/g; //global search for an "l", followed by zero or more "o" characters
    var result = str.match(patt1);
    console.log(result);

    /* n? 	Matches any string that contains zero or one occurrences of n */
    var str = "1, 100 or 1000?";
    var patt1 = /10?/g; //global search for a "1", followed by zero or one "0" characters
    var result = str.match(patt1);
    console.log(result);
