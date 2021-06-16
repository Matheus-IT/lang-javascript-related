/*
        *** JavaScript Labels ***
    To label JavaScript statements you precede the statements with a label name and a colon: */
    var cars = [" BMW ", " Volvo ", " Saab ", " Ford "];
    var text = "";
    list: {
        text += cars[0];
        text += cars[1];
        break list; //The break statement can be used to jump out of any code block
        text += cars[2];
        text += cars[3];
    }

    console.log(text);
