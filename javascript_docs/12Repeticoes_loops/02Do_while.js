var count1 = 0; //Este vai de 0 até 9
var count2 = 9; //Este vai de 0 até 0
do {
    console.log(`${count1} - ${count2}`);
    count1++;
    count2--;
} while (count1 < 10);
console.log("Terminei de contar");
