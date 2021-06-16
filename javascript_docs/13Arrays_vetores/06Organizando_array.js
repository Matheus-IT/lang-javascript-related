var vet1 = [40, 100, 1, 5, 25, 10];
console.log(`Vetor1: ${vet1}`);
vet1.reverse(); //Inverte os elementos do array
console.log(`Ordem invertida: ${vet1}`);
vet1.sort(function(a, b){return a - b}); //Array de inteiros em ordem crescente
console.log(`Ordem crescente: ${vet1}`);
vet1.sort(function(a, b){return b - a}); //Array de inteiros em ordem decrescente
console.log(`Ordem decrescente: ${vet1}`)
let tamanho = vet1.length;
console.log(`O tamanho do vetor é: ${tamanho}\n`);

var vet2 = ["Laranja", "Abacaxi", "Manga", "Banana"];
console.log(`Vetor2: ${vet2}`);
vet2.reverse(); //Inverter os elementos do array
console.log(`Ordem invertida: ${vet2}`);
vet2.sort(); //Array de strings em ordem alfabética
console.log(`Ordem alfabética: ${vet2}`);
vet2.reverse(); //Array de strings em ordem alfabética invertida, reverse após sort
console.log(`Ordem alfabética invertida: ${vet2}`);
tamanho = vet2.length; //Tamanho do array de strings
console.log(`O tamanho do veto é: ${tamanho}\n`);

var vet3 = [
    {nome:"Volvo", ano:2016},
    {nome:"Saab", ano:2001},
    {nome:"BMW", ano:2010}
];
console.log("Vetor3:");
for (let cont in vet3) {
    console.log(`Nome:${vet3[cont].nome} Ano:${vet3[cont].ano}`);
}
vet3.sort(function(a, b){return a.ano - b.ano}); //Organizar os objetos por ano
console.log("Oganizado por ano:");
for (let cont in vet3) {
    console.log(`Nome:${vet3[cont].nome} Ano:${vet3[cont].ano}`);
}
