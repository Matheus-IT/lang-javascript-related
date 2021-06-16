// eslint-disable-next-line no-unused-vars
function calc_bhaskara() {
	"use strict";
	var a, b, c, r = 0;
	a = Number.parseFloat(prompt("Qual o valor de a?"));
	b = Number.parseFloat(prompt("Qual o valor de b?"));
	c = Number.parseFloat(prompt("Qual o valor de c?"));

	r = (b ** 2) - 4 * a * c;

	var div_res = document.querySelector("div#res");
	div_res.innerHTML = `
		<p>
			A equação atual é ${a}x² + ${b}x + ${c} = 0
			O cálculo realizado será &bigtriangleup; = ${b}² - 4 * ${a} * ${c}
			O valor calculado foi &bigtriangleup; = ${r}
		</p>
	`;
}
