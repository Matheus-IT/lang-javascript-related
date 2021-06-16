/*
    METHOD REUSE
    The call() method is a predefined JavaScript method.
    It can be used to invoke (call) a method with an owner object as an argument (parameter).
*/

var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
var person2 = {
    firstName:"Mary",
    lastName: "Doe"
}
console.log(person.fullName.call(person1)); // Will return "John Doe" 
console.log(person.fullName.call(person2)); // Will return "Mary Doe"
/*
    **The Difference Between call and apply**
    The difference is:
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
*/
