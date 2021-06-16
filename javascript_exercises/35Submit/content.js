function inputValidation() {
	return (event.charCode >= 45 && event.charCode <= 57);
}

function handleSubmit() {
	const n1 = document.querySelector("#n1").value;
	const n2 = document.querySelector("#n2").value;

	if (n1.length === 0 || n2.length === 0) {
		alert("Fill out all the inputs");
		return false;
	} else if (n1 === n2) {
		alert("Both have the same value");
		return true;
	} else {
		alert("Fill out the form with both equals values");
		return false;
	}
}