/*
        *** Using the prototype Property ***
    The JavaScript prototype property allows you to add new properties
    to object constructors:
*/
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.nationality = "English";

/*
    The JavaScript prototype property also allows you to add new methods
    to objects constructors:
*/
function Person(first, last, age, eyecolor) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eyecolor;
}
Person.prototype.name = function() {
return this.firstName + " " + this.lastName;
};
var p1 = new Person("Matheus", "Costa", 18, "brown");
console.log(p1.name());
