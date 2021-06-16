var btn = window.document.querySelector("input#btn");
var num = window.document.querySelector("input#num");
var btn_res = window.document.querySelector("input#res");
var lista = []; //Lista de valores que serão digitados

function esta_na_lista(val) {
    for (let i in lista) {
        if (lista[i] == val) {
            return true; //Este valor já está na lista
        }
    }
    return false; //Procurei o valor mas não achei
}

function clicou() {
    var sel = window.document.querySelector("select#sel");
    //O select e o botão vão aparecer:
    sel.style.visibility = "visible";
    btn_res.style.visibility = "visible";
    if (num.value.length == 0 || num.value < 1 || num.value > 100 || esta_na_lista(num.value)) {
        window.alert("Valor inválido ou já está na lista!");
    } else {
        let item = window.document.createElement("option"); //Cria objeto pra depois colocar dentro do select#sel
        item.innerHTML = `Valor ${num.value} adicionado!`;
        sel.appendChild(item); //Adicionar item dentro de sel
        lista.push(Number.parseFloat(num.value));
        window.document.querySelector("div#saida").innerHTML = ""; //Limpa o resumo ao inserir novo membro
    }
    num.value = ""; //Depois limpa o conteudo de num
    num.focus(); //Continuar com o foco do cursor na caixa de digitação
}

function resumo() {
    let res = window.document.querySelector("div#saida"); //Lugar dos resultados
    let total = lista.length;
    res.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`;
    let maior = Math.max.apply(null, lista);
    res.innerHTML += `<p>O maior valor informado foi ${maior.toFixed(2)}</p>`;
    let menor = Math.min.apply(null, lista);
    res.innerHTML += `<p>O menor valor informado foi ${menor.toFixed(2)}</p>`;
    let soma = 0;
    for (let count in lista) {
        soma += lista[count];
    }
    res.innerHTML += `<p>Somando todos os valores, temos ${soma.toFixed(2)}</p>`;
    let media = soma/total;
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(2)}</p>`;
}

btn.addEventListener("click", clicou);
//Fazer funcionar também ao pressionar enter:
num.addEventListener("keypress", e => {
    if (e.keyCode === 13) { //Código da tecla enter é 13
        e.preventDefault(); //Cancelar a ação default
        window.document.querySelector("input#btn").click();
    }
});
btn_res.addEventListener("click", resumo);
