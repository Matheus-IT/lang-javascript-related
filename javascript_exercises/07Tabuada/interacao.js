function calcular() {
    var num = window.document.querySelector("input#num");
    var sel = window.document.querySelector("select#sel");
    if (num.value.length == 0) { //Se a caixa estiver vazia
        window.alert("Por favor, digite um número!");
    } else {
        num = Number.parseInt(num.value); //Pega o valor e converte
        sel.innerHTML = ""; //Limpar o select antes
        for (let cont = 0; cont < 10; cont++) {
            let item = window.document.createElement("option");
            item.text = `${num} x ${cont} = ${num*cont}`;
            sel.appendChild(item); //Colocar o item dentro do select
        }
    }
}