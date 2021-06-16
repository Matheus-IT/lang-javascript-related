/*
    All string methods return a new string. They don't modify the original string.
    Formally said: Strings are immutable: Strings cannot be changed, only replaced. 
*/

var nome = "Matheus";

var compr = nome.length; //Comprimento de uma string
console.log(`Olá seu nome tem ${compr} letras`);

var nomeMaiusc = nome.toUpperCase();
console.log(`Seu nome em maiúsculas ${nomeMaiusc}`);

var nomeMinusc = nome.toLowerCase();
console.log(`Seu nome em minúsculas ${nomeMinusc}`);


/*
    The trim() method removes whitespace from both sides of a string:
*/
var str = "       Hello World!        ";
console.log(str.trim()); 
