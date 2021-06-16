function limpa() {
    var r = window.document.querySelector("div#res");
    r.style.visibility = "hidden";
    r.innerHTML = "";
}

function calcular() {
    var metres = window.document.querySelector('input#n');
    metres = Number.parseFloat(metres.value);
    var km = metres/1000;
    var hect = metres/100;
    var deca = metres/10;
    var deci = metres*10;
    var cent = metres*100;
    var mili = metres*1000;
    var r = window.document.querySelector("div#res");
    r.style.visibility = "visible";
    r.innerHTML = `
        <p>A distância de ${metres.toFixed(2)}m corresponde a:</p>
        <ul>
            <li>${km.toFixed(2)} Quilômetros</li> 
            <li>${hect.toFixed(2)} Hectômetros</li> 
            <li>${deca.toFixed(2)} Decâmetros</li> 
            <li>${deci.toFixed(2)} Decímetros</li> 
            <li>${cent.toFixed(2)} Centímetros</li>
            <li>${mili.toFixed(2)} Milímetros</li>
        </ul>
    `;
}
