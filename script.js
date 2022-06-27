// Assignment code here

var passwordLength = 128;
var characters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%^&*_-+=";

//Define generate password 
function generatePassword() {
console.log("Hey! You clicked the button!")

// 1. Prompt the user for the password criteria
let name=prompt("Please type a password");

//  a. password length (between) 8 < 12

if (passwordLength && characters) {
  console.log("You did it!")
}
//  b. lowercase, uppercase, numbers, special characters 
// 2. Validate the input (what the user inputs needs to be valid)
// 3. Generatep assword based on criteria


// 4. Display generated password on the page 
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
