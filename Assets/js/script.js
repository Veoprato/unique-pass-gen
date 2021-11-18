// Assignment Code
function generatePassword(){
  var passwordLength = "";
  
  passwordLength = window.prompt("How many characters would you like your password to be? (Must be 8-128 Characters)");
  while (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      passwordLength = window.prompt("Not a valid character count! Please try again. (Must be 8-128 Characters)");
  }
  const confirmUppercase = window.confirm("Click OK to include uppercase letters.");
  const confirmLowercase = window.confirm("Click OK to include lowercase letters.");
  const confirmNumber = window.confirm("Click OK to include numbers.");
  const confirmSpecial = window.confirm("Click OK to include special characters.");

  var characters = "";
  var generatedPassword = "";

  console.log(confirmUppercase, confirmLowercase, confirmNumber, confirmSpecial);

  var characterOptions = confirmUppercase + confirmLowercase + confirmNumber + confirmSpecial;
  if (characterOptions === 0) {
    generatedPassword = generatedPassword + 'Please pick at least one character type!';
    return generatedPassword;
  } else {
    return "Password here"
  }
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