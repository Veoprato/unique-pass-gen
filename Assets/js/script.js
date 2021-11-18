// Assignment Code
function generatePassword(){
  var passwordLength = "";
  passwordLength = window.prompt("How many characters would you like your password to be? (Must be 8-128 Characters)");
    if(passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)){
      window.alert("Not a valid character count! Please try again.");
      generatePassword();
    } else {
      confirmUppercase = window.confirm("Click OK to include uppercase letters.");
      confirmLowercase = window.confirm("Click OK to include lowercase letters.");
      confirmNumber = window.confirm("Click OK to include numbers.");
      confirmSpecial = window.confirm("Click OK to include special characters.");
  
      if(confirmUppercase===false && confirmLowercase===false && confirmNumber===false && confirmSpecial===false) {
        window.alert("Please select at least one condition for password.");
        generatePassword();
      }
    }
  
  return "Password here";
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
