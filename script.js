// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
var userInput = window.prompt("How long do you want your password to be? Choose between 8 and 128 characters.")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert("That's not a number! Try again.")
  return //returns back to where the function was originally called
}
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("Oops! Password length must be between 8 and 128 characters")
  return
}
var userWantsNumbers= window.confirm("Would you like to have numbers in your password?")
var userWantsSymbols= window.confirm("Would you like to have symbols in your password?")
var userWantsLowercase= window.confirm("Would you like to have lowercase letters in your password?")
var userWantsUppercase= window.confirm("Would you like to have uppercase letters in your password?")

}
//{
//   var passwordLength=prompt("How long do you want your password to be? Choose between 8 and 128 characters");
// if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128 ) {
//   var lowercaseLetters = confirm("Do you want to use lowercase letters?")
// } else {
//   alert("Sorry! Try a different number!")
//   exit
// }
// }


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);