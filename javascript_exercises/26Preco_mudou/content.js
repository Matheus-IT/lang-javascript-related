function calc_price() { 
	var price_before, price_after, difference, percent_variat = 0;
	var div_res = document.querySelector("div#res");

	price_before = Number.parseFloat(prompt("Qual era o preço anterior do produto?"));
	price_after = Number.parseFloat(prompt("Qual é o preço atual do produto?"));
	div_res.innerHTML = `
		O produto custava R$${price_before.toFixed(2)} e agora custa R$${price_after.toFixed(2)}.<br>
	`;
	if (price_before < price_after) {
		difference = price_after - price_before;
		percent_variat = (difference / price_before) * 100;
		div_res.innerHTML += `
			Hoje o produto está mais caro.<br>
			O preço subiu R$${difference.toFixed(2)} em relação ao preço anterior.<br>
			Uma variação de ${percent_variat.toFixed(2)}% pra cima.
		`;
	} else {
		difference = price_before - price_after;
		percent_variat = (difference / price_after) * 100;
		div_res.innerHTML += `
			Hoje o produto está mais barato.<br>
			O preço caiu R$${difference.toFixed(2)} em relação ao preço anterior.<br>
			Uma variação de ${percent_variat.toFixed(2)}% pra baixo.
		`;
	}
}