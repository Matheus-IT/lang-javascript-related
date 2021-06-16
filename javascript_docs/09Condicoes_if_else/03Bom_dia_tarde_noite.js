var hora = new Date().getHours()
var min = new Date().getMinutes()
var seg = new Date().getSeconds()
console.log(`Agora são exatamente ${hora}:${min}:${seg}.`)
if (hora < 12){
    console.log('Bom dia!')
}else if (hora <= 18){
    console.log('Boa tarde!')
}else{
    console.log('Boa noite!')
}
