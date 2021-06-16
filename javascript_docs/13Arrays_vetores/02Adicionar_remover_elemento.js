let vet = [5, 8, 4, 6];

console.log(`Vetor: ${vet}`);

vet[1] = 2; //Substitui o 8 por 2
console.log(`Troquei o 8 por 2: ${vet}`);

vet.push(3); //Adiciona o elemento 3 no final, retorna o tamanho do array com o novo elemento
console.log(`Eu coloquei mais um cara no final: ${vet}`);

vet.unshift(7); //Adiciona o elemento 7 no começo, retorna o tamanho do array com o novo elemento
console.log(`Adicionei 7 no começo: ${vet}`);

vet.pop(); //Tirar o último elemento do vetor, retorna o valor que foi removido
console.log(`Tirei o último elemento: ${vet}`);

vet.shift(); //Remove o primeiro elemento do vetor, retorna o valor removido
console.log(`Removi o primeiro elemento do vetor: ${vet}`);

//delete vet[2]; //Remove o valor da posição 2 (Deixa buracos no array)
vet.splice(2, 0, 9); //splice(posição, n_elem_remover, elem_adicionar)
console.log(`Coloquei 9 na posição 2: ${vet}`);

vet.splice(1, 1); //Removeu o 2 splice, nesse caso não preciso do último parâmetro(posição, elem_remover)
console.log(`Removi o dois: ${vet}`);
