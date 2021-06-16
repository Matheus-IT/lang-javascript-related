const person = {
	name: "Matheus",
	age: 18,
	gender: "male"
};

for (let [k, v] of Object.entries(person)) { // Returns an Iterator of array[key, value]
	console.log(`${k} - ${v}`);
}
