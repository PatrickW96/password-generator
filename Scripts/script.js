// Assignment Code
var generateBtn = document.querySelector("#generate");

/* Creating var to hold pwLength */
pwLength = 0;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("everything works");
}

/* Fucntion that generates a random password for user */
function generatePassword() {
  console.log("we in here");
  /* Creating a var to pwlength */
  pwLength = prompt("How many characters do you want your password to include? (Please choose a value between 8 and 128)");

  /* Conditionals set so user can only choose a length between 8 and 128 characters */
  if (pwLength < 8 ) {
    alert("Please choose a value between 8 and 128");
    return;
  } else if (pwLength > 128 ) {
    alert("Please choose a value between 8 and 128");
    return;
  }

  /* Creating var to hold users character choices */
  var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
  var upperCase = lowerCase.toUpperCase; 
  var numbers = "1234567890";
  var symbols = "!@#$%^&*(){}[]<>/?";
  var userChoice = "";

  /* Creating var to hold charset choices */
  var useLowerCase = confirm("Would you like to include Lowercase letters in your password?");
  var useUpperCase = confirm("Would you like to use Uppercase letters in your password?");
  var useNumbers = confirm("Would you like to include numbers in your password?");
  var useSymbols = confirm("Would you like to use Special Characters in your password?");

  /* Creating conditional that adds the charset the user chooses to useChoices var */
  if (useLowerCase) {
    userChoice += lowerCase;
  } 
  if (useUpperCase) {
    userChoice += upperCase;
  } 
  if (useNumbers) {
    userChoice += numbers;
  }
  if (useSymbols) {
    userChoice += symbols;
  }



  console.log(userChoice);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
