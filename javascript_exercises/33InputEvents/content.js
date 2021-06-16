function handleInputOnKeyUp() {
	this.value = this.value.toUpperCase();
}

const inputsUpperCase = document.getElementsByClassName("inputUpperCase");
inputsUpperCase[0].onkeyup = handleInputOnKeyUp;
