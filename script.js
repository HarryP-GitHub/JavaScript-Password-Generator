// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Making the function with prompts for password criteria
function generatePassword() {

//Setting up variables within the generatePassword function
// Im using a string instead of an array because it would be very long to type 
// If I combine the selected character types, then I can get the generator to randomly pick from the pool
var lowerCase = "abcdefghijklmnopqrstuvwxyz"
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var numeric = "1234567890"
var specialChars = " !@#'$%&()*+,-./:;<=>?[]^_`{|}~"
// I'm not sure how to include all the special characters without triggering it's use such as \ and "
// There is probably a way

// The password must be between 8 and 128 characters
  var passwordLength = prompt("Choose your password length (password must be between 8 and 128 characters):");

// Using isNaN to check if password length is a number, this also allows 8 and 128 to be incl
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a valid whole number (no decimals) between 8 and 128.");
  return ""; //Using empty quotes to not make it return undefined, rather leave the placeholder
}
console.log(passwordLength);
// Using confirm function to see if user wants to include these in the password prompt criteria
//Leaving in console.log for testing
var inclLowerCase = confirm("Would you like to include lowercase letters?");
console.log(inclLowerCase);
var inclUpperCase = confirm("Would you like to include uppercase letters?");
console.log(inclUpperCase);
var inclNumeric = confirm("Would you like to include numbers?");
console.log(inclNumeric);
var inclSpecialChars = confirm("Would you like to include special characters?");
console.log(inclSpecialChars);

//Ensuring that at least 1 of the character types are included in the password criteria
if (!inclLowerCase && !inclUpperCase && !inclNumeric && !inclSpecialChars) {
  alert("Please select at include at least one of these character types")
  return "";
}

// Need to set up password to include the selected character types
var allCharacterType = "";
if (inclLowerCase) {
  allCharacterType += lowerCase;
} if (inclUpperCase) {
  allCharacterType += upperCase;
} if (inclNumeric) {
  allCharacterType += numeric;
} if (inclSpecialChars) {
  allCharacterType += specialChars;
}
console.log(allCharacterType);
// When I console log, I see all the selected prompts!!
// Then need to set up password using a for loop which will select from the strings, most likely using the random function to pick from the string
//Making a new variable with an empty string, I then a for loop that will choose randomised characters from the selected character types
var newPassword = "";

for (var i = 0; i < passwordLength; i++) {
  var index = Math.floor(Math.random() * allCharacterType.length);
  newPassword += allCharacterType[index];
}

console.log(newPassword);
return newPassword;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
