/* EU VOU TRAZER A INTERAÇÃO PRA ESSA PÁGINA! */
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.querySelector('img')
    var hora = new Date().getHours() //Pegar a Hora atual do sistema
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12){
        img.src = 'images/morning.png'
        window.document.body.style.background = '#e1b04f'
    }else if (hora >= 12 && hora < 18){
        img.src = 'images/afternoon.png'
        window.document.body.style.background = '#e16f54'
    }else{
        img.src = 'images/night.png'
        window.document.body.style.background = '#913f8e'
    }
}
