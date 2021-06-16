class Car {
	constructor(brand) {
		this.carName = brand;
	}
	
	present() {
		return 'I have a ' + this.carName;
	}
}

class Model extends Car { // this class inherits the class Car
	constructor(brand, mod) {
		super(brand); // This means: inherit the constructor method of the class Car
		this.model = mod;
	}
	show() {
		return this.present() + ', it is a ' + this.model;
	}
}

myCar = new Model("Ford", "Mustang");
console.log(myCar.show());
