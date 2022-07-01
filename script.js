// Assignment code here
var generateBtn = document.querySelector("#generate");

function randomInt(min, max) {
if (!max) {
  max = min
  min = 0
}

}

function getRandomItem(list) {
  return list[randomInt(0, list.length - 1)]
  }

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

var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var uppercase = []

var optionsCart = []

//This makes all lowercase letters uppercase 
for (var i = 0; i < lowercase.length; i++) {
  uppercase[i] = lowercase[i].toUpperCase()
}

if (userWantsNumbers === true) {
optionsCart.push(numbers)
}

if (userWantsSymbols === true) {
  optionsCart.push(symbols)
  }

if (userWantsLowercase === true) {
   optionsCart.push(lowercase)
   }

if (userWantsUppercase === true) {
  optionsCart.push(uppercase)
  }   

var generatedPassword = ""

for (var i = 0; 1 <passwordLength; i++) {
  var randomList = getRandomItem(optionsCart)
  var randomChar = getRandomItem(randomList)
}

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);