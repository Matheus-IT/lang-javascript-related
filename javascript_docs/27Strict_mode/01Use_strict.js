/*
        *** The "use strict" Directive ***
    The "use strict" directive was new in ECMAScript version 5.
    It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
    The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
    With strict mode, you can not, for example, use undeclared variables
    - You can use strict mode in all your programs. It helps you to write cleaner code, like
    preventing you from using undeclared variables. */

/*
        *** Declaring Strict Mode ***
    Strict mode is declared by adding "use strict"; to the BEGINNING of a script or a function.
    - Declared at the beginning of a script, it has global scope (all code in the script will
    execute in strict mode)
    - Declared inside a function, it has local scope (only the code inside the function is in
    strict mode):
    
    x = 3.14;       // This will not cause an error.
    myFunction();

    function myFunction() {
        "use strict";
        y = 3.14;   // This will cause an error
    } */

"use strict";
x = 5; //This will cause a error because x is not defined...
console.log(x);

//The "use strict" directive is only recognized at the BEGINNING of a script or a function
