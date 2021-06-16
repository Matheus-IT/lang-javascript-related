var caixa_text = window.document.querySelector("input#cpf");
var saida = window.document.querySelector("div#saida");

function mostrar() {
    var arr = caixa_text.value;
    //Tirar todos os pontos, colocar só quando mostrar:
    arr = arr.replace(/./g, ""); 
    if (arr.length <= 3) {
        saida.innerHTML = arr;
    } else if (arr.length <= 6) {
        caixa_text.value = `${arr.slice(0, 3)}.${arr.slice(3, 6)}`;
        saida.innerHTML = `${arr.slice(0, 3)}.${arr.slice(3, 6)}`;
    } else if (arr.length <= 9) {
        caixa_text.value = `${arr.slice(0, 3)}.${arr.slice(3, 6)}.${arr.slice(6, 9)}`;
        saida.innerHTML = `${arr.slice(0, 3)}.${arr.slice(3, 6)}.${arr.slice(6, 9)}`;
    } else {
        arr = arr.replace("-", ""); //Tirar traço, colocar de novo quando mostrar
        caixa_text.value = `${arr.slice(0, 3)}.${arr.slice(3, 6)}.${arr.slice(6, 9)}-${arr.slice(9)}`;
        saida.innerHTML = `${arr.slice(0, 3)}.${arr.slice(3, 6)}.${arr.slice(6, 9)}-${arr.slice(9)}`;
    }
}

caixa_text.addEventListener("focus", () => caixa_text.value = "");
caixa_text.addEventListener("keyup", mostrar);
