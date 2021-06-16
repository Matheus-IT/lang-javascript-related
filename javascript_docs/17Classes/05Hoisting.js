// You cannot use the class yet.
// myCar = new Car("Ford")
// This would raise an error.

class Car {
	constructor(brand) {
		this.carName = brand;
	}
}

// Now you can use the class:
myCar = new Car("Ford");
console.log(myCar.carName);
