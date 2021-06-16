var btn = window.document.getElementById("btn"); //Variável global

function contar() {
    //Variáveis locais
    let ini = window.document.getElementById("ini");
    let fim = window.document.getElementById("fim");
    let pas = window.document.getElementById("pas");
    let res = window.document.getElementById("res");
    //Verificando caixas início e fim
    if (ini.value.length == 0 || fim.value.length == 0) {
        window.alert("Impossível contar!");
    } else {
        //Verificando a caixa do passo
        if (pas.value.length == 0 || pas.value == "0" || pas.value == "-0" || Number.isNaN(pas.value)) {
            window.alert("Considerando passo como 1");
            pas.value = 1;
        }
        ini = Number.parseInt(ini.value);
        fim = Number.parseInt(fim.value);
        pas = Math.abs(Number.parseInt(pas.value)); //Valor absoluto
        res.innerHTML = "Contando:<br>";
        //Verificando contagem
        if (ini < fim) { //Contagem crescente
            for (let cont = ini; cont <= fim; cont+=pas) {
                if (cont != fim) {
                    res.innerHTML += ` ${cont} \u{1F449}`; //Formatação unicode para js
                }
            }
        } else { //Contagem decrescente
            for (let cont = ini; cont >= fim; cont-=pas) {
                if (cont != fim) {
                    res.innerHTML += ` ${cont} \u{1F449}`; //Formatação unicode para js
                }
            }
        }
        res.innerHTML += ` ${fim}\u{1F3C1}`;
    }
}

btn.addEventListener("click", contar);
