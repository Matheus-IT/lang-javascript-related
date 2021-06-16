/*
    Method Reuse
    With the apply() method, you can write a method that can be used on different objects.
    The apply() method is similar to the call() method.
    In this example the fullName method of person is applied on person1:
*/
var person = {
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Mary",
    lastName: "Doe"
}
console.log(person.fullName.apply(person1));  // Will return "Mary Doe" 
/*
    **The Difference Between call and apply**
    The difference is:
    The call() method takes arguments separately.
    The apply() method takes arguments as an array.
*/

