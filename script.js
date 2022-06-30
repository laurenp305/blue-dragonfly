// Assignment code heres



// 1. Prompt the user for the password criteria
function generatePassword() {
  console.log("Hey! You clicked the button!")
  // var name=prompt("Please type a password");
  var passwordLength=prompt("Input password between 8 and 128 characters");
console.log(passwordLength)

if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
  console.log("Success")
} else {
  console.log("Error")
 }
  // var lowercaseletters = confirm("Do you want lowercase letters?")
  // console.log(lowercaseletters)
}
//  a. password length (between) 8 < 128

// function passwordLength() {
// var passwordLength=prompt("Input password between 8 and 128 characters");
// console.log(typeof passwordLength)
// if (parseInt(passwordLength) >= 8 && parseInt(passwordLength) <= 128) {
//   console.log("Success")
//   var lowercaseletters = confirm("Do you want lowercase letters?")
//   console.log(lowercaseletters)
// } else {
//  console.log("Error")
// }
// }

//return 
//  b. lowercase, uppercase, numbers, special characters 

// 2. Validate the input (what the user inputs needs to be valid)
// 3. Generate password based on criteria
// 4. Display generated password on the page 

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