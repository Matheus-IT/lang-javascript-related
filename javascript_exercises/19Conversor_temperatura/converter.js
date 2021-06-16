function converter() {
    var celsius = window.document.getElementById("temp");
    if (celsius.value.length == 0) {
        window.document.getElementById("data_output").innerHTML = "<p>Digite algum número acima.</p>";    
    } else {
        celsius = Number.parseInt(celsius.value);
        var k = celsius + 273.15;
        var f = celsius * 1.8 + 32;
        window.document.getElementById("data_output").innerHTML = `
            <h3>A temperatura de ${celsius.toFixed(2)}ºC corresponde:</h3>
            <ul>
                <li>${k.toFixed(2)} (Kelvin)</li>
                <li>${f.toFixed(2)} (Fahrenheit)</li>
            </ul>
        `;
    }
}
