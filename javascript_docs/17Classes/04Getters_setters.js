class Car {
	constructor(brand) {
		this._carName = brand;
	}

	get carName() {
		return this._carName;
	}
	
	set carName(x) {
		this._carName = x;
	}
}

var myCar = new Car("Ford");

console.log(myCar.carName); // Using a getter
myCar.carName = "Volvo"; // Using a setter
console.log(myCar.carName);
