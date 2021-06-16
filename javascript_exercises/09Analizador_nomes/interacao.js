var btn = window.document.querySelector("input#btn");
var n = window.document.querySelector("input#nome");

function resumo() {
    if (n.value.length == 0) {
        alert("Digite alguma coisa");
    } else {
        let res = window.document.querySelector("div#saida");
        res.innerHTML = "";
        res.innerHTML += `<p>Seu nome tem ${n.value.length} letras.</p>`;
    }
}

btn.addEventListener("click", resumo);
n.addEventListener("keypress", e => {
    if (e.keyCode == 13) {
        e.preventDefault(); //Previnir evento default
        btn.click(); //Ligar o evento do enter ao click
    }
});
