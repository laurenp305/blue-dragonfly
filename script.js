// Assignment code here

//*Generator functions - http://wwww.net-comber.com/charset.html *//
function getRandomLower() {
return String.fromCharCode(97))
}

console.log(Math.random() * 26);

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
