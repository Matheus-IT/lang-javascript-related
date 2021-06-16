/*      *** ISO Dates (Year Day and Month) ***
    - The ISO 8601 syntax (YYYY-MM-DD) is the preferred JavaScript date format:
*/
var d = new Date("2020-04-19");
console.log(d);
/*
        *** ISO Dates (Year and Month) ***
    - ISO dates can be written without specifying the day (YYYY-MM):
*/
var d = new Date("2020-04");
console.log(d);
/*
        *** ISO Dates (Only Year) ***
    - ISO dates can be written without month and day (YYYY):
*/
var d = new Date("2020");
console.log(d);

/*
        *** ISO Dates (Date-Time) ***
    - ISO dates can be written with added hours, minutes, and seconds (YYYY-MM-DDTHH:MM:SSZ):
    var d = new Date("2015-03-25T12:00:00Z");
    - Date and time is separated with a capital T.
    - UTC time is defined with a capital letter Z.
    - If you want to modify the time relative to UTC, remove the Z and add +HH:MM or -HH:MM
    instead:
    var d = new Date("2015-03-25T12:00:00-06:30");
*/
