// Assignment Code
const charUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const charLower = "abcdefghijklmnopqrstuvwxyz";
const charNumber = "1234567890";
const charSpecial = "!#$%&'()*+-./:;<=>?@[]^_`{|}~";

function generatePassword(){
  var passwordLength = "";
  var characters = "";
  var generatedPassword = "";
  
  passwordLength = window.prompt("How many characters would you like your password to be? (Must be 8-128 Characters)");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      passwordLength = window.prompt("Not a valid character count! Please try again. (Must be 8-128 Characters)");
  }
  const confirmUppercase = window.confirm("Click OK to include uppercase letters.");
  const confirmLowercase = window.confirm("Click OK to include lowercase letters.");
  const confirmNumber = window.confirm("Click OK to include numbers.");
  const confirmSpecial = window.confirm("Click OK to include special characters.");

  console.log(confirmUppercase, confirmLowercase, confirmNumber, confirmSpecial);

  var characterOptions = confirmUppercase + confirmLowercase + confirmNumber + confirmSpecial;
  if (characterOptions === 0) {
    window.alert("Select at least one condition for password! Try again.");
    generatePassword();
  }
  
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

  for (i = 0; i < passwordLength; i++) {
    var index = Math.floor(Math.random() * characters.length);
     generatedPassword += characters[index];
  }
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