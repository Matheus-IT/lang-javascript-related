var values = [3, 4, 5];

function updateValues() {
	var res = document.querySelector("#res");

	res.innerHTML = String(values);
}

interface Element {
	value: number;
}

function pushIntoArray() {
	var textInput = document.querySelector("#value");
	
	values.push(textInput.value);
	updateValues();
}

function popFromArray() {
	values.pop();
	updateValues();
}

window.onload = function () {
	var res = document.querySelector("#res");
	res.innerHTML = String(values);
};
