/* Defining charset variables */
var lowerCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]; 
var upperCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]; 
var numbers = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 0];
var symbols = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "{" ,  "}" , "[" , "]" , "<" , ">" , "/" , "?"];

/* Creating var to hold the value of the password length  */
var pwLength = 0;

/* Creating a var to hold userChoice values */
// var choices = ["lowercase" , "uppercase" , "numbers" , "symbols"];
var userCharSet = 0;


/* Creating a function to activate generator when button is clicked */
function generatorBtn() {

/* Looping conditional to alert user anytime charset is less than 8 and more than 128 */

    for (var i = 0; i < 8; i++) {

        pwLength = prompt("Choose password length between 8 and 128 characters");

        if (pwLength < 8) {
            alert("Password must be at least 8 characters long");
            i = 0;
        } else if (pwLength > 128) {
                alert("Password cannot exceed 128 characters");
                i = 0;                
        } else {
            pwLength = pwLength;
            i = 8;
        }
    }

/* Looping the conditional used for the character set alert */
    for (var j = 0; j < 8; j++) {

        userCharSet = prompt("Choose one or more of the following characters to be included in your password: lowercase, uppercase, numbers, symbols");

        if (userCharSet !== "lowercase" || userCharSet !== "uppercase"  || userCharSet !== "numbers" || userCharSet !== "symbols") {
            alert("Please choose one of the listed options. Press \"OK\" to continue.");
            j = 0;
        } else { 
            userCharSet = "lowercase" || userCharSet == "uppercase"  || userCharSet == "numbers" || userCharSet == "symbols";
            userCharSet = userCharSet;
            j = 8;
        }
    }
}

/* Refer back to JavaScript folder for help tomorrow! */