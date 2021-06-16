/*      *** Objects ***
    With JavaScript, you can define and create your own objects.
    There are different ways to create new objects:
    - Define and create a single object, using an object literal.
    - Define and create a single object, with the keyword new.
    - Define an object constructor, and then create objects of the constructed type.

*/

//Using an object literal:
let person = {
    name:"Matheus",
    gender:"M",
    weight: 58.5,
    gainWeight: function (p) { //Posso inserir funções como métodos
        console.log("engordou!");
        this.weight += p;
    }
};
person.gainWeight(2); //Person is going to gain 2kg of weight 
console.log(`${person.name} pesa ${person.weight}Kg`);

//with the keyword new:
var person2 = new Object();
person2.name = "John";
person2.age = 50;
person2.eyeColor = "blue";
person2.changeName = function (n) {
    this.name = n;
}
person2.changeName("Paulo");
console.log(`Now the person2's name is ${person2.name}`);

/*
    - The two examples above do exactly the same. There is no need to       <-- Pay attention!
    use new Object().
    - For simplicity, readability and execution speed, use the first
    one (the object literal method).
*/

/*          *** Objects are mutable ***
    They are addressed by reference, not by value.                          <-- Pay attention!!
*/
var x = person2;  // This will not create a copy of person.
/*
    - The object x is not a copy of person. It is person. Both x and
    person are the same object.
    - Any changes to x will also change person, because x and person
    are the same object.
*/

/*
        *** Adding New Properties ***
    - You can add new properties to an existing object by simply giving
    it a value.
    - Assume that the person object already exists - you can then give
    it new properties:
*/
person.nationality = "Brazilian"; //Adding new properties

