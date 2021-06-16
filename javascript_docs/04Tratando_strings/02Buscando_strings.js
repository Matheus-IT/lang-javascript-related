/*
		All string methods return a new string. They don't modify the original string.
		Formally said: Strings are immutable: Strings cannot be changed, only replaced. */

var str = "Please locate where 'locate' occurs!";

/*
		The indexOf() method returns the index of the first occurrance of a value: */
let index = str.indexOf("locate"); //Qual o index da primeira ocorrência do valor "locate"?
console.log(`O primeiro locate está na posição ${index}`);

/*
		The lastIndexOf() method returns the index of the last occurrence: */
index = str.lastIndexOf("locate");
console.log(`O último locate está na posição ${index}`);

/*
		Both indexOf(), and lastIndexOf() return -1 if the text is not found: */
index = str.indexOf("lost"); //Como não tem o valor "lost" ele retorna -1
console.log(`Como eu não achei "lost" na string, tá aí ${index}`);

/*
		The search() method searches a STRING for a specified value and returns the
		position of the first match: */
var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate"); //Just for strings
console.log(`A posição de locate é ${pos}`);

/*
		- The match() Matches a string an object that supports being matched against, and returns an
		array containing the results of that search */
var str = "Is this all there is?";
var patt1 = /h/g; 
var result = str.match(patt1);
console.log(result);
