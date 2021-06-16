let nome = "Matheus da ";
let sobrenome1 = "Costa da ";
let sobrenome2 = "Silva ";
let n_completo = nome.concat(sobrenome1, sobrenome2, 18); //Concatena nome com n arrays (vários tipos)
console.log(`Meu nome completo: ${n_completo}`);
let list_nomes = ["Nayanne", "Mariana", "Ademir"];
list_nomes = list_nomes.concat(n_completo); //Merging de array
console.log(`Lista de nomes: ${list_nomes}`);
