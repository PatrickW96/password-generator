// Assignment Code
var generateBtn = document.querySelector("#generate");

// Creating var to hold users character choices
var lowerCase = "abcdefghijklmnopqrstuvwxyz"; 
var upperCase = lowerCase.toUpperCase(); 
var numbers = "01234567890123456789";
var symbols = "!@#$%^&*(){}[]<>/?_+=";
var userChoice = "";

// Creating var to hold pwLength
pwLength = 0;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  console.log("everything works");
}

// Function that generates a random charaters for user password
function generatePassword() {
  console.log("we in here");
  // Creating a var to find out and hold password length
  pwLength = Number (prompt("How many characters do you want your password to include? (Please choose a value between 8 and 128)"));

  // Conditional that checks whether the pwLength is a valid value
  if (pwLength < 8 ) {
    alert("Please choose a value between 8 and 128");
    return;
  } else if (pwLength > 128 ) {
    alert("Please choose a value between 8 and 128");
    return;
  }

  // Creating var to hold charset choices
  var useLowerCase = confirm("Would you like to include Lowercase letters in your password?");
  var useUpperCase = confirm("Would you like to use Uppercase letters in your password?");
  var useNumbers = confirm("Would you like to include Numbers in your password?");
  var useSymbols = confirm("Would you like to use Special Characters in your password?");

  // Creating conditional that adds the charsets chosen by the user to userChoice var
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

  randomPw();
  console.log(userChoice);

} 

// Creating function that generates a unique password based on user criteria
function randomPw() {  
  var uniquePassword = "";

// Loop to pull a random character from users chosen character sets and add that character to the uniquePassword var
  for (var i = 0; i < pwLength; i++) {
    uniquePassword = uniquePassword + userChoice.charAt(Math.floor(Math.random() * Math.floor(userChoice.length) - 1));    
  }
    console.log(uniquePassword);
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
