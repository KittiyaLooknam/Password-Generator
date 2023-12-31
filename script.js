// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This is function generate a random password based by user
function generatePassword(){
  var generatedPassword = "";

// add ver of string, lowercase , uppercase , number , special
var upperCaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseCharacters = "abcdefghijklmnopqrstuvwxyz";
var numericCharacters = "01234567890";
var specialCharacters = "!@#$%^&*()";

// string of all eligible characters based uper user selected character types
var requiredCharactersString ="";

// Prompts the user tp enter a new value if length is not between 8-128
var passwordLength = prompt(
  "Choose the character passwerd using the number between 8-128"
  );

// Prompts if the user enter the value the length is not between 8-128
while (passwordLength <8 || passwordLength >128){
  passwordLength = prompt(
  "The password must be between 8-128 characters.\nPlease select a number between 8-128");
  }

// Asks the user to comform the lowercase must be included
var includedLowerCase = confirm(
  "Do you want to include lowercase characters?"
);

if (includedLowerCase) {
  requiredCharactersString = requiredCharactersString.concat(
    lowerCaseCharacters
  );
}
 //Asks the user to confirm the uppercase characters must be included
 var includeUpperCase = confirm(
  "Do you want to include uppercase characters?"
);
//Add string of uppercase characters to requiredCharactersString if prompt is true
if (includeUpperCase) {
  requiredCharactersString = requiredCharactersString.concat(
    upperCaseCharacters
  );
}

//Asks the user to confirm if the numbers of characters must be included
var includeNumeric = confirm("Do you want to include numeric characters?");


//Add string of numeric characters to requiredCharactersString if prompt is true
if (includeNumeric) {
  requiredCharactersString = requiredCharactersString.concat(
    numericCharacters
  );
}

//Asks the user to confirm if special characters must be included
var includeSpecial = confirm("Do you want to include special characters?");
//Add string of special characters to requiredCharactersString if prompt is true
if (includeSpecial) {
  requiredCharactersString = requiredCharactersString.concat(
    specialCharacters
  );
}

//Add a random character from the requiredCharactersString to generatedPassword for the remaining password length

for (var i = 0; i < passwordLength; i++) {
  var random = Math.floor(Math.random() * requiredCharactersString.length);
  generatedPassword = generatedPassword.concat(
    requiredCharactersString.charAt(random)
  );
}

return generatedPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
