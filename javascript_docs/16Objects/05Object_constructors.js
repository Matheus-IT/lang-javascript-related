/*
        *** Object Constructors ***
    - It is considered good practice to name constructor functions with an
    upper-case first letter:
*/
function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
/*
    Sometimes we need a "blueprint" for creating many objects of the same "type".
    The way to create an "object type", is to use an object constructor function.
    In the example above, function Person() is an object constructor function.
    Objects of the same type are created by calling the constructor function with
    the new keyword:
*/
var myFather = new Person("José", "Edilson", 47, "brown");
var myMother = new Person("Francisca", "Maria", 49, "brown");

/*
        *** Adding a Method to an Object ***
    Adding a new method to an existing object is easy: 
*/
myFather.name = function () {
    return this.firstName + " " + this.lastName;
};
//The method will be added to myFather. Not to myMother. (Not to any other person objects).

/*
        *** Built-in JavaScript Constructors ***
    JavaScript has built-in constructors for native objects:
*/
var x1 = new Object();    // A new Object object
var x2 = new String();    // A new String object
var x3 = new Number();    // A new Number object
var x4 = new Boolean();   // A new Boolean object
var x5 = new Array();     // A new Array object
var x6 = new RegExp();    // A new RegExp object
var x7 = new Function();  // A new Function object
var x8 = new Date();      // A new Date object
/*
    As you can see above, JavaScript has object versions of the primitive data
    types String, Number, and Boolean. But there is no reason to create complex
    objects. Primitive values are much faster:
        Use object literals {} instead of new Object().
        Use string literals "" instead of new String().
        Use number literals 12345 instead of new Number().
        Use boolean literals true / false instead of new Boolean().
        Use array literals [] instead of new Array().
        Use pattern literals /()/ instead of new RegExp().
        Use function expressions () {} instead of new Function().
*/
