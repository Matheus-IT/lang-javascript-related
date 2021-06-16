    function verifica_idade(){
    var aNasc = window.document.querySelector("input#a_nasc");
    var aAtual = new Date().getFullYear();
    if (aNasc.value == "" || aNasc.value > aAtual){
        window.alert("Verifique os dados e tente novamente!");
    }else{
        aNasc = Number.parseInt(aNasc.value); //Converte para um número inteiro
        var idade = aAtual - aNasc;
        var sexo = window.document.getElementsByName("sexo"); //Pega os dois radius do sexo
        var res = window.document.querySelector("div#res");
        var gen = "";
        //Criando imagem dinamicamente
        var img = window.document.createElement("img");
        img.setAttribute("id", "foto");
        if (sexo[0].checked){ //Se o sexo for masculino
            if (idade >= 0 && idade < 10){
                gen = "Menino";
                img.setAttribute("src", "images/foto-bebe-m.png");
            }else if(idade >= 10 && idade < 21){
                gen = "Jovem";
                img.setAttribute("src", "images/foto-jovem-m.png");
            }else if(idade >= 21 && idade < 50){
                gen = "Homem";
                img.setAttribute("src", "images/foto-adulto-m.png");
            }else{
                gen = "Idoso";
                img.setAttribute("src", "images/foto-idoso-m.png");
            }
        }else if (sexo[1].checked){ //Se o sexo for feminino
            if (idade >= 0 && idade < 10){
                gen = "Menina";
                img.setAttribute("src", "images/foto-bebe-f.png");
            }else if(idade >= 10 && idade < 21){
                gen = "Jovem";
                img.setAttribute("src", "images/foto-jovem-f.png");
            }else if(idade >= 21 && idade < 50){
                gen = "Mulher";
                img.setAttribute("src", "images/foto-adulto-f.png");
            }else{
                gen = "Idosa";
                img.setAttribute("src", "images/foto-idoso-f.png");
            }
        }
        res.innerHTML = `Detectamos ${gen} com ${idade} anos.`;
        res.appendChild(img); //Juntar com o innerHTML como uma child
    }
}
var btn = window.document.querySelector("input#verificar");
btn.addEventListener("click", verifica_idade);
