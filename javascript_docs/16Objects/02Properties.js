/*
        *** Adding New Properties ***
    - You can add new properties to an existing object by simply giving it a value.
    - Assume that the person object already exists - you can then give it new properties:
*/
var person = {name: "Matheus", age: 18};
person.nationality = "Brazilian"; //Adding new properties

/*
        *** Deleting Properties ***
    - The delete keyword deletes a property from an object:
*/
var person2 = {name: "John", age: 50, eyeColor: "blue"};
delete person2.age; // or delete person["age"];
/*
    - The delete keyword deletes both the value of the property and the property itself.
    - After deletion, the property cannot be used before it is added back again.
    - The delete operator is designed to be used on object properties. It has no effect
    on variables or functions. 
*/

/*
        *** Property Attributes ***
    - All properties have a name. In addition they also have a value.
    - The value is one of the property's attributes.
    - Other attributes are: enumerable, configurable, and writable.
    - These attributes define how the property can be accessed (is it readable?, is it writable?)
    - In JavaScript, all attributes can be read, but only the value attribute can be changed
    (and only if the property is writable).
    - ( ECMAScript 5 has methods for both getting and setting all property attributes)
*/
