/*
        *** The throw Statement ***
    The throw statement allows you to create a custom error.
    Technically you can throw an exception (throw an error).
    The exception can be a JavaScript String, a Number, a Boolean or an Object:
    throw "Too big";    // throw a text
    throw 500;          // throw a number
    - If you use throw together with try and catch, you can control program flow and generate
    custom error messages. */

x = document.getElementById("demo").value;
try {
    if(x == "") throw "empty";
    if(isNaN(x)) throw "not a number";
    x = Number(x);
    if(x < 5) throw "too low";
    if(x > 10) throw "too high";
}
catch(err) {
    message.innerHTML = `Input is ${err}`;
}
