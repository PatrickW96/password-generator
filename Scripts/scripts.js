/* Defining charset variables */
var lowerCase = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]; 
var upperCase = lowerCase.toUpperCase;
var numbers = ["1" , "2" , "3" , "4" , "5" , "6" , "7" , "8" , "9" , "0"];
var symbols = ["!" , "@" , "#" , "$" , "%" , "^" , "&" , "*" , "(" , ")" , "{" ,  "}" , "[" , "]" , "<" , ">" , "/" , "?"];

/* Creating var to hold the value of the password length  */
var pwLength = 0;

/* Creating vars to hold charset values and user choice values */
var charset = [lowerCase , upperCase , numbers , symbols];
var userChoice = "";

/* Creating conditional for user pwLength */
function pwGenerate() {
    pwLength = prompt("How long would you like your password? (Please choose a number between 8 and 128.");


    if (pwLength < 8) {
    alert("please choose valid length.");
    return;
    } if (pwLength > 128) {
    alert("please choose valid length.");
    return;
    }

    console.log(pwLength);

    


}

