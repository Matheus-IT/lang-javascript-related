

function validation() {
	return event.charCode >= 48 && event.charCode <= 57;
}

function cashValidation() {
  var v = document.querySelector("#bet_value");
  var r = event.charCode >= 44 && event.charCode <= 57;
  // you can only type one "."
  if ((event.charCode === 44 || event.charCode === 46) && v.value.indexOf(".") !== -1) r = false;
  // if there's nothing in the text box you can't type "."
  if ((event.charCode === 44 || event.charCode === 46) && v.value.length === 0) r = false;
  return r;
}

function replaceComma() {
  var v = document.querySelector("#bet_value");
  v.value = v.value.replace(/,/g, ".");
}

function animalOf(n) {
  /* There are 25 animals, for each one we have 4 numbers in sequence */
	var animal = n % 100;

	// take the animal's identifier: the multiple of 4
	while (animal % 4 !== 0) animal++;
	// validate in case we're dealing with the cow
	animal = (animal === 0) ? (100 - 1) / 4: (animal - 1) / 4;
	animal = Math.ceil(animal);
	return animal;
}

function evaluatePrice() {
  var v = document.querySelector("#bet_value").value;
	var n = document.querySelector("#bet_n").value;
	var m = 578311;
	var p = 0;
	var res = document.querySelector("#res");
	var animal_n = 0;
	var animal_m = 0;
	var img = null;

	// Validation for user's input
	v.trim();
	n.trim();
	if (v.length === 0 || n.length === 0) {
		res.innerHTML = "Preencha todos os campos";
		return false;
	} else if(v == 0 && n == 0) {
		res.innerHTML = "Você tá de brincadeira né?";
		return false;
	} else if (v <= 0) {
		res.innerHTML = "Não vale roubar hein!";
		return false;
	}

	v = Number.parseFloat(v);
	n = Number.parseInt(n);

	animal_n = animalOf(n);
	animal_m = animalOf(m);

	img = document.createElement("img");
	img.setAttribute("src", `images/bicho${animal_n}.png`);
	img.setAttribute("id", "animal");
	res.innerHTML = `<p>Nº sorteado ${m}</p>`;
	res.innerHTML += "<p>Você jogou no animal: </p>";
	res.appendChild(img);
	
	if (n % 10000 == m % 10000) {
		p = v * 3000;
	} else if (n % 1000 == m % 1000) {
		p = v * 500;
	} else if (n % 100 == m % 100) {
		p = v * 50;
	} else {
		if (animal_n === animal_m) {
			p = v * 16;
		} else {
			res.innerHTML += "<p>Infelizmente não foi dessa vez</p>";
			return false;
		} 
	}
	res.innerHTML += `<p>Parabéns você ganhou <strong>R$${p.toFixed(2)}</strong></p>`;
	return true;
}
