// Assignment code here
var generateBtn = document.querySelector("#generate");


function generatePassword() {
var userInput = window.prompt("How long do you want your password to be? Choose between 8 and 128 characters.")

var passwordLength = parseInt(userInput)

if (isNaN(passwordLength)) {
  window.alert("That's not a number! Try again.")
  return //returns back to where the function was originally called
} else {
  window.alert("Woohoo! That's a valid number!")
} 
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