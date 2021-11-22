// Character Arrays
const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charLower = "abcdefghijklmnopqrstuvwxyz";
const charNumber = "1234567890";
const charSpecial = "!#$%&()*+-./:;<=>?@[]^_`{|}~";

// Generate Password Function
function generatePassword() {
  // Local vars for password
  var passwordLength = "";
  var characters = "";
  var generatedPassword = [];
  
  // Password criteria
  passwordLength = window.prompt("How many characters would you like your password to be? (Must be 8-128 Characters)");
    // if password length is invalid
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      passwordLength = window.prompt("Not a valid character count! Please try again. (Must be 8-128 Characters)");
  }

  var confirmUppercase = window.confirm("Click OK to include uppercase letters.");
  var confirmLowercase = window.confirm("Click OK to include lowercase letters.");
  var confirmNumber = window.confirm("Click OK to include numbers.");
  var confirmSpecial = window.confirm("Click OK to include special characters.");

  // if none of the criteria are selected
  var characterOptions = confirmUppercase + confirmLowercase + confirmNumber + confirmSpecial;
  if (characterOptions === 0) {
    window.alert("Select at least one condition for password! Try again.");
    generatePassword();
  }
  
  // selected criteria adds arrays to local var characters
  if (confirmUppercase) {
    characters = characters.concat(charUpper);
  }
  if (confirmLowercase) {
    characters = characters.concat(charLower);
  }
  if (confirmNumber) {
    characters = characters.concat(charNumber);
  }
  if (confirmSpecial) {
    characters = characters.concat(charSpecial);
  }

    // loops through each selected criteria randomly
  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characters.length);
     generatedPassword += characters[index];
  }

  console.log(generatedPassword)

  return generatedPassword;
}

// "Generate" button
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);