//slice(start, stop-1);
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1); //Divide do segundo elemento até o final
console.log(citrus);
//Slice retorna uma nova array, ele não apaga nenhum valor da array original:
console.log(fruits);
citrus = fruits.slice(1, 3); //stop-1
console.log(citrus);
