/*
        *** JavaScript Long Dates ***
    Long dates are most often written with a "MMM DD YYYY" syntax like this:
*/
var d = new Date("Apr 19 2020");
console.log(d);

//Month and day can be in any order:
var d = new Date("19 Apr 2020");
console.log(d);

//And, month can be written in full (January), or abbreviated (Jan):
var d = new Date("April 19 2020");
console.log(d);

//Commas are ignored. Names are NOT case sensitive:
var d = new Date("APRIL, 19, 2020");
console.log(d);
