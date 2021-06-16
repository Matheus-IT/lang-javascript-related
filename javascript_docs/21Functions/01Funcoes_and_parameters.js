function parimp(n) {
    return (n % 2 == 0) ? "Par" : "Ímpar";
}

let r = parimp(8);
console.log(r);

/* If you pass more arguments than are defined, they will be assigned to an array called arguments.
They can be used like this: arguments[0], arguments[1], etc. */
/* If a function is called with missing arguments (fewer than declared), the missing values are set
to undefined, which indicates that a variable has not been assigned a value. */
function soma() {
    let soma = 0;
    for (let count in arguments) {
        soma += arguments[count];
    }
    return soma;
}

console.log(soma(5, 6, 7, 12, 63, 7));

/*
    -> Arguments are Passed by Value
    The parameters, in a function call, are the function's arguments.
    JavaScript arguments are passed by value: The function only gets to
    know the values, not the argument's locations.
    If a function changes an argument's value, it does not change the
    parameter's original value.
    Changes to arguments are not visible (reflected) outside the function.

    -> Objects are Passed by Reference
    In JavaScript, object references are values.
    Because of this, objects will behave like they are passed by reference:
    If a function changes an object property, it changes the original value.
    Changes to object properties are visible (reflected) outside the function.
*/
