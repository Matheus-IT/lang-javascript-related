/*
        *** The finally Statement ***
    - The finally statement lets you execute code, after try and catch, regardless
    of the result:

    try {
        Block of code to try
    }
    catch(err) {
        Block of code to handle errors
    }
    finally {
        Block of code to be executed regardless of the try / catch result
    } */

x = document.getElementById("demo").value;
try {
    if(x == "") throw "is empty";
    if(isNaN(x)) throw "is not a number";
    x = Number(x);
    if(x > 10) throw "is too high";
    if(x < 5) throw "is too low";
}
catch(err) {
    message.innerHTML = `Error: ${err}`;
}
finally {
    document.getElementById("demo").value = "";
}
