interface Person {
	firstName: string;
	lastName: string;
}

class Student {
	fullName: string;
	constructor (
		public firstName: string,
		public middleInitial: string,
		public lastName: string) {
			this.fullName = firstName + " " + middleInitial + " " + lastName;
	}
}

function greeter(person: Person) {
	return `Hello, ${person.firstName} ${person.lastName}`;
}

var user = new Student("Matheus", "C.", "Silva");

document.body.textContent = greeter(user);
