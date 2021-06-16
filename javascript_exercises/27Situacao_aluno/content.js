"use strict";
// eslint-disable-next-line no-unused-vars
function calc_situat() {
	const student = {name:"", grades: [], average: 0.0};
	var div_res = document.querySelector("div#res");

	student.name = prompt("Qual o nome do aluno?");
	
	student.grades.push(Number.parseFloat(prompt(`Primeira nota de ${student.name}:`)));
	student.grades.push(Number.parseFloat(prompt(`Segunda nota de ${student.name}:`)));
	student.average = (student.grades[0] + student.grades[1]) / 2;
	div_res.style.display = "block";
	div_res.innerHTML = `
		<h1>Analizando a situação de ${student.name}</h1>
		<p>Com as notas ${student.grades[0]} e ${student.grades[1]} a <strong>média é ${student.average.toFixed(2)}</strong></p>
	`;
	if (student.average >= 6) {
		div_res.innerHTML += "<p>Com a média acima de 6.0, o aluno está <strong>aprovado!</strong></p>";
	} else {
		div_res.innerHTML += "<p>Com a média abaixo de 6.0, o aluno está <strong>reprovado!</strong></p>";		
	}
}
