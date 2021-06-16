/*
    - In a method, this refers to the owner object.
    - Alone, this refers to the global object.
    - In a function, this refers to the global object.
    - In a function, in strict mode, this is undefined.
    - In an event, this refers to the element that received the event.
    - In a constructor function this does not have a value. It is a
    substitute for the new object. The value of this will become the
    new object when a new object is created.
    - Methods like call(), and apply() can refer this to any object.
*/

var person = {
    firstName: "Matheus",
    lastName : "Costa",
    id       : 5566,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    }
};
