function randInt1(max) {
    return Math.floor(Math.random() * max);
}

function randInt2(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function randFloat(min, max) {
    return Math.random() * (max - min) + min;
}

/*
    - The "random" function always returns a random number between min (included) and
    max (excluded): */
var aleatorio = Math.random(); //Número aleatório float entre 0 e 1 (sem incluir 1)
console.log(aleatorio);

aleatorio = randFloat(2, 5); //Número aleatório float entre 2 e 5 (sem incluir 5)
console.log(aleatorio);

aleatorio = randInt1(3); //Números aleatórios inteiros entre 0 e 2
console.log(aleatorio);

aleatorio = randInt2(4, 9); //Números aleatório inteiros entre 4 e 8
console.log(aleatorio);
