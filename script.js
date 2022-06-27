// Assignment code here

//Define generate password 
function generatePassword() {
console.log("Hey! You clicked the button!")

// 1. Prompt the user for the password criteria
//  a. password length 8 < 128
//  b. lowercase, uppercase, numbers, special characters 
// 2. 

return "Generated password will go here!";
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
