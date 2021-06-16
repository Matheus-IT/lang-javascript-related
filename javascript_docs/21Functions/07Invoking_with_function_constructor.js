/* Invoking a Function with a Function Constructor */
/*
    If a function invocation is preceded with the new keyword, it is a constructor invocation.
    It looks like you create a new function, but since JavaScript functions are objects you actually
    create a new object:
*/
// This is a function constructor:
function myFunction(arg1, arg2) {
    this.firstName = arg1; //The keyword this refers to the object that was built
    this.lastName  = arg2;
}
  
// Constructor invocation that creates a new object
var x = new myFunction("Matheus", "Costa");
console.log(x.firstName);                             // Will return "Matheus" 
/*
    The this keyword in the constructor does not have a value.
    The value of this will be the new object created when the function is invoked.
*/
