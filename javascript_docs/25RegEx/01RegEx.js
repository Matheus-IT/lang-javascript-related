/*
        *** What Is a Regular Expression? ***
    - A regular expression is a sequence of characters that forms a search pattern.
    - When you search for data in a text, you can use this search pattern to describe what you
    are searching for.
    - A regular expression can be a single character, or a more complicated pattern.
    - Regular expressions can be used to perform all types of text search and text replace
    operations.
    Syntax: /pattern/modifiers
        var n = /Matheus/i; //i modifies the search to be not case sensitive (insensitive)


        *** Using String Methods ***
    - In JavaScript, regular expressions are often used with the two string methods: search()
    and replace().
    - The search() method searches a string for a specified value and returns the POSITION of
    the match:*/
    var str = "Visit my website!";
    var n = str.search(/my/i);
    console.log(n);
/*  - The replace() method replaces a specified value with another value in a string: */
    var str = "Visit Microsoft!";
    var res = str.replace(/microsoft/i, "my website");
    console.log(res);


/*
        *** Regular Expression Modifiers ***
    Modifiers can be used to perform case-insensitive more global searches:
    i 	Perform case-insensitive matching 	
    g 	Perform a global match (find all matches rather than stopping after the first match) 	
    m 	Perform multiline matching */
