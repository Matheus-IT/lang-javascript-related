function assignValues() {
	try {
		const inputText = document.querySelector("#inputText");
		sessionStorage.setItem("storedValues", inputText.value);
		alert("The values were assigned successfully!");
	} catch(err) {
		alert("Something went wrong: " + err);
	}
}

function showStoredValues() {
	alert(`Stored values: ${sessionStorage.getItem("storedValues")}`);
}
