function converte() {
    var cot = window.document.querySelector("input#cotacao");
    var real = window.document.querySelector("input#real");
    cot = Number.parseFloat(cot.value);
    real = Number.parseFloat(real.value);
    window.document.querySelector("div#res").innerHTML = `Resultado = US$ ${(real / cot).toFixed(2)}`;
}

document.querySelector("input#real").addEventListener("keypress", (e) => {
    if (e.keyCode === 13) {
        e.preventDefault();
        window.document.querySelector("button#btn").click();
    }
});
