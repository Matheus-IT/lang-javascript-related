let vet = [5, 8, 4, 6, 8];

// The indexOf() method returns the index of the first occurrence of a value:
let index = vet.indexOf(8);
console.log(`O primeiro 8 está na posição ${index}`);

// The lastIndexOf() method returns the index of the last occurrence:
index = vet.lastIndexOf(8);
console.log(`O último 8 está na posição ${index}`);

// Both indexOf(), and lastIndexOf() return -1 if the text is not found:
index = vet.indexOf(3); //Como não tem o valor 3 ele retorna -1
console.log(`Como eu não achei 3 no vetor, tá aí ${index}`);

// It searches for the VALUE of the first parameter determined by a function
console.log([4, 5, 1, 8, 2, 0].find(x => x > 5));

// It searches for the INDEX of the first parameter determined by a function
console.log([4, 5, 1, 8, 2, 0].findIndex(x => x > 5));

