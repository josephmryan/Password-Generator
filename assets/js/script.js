// Assignment code here
function generatePassword() {
  // Each character set in an array that will be put into a new array based on selections
  var numSet = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowerCaseSet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var upperCaseSet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var specialSet = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "+", "?", "/", "-", ":", ";", "[", "]", "{", "}", ".", "<", ">", "=", "_", "`", "|", "~"];
  var selectedArray = [];

  var passwordLength = getPasswordLength();

  var charTypeSelected = false;
  // This makes the user select at least one character type
  while (charTypeSelected == false) {    
    var numericCharacters = getChoice("numeric");
    var lowerCase = getChoice("lowercase");
    var upperCase = getChoice("uppercase");
    var specialCharacters = getChoice("special");
    if ((numericCharacters) || (lowerCase) || (upperCase)|| (specialCharacters)) {
      charTypeSelected = true;
    } else {
      window.alert("You must select at least one character type.")
    }
  }
  // These if statements determine the user choices and then append them to the blank array 
  if (numericCharacters) {
    selectedArray = selectedArray.concat(numSet);
  }
  if (lowerCase) {
    selectedArray = selectedArray.concat(lowerCaseSet);
  }
  if (upperCase) {
    selectedArray = selectedArray.concat(upperCaseSet);
  }
  if (specialCharacters) {
    selectedArray = selectedArray.concat(specialSet);
  }
  var passwordString = "";
  // This loop will take the appended array, randomly select elements from it, then append the selections to a string, generating the password.
  for (var i = 0; i < passwordLength; i++) {
    passwordString += selectedArray[Math.floor(Math.random() * (selectedArray.length))];
  }

  return passwordString;
}

function getPasswordLength() {
  var userChoice = 0;
  while ((userChoice < 8) || (userChoice > 128)) {
    userChoice = parseInt(window.prompt("Enter the number of characters between 8 and 128: "));
    // Checking here to make sure the user entered a number and not a letter.
    if (isNaN(userChoice)) {
      // This will reset the choice value to 0 so it can restart the loop if the user entered anything besides a number.
      userChoice = 0;
    }
  }
  return userChoice;
}
// Created this function as the user choice options are repetitive and this simplifies the code needed.
function getChoice(currentOption) {
  var userChoice = "x",
    messagePrompt = "";
  var messagePrompt = ('Would you like '.concat(currentOption));
  messagePrompt = messagePrompt.concat(' characters? Enter yes or no');
  // This loop ensures the user enters a valid response.
  while (userChoice = "x") {
    userChoice = (window.prompt(messagePrompt));
    // Added the line below for ease of usability on mobile devices as some of them automatically capitalize when entering input.
    userChoice = userChoice.toLowerCase();
    if (userChoice == "yes") {
      return true;
    } else if (userChoice == "no") {
      return false;
    }
  }
}
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
