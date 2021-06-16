/* 
    Arrow functions do not have their own "this". They are not well suited
    for defining object methods.
    Arrow functions are not hoisted. They must be defined before they are used.
    Using const is safer than using var, because a function expression is always
    constant value.
    You can only omit the return keyword and the curly brackets if the function
    is a single statement. Because of this, it might be a good habit to always keep them.
*/
const soma = (a, b) => {return a + b};

const maior = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

let res = soma(8, 7);
console.log(`Resultado da soma ${res}`);
res = maior(8, 7);
console.log(`Maior valor ${res}`);
