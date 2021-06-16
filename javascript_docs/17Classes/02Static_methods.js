class Car {
	constructor(brand) {
		this.carName = brand;
	}
	
	static hello() { // The static method
		return "Hello!!";
	}
}

myCar = new Car("Ford");

console.log(Car.hello()); // you can do this

// console.log(myCar.hello()); // this would raise an error.

/*  Static methods are defined on the class itself, and not on the prototype.
That means you cannot call a static method on the object (myCar), but on the
class (Car), the static method is a method of the class, not the object */
