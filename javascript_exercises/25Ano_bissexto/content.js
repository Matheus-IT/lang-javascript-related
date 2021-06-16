// eslint-disable-next-line no-unused-vars
function leap_year() {
	var year_leap = Boolean;
	var year = Number;
	var div_res = document.querySelector("div#res");
	
	year = Number.parseInt(prompt("Qual ano você quer verificar?"));
	if (year % 4 === 0 && year % 100 !== 100) {
		year_leap = true;
	} else {
		year_leap = false;
	}
	div_res.innerHTML = `<h1>Analizando o ano de ${year}...</h1>`;
	if (year_leap) {
		div_res.innerHTML += `O ano de ${year} é bissexto.`;
	} else {
		div_res.innerHTML += `O ano de ${year} não é bissexto.`;
	}
}
