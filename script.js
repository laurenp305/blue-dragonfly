// Assignment code heres
//User input variable codes

var lowLetters = 'abcdefghijklmnopqrstuvwxyz'
var upLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// 1. Prompt the user for the password criteria
function generatePassword() {
  var passwordLength=prompt("How many characters would you like your password to be? Choose between 8 and 128 characters");
if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
  var lowercaseLetters = confirm("Do you want lowercase letters?")
} else {
 alert("Try Again")
 exit
 }
 if (lowLetters) {
  var uppercaseLetters = confirm("Do you want uppercase letters?")
} else {
  alert("Try Again")
 }
}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);