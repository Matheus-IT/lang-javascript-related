const person = {
	name: "Matheus",
	age: 18
};

// const newPerson = person; // this way we pass the reference, not the value
const newPerson = Object.assign({}, person);
newPerson.name = "Bob"; 
console.log(person.name);
console.log(newPerson.name);
