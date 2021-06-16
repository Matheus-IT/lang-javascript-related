var prod = document.getElementById("prod");
var prod_name;
var div_res = document.querySelector("div#res");
var first_time;

function next_step() {
    if (prod.value.length == 0) {
        div_res.innerHTML = "Digite algum valor acima.";
        return false;
    }
    div_res.innerHTML = "";
    var msg = document.getElementsByTagName("h1");
    var btn = document.getElementsByTagName("button");
    prod_name = prod.value;

    msg[0].innerHTML = `Qual o preço do ${prod_name}`;
    prod.setAttribute("type", "number");
    prod.setAttribute("placeholder", "Valor do produto");
    btn[0].setAttribute("onclick", "discount()");
    btn[0].innerHTML = "Calcular";
    first_time = true;
}

function discount() {
    if (prod.value.length == 0) {
        div_res.innerHTML = "Digite algum valor acima.";
        return false;
    }
    var prod_value = Number.parseFloat(prod.value);
    var disc = prod_value * 10/100; //Discount of 10%
    div_res.innerHTML = `
        <p>O preço original era R$${prod_value.toFixed(2)}.</p>
        <p>Você acaba de ganhar R$${disc.toFixed(2)} de desconto (10%).</p>
        <p>No fim, <b>você vai pagar</b> R$${(prod_value-disc).toFixed(2)} no produto ${prod_name}.</p>
    `;
    if (first_time == true) {
        var begin = document.createElement("a");
        begin.setAttribute("href", "index.html");
        begin.innerHTML = "Voltar início";
        document.getElementById("main").appendChild(begin);
        first_time = false;
    }
}

prod.addEventListener("keypress", (e) => {
    if(e.keyCode == 13) {
        e.preventDefault();
        document.getElementsByTagName("button")[0].click();
    }
});