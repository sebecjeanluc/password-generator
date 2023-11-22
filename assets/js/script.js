// Array of special characters to be included in password
var specialCharacters = [
	'@',
	'%',
	'+',
	'\\',
	'/',
	"'",
	'!',
	'#',
	'$',
	'^',
	'?',
	':',
	',',
	')',
	'(',
	'}',
	'{',
	']',
	'[',
	'~',
	'-',
	'_',
	'.',
]

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'u',
	'v',
	'w',
	'x',
	'y',
	'z',
]

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
	'A',
	'B',
	'C',
	'D',
	'E',
	'F',
	'G',
	'H',
	'I',
	'J',
	'K',
	'L',
	'M',
	'N',
	'O',
	'P',
	'Q',
	'R',
	'S',
	'T',
	'U',
	'V',
	'W',
	'X',
	'Y',
	'Z',
]

// click the button
// ask users for the length of password betwen 8-128
// if a user answer below 8 or above 128, decline
// comfirms user of four character types
// if a user rejects all, decline the generation
// if requirements meet all, generate the random password of the user's chosen length and show the result in the display.

// Function to prompt user for password options
function getPasswordOptions() {
	alert('Hello')
}

// Function for getting a random element from an array
function getRandom(arr) {}

// Function to generate password with user input
function generatePassword() {}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
	var password = generatePassword()
	var passwordText = document.querySelector('#password')

	passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

// function getRandomeLetterFromArray(arrayOfLetters) {
// 	// Generate a random index based on the length of the array
// 	var randomIndex = Math.floor(Math.random() * arrayOfLetters.length)
// 	return arrayOfLetters[randomIndex]
// }

// // generate random numbers between 8 to 128
// var maxNum = 128
// var minNum = 8
// var rangeSize = 128 - 8 - 1
// var randomLength = Math.floor(Math.random() * rangeSize) + minNum

// // Set an empty array to store letters&numbers&SpecialCharacters
// var randomLetters = []

// // pick one from each arrays
// randomLetters += getRandomeLetterFromArray(numericCharacters)
// randomLetters += getRandomeLetterFromArray(specialCharacters)
// randomLetters += getRandomeLetterFromArray(lowerCasedCharacters)
// randomLetters += getRandomeLetterFromArray(upperCasedCharacters)

// // combined four arrays into one array
// var fourCombinedArrays = numericCharacters.concat(
// 	specialCharacters,
// 	lowerCasedCharacters,
// 	upperCasedCharacters
// )

// // substract four letters from the array becasue already picked them above.
// for (var i = 4; i < randomLength; i++) {
// 	randomLetters += getRandomeLetterFromArray(fourCombinedArrays)
// }

// console.log('rondomeLetters length ' + randomLetters.length)
// console.log('randomeLetters ' + randomLetters)

// // Validator for checking all number is included above
// // loop the randomLetters and check if each array contains one of the case or not.

// var doesArrayGotOneValidator = function (sourceString, targetArray) {
// 	var isFound = false
// 	for (var i = 0; targetArray.length > i; i++) {
// 		var currentCharacter = targetArray[i]
// 		// if its found, its 0 or positive int but if not, it will be -1 so opposite it. Works same if it is">=0"
// 		if (sourceString.indexOf(currentCharacter) !== -1) {
// 			console.log('found one!')
// 			isFound = true
// 		}
// 	}
// 	return isFound
// }
// doesArrayGotOneValidator(randomLetters, specialCharacters)
// doesArrayGotOneValidator(randomLetters, numericCharacters)
// doesArrayGotOneValidator(randomLetters, lowerCasedCharacters)
// doesArrayGotOneValidator(randomLetters, upperCasedCharacters)
