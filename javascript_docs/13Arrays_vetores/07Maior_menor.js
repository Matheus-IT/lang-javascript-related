var vet = [5, 8, 4, 6];
console.log(`Vetor ${vet}`);
/* Posso fazer da forma tradicional */
vet.sort(function(a, b){return a - b}); //Primeiro organiza o vetor
let maior = vet[vet.length-1];
let menor = vet[0];
/* Posso usar o objeto Math */
//let maior = Math.max.apply(null, vet);
//let menor = Math.min.apply(null, vet);
console.log(`Maior valor: ${maior}`);
console.log(`Menor valor: ${menor}`);
