class Car {
	constructor(brand) { // The constructor method
		this.carName = brand;
	}
	
	present() { // A method that was created
		return "I have a " + this.carName;
	}
}

/*  If you do not have a constructor method, JavaScript
will add an invisible and empty constructor method. */

var myCar = new Car("Ford"); 
console.log(myCar.present());

/* 	Avoid String, Number, and Boolean objects. They complicate your
code and slow down execution speed:
var x = new String();
var y = new Number();
var z = new Boolean(); */
