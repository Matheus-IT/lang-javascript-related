var myObject = {
    firstName:"Matheus",
    lastName: "Costa",
    fullName: function () { //A Function as a method
        return this.firstName + " " + this.lastName;
    }
}
console.log(myObject.fullName());         // Will return "Matheus Costa"
