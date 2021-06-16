/*
  	ECMAScript 5 (2009) introduced Getter and Setters.
    Getters and setters allow you to define Object Accessors (Computed Properties).
*/

/*
        *** JavaScript Getter (The get Keyword) ***
    This example uses a lang property to get the value of the language property:
*/
// Create an object:
var person = {
    firstName: "Matheus",
    lastName : "Costa",
    language : "pt",
    get lang() { //This is a getter
        return this.language.toUpperCase();
    }
};
// Display data from the object using a getter:
console.log(person.lang); //Access as a property

/*
        *** JavaScript Setter (The set Keyword) ***
    This example uses a lang property to set the value of the language property:
*/
var person2 = {
    firstName: "Vanessa",
    lastName : "Sarrus",
    language : "",
    set lang(lang) { //This is a setter
        this.language = lang.toUpperCase();
    }
};
// Set an object property using a setter:
person2.lang = "French";
// Display data from the object:
console.log(person2.language);

/*
        *** Why Using Getters and Setters? ***
    - It gives simpler syntax
    - It allows equal syntax for properties and methods
    - It can secure better data quality
    - It is useful for doing things behind-the-scenes
*/

/*
        *** Object.defineProperty() ***
    The Object.defineProperty() method can also be used to add Getters and Setters:
*/
// Define object
var counter = {c : 0};
// Define properties
Object.defineProperty(counter, "reset", {
  get : function () {return this.c = 0;}
});
Object.defineProperty(counter, "increment", {
  get : function () {return this.c++;}
});
Object.defineProperty(counter, "decrement", {
  get : function () {return this.c--;}
});
Object.defineProperty(counter, "add", {
  set : function (value) {return this.c += value;}
});
Object.defineProperty(counter, "subtract", {
  set : function (value) {return this.c -= value;}
});
// Play with the counter:
console.log(counter.reset);
console.log(counter.add = 5);
console.log(counter.subtract = 1);
console.log(counter.increment);
console.log(counter.decrement);
