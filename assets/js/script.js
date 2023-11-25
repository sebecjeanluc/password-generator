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

var outOfRangeMessage =
	'Your number is not within the range. Click the button again.'

var noneOfCharacterTypesMessage =
	'You may accept one of the character types. Please hit the button again to start over.'

// store the character type questions in object
var questionsToUser = {
	SpecialCharacter: function (answer) {
		var userCharacterChoice = confirm(
			'Would you like your password include Special characters?'
		)
		return userCharacterChoice
	},
	Numeric: function (answer) {
		var userNumericChoice = confirm(
			'Would you like your password include numbers?'
		)
		return userNumericChoice
	},
	Uppercase: function (answer) {
		var userNumericChoice = confirm(
			'Would you like your password include Uppercase?'
		)
		return userNumericChoice
	},
	Lowercase: function (answer) {
		var userNumericChoice = confirm(
			'Would you like your password include Lowercase?'
		)
		return userNumericChoice
	},
}

// Function to prompt user for password options
function getPasswordOptions() {
	// Initiatize userInputLength
	var userInputPasswordLength = 0
	var atLeastOneTypeSelected = false
	var isValidLength = false
	var userCharacterChoices = {}

	while (!isValidLength || !atLeastOneTypeSelected) {
		var lengthInput = prompt(
			"Please type your password's length between 8 - 120. You will get error if your choice is out range."
		)
		// trim the space and convert a string to int
		userInputPasswordLength = parseInt(lengthInput.trim())

		// handling non number or string answer
		if (
			!isNaN(userInputPasswordLength) &&
			userInputPasswordLength >= 8 &&
			userInputPasswordLength <= 128
		) {
			isValidLength = true
		} else {
			alert(outOfRangeMessage + 'Please type a number. ')
			// while continue until the user input a number the right ratnge
			continue
		}

		// comfirms user of four character types
		for (var question in questionsToUser) {
			userCharacterChoices[question] = questionsToUser[question]()
		}

		// Validate if user select at least one character type
		atLeastOneTypeSelected = Object.values(userCharacterChoices).includes(true)

		if (!atLeastOneTypeSelected) {
			return alert(noneOfCharacterTypesMessage)
		}
		var passwordOptions = {
			length: userInputPasswordLength,
			choices: userCharacterChoices,
		}
	}
	return passwordOptions
}

// object of {length: 8-128, choices: key: blooean}
// console.log(getPasswordOptions())

// Function for getting a random element from an array
function getRandomCharacterFromArray(array) {
	// Generate a random index based on the length of the array
	var randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}

// pick the true choices of random number from array, fill the rest of the length of number of user length
function generatePassword() {
	var password = []
	var passwordOption = getPasswordOptions()
	// console.log(passwordOption.choices.SpecialCharacter)
	if (passwordOption.choices.SpecialCharacter) {
		//if true
		password.push(getRandomCharacterFromArray(specialCharacters))
	}
	console.log(password)
	if (passwordOption.choices.Numeric) {
		//if true
		password.push(getRandomCharacterFromArray(numericCharacters))
	}
	console.log(password)

	if (passwordOption.choices.Uppercase) {
		//if true
		password.push(getRandomCharacterFromArray(upperCasedCharacters))
	}
	console.log(password)

	if (passwordOption.choices.Lowercase) {
		//if true
		password.push(getRandomCharacterFromArray(lowerCasedCharacters))
	}
	console.log(password)

	// go through the choices which one types are picked and count the number and
	// substract the number for the remaining number
	// generate the random characters for the rest.
	console.log()
}
generatePassword()

// create an function of those true number from array

// Function to generate password with user input
function generatePassword2(options) {
	var password = ''
	var possibleCharacters = []
	var guaranteeedCharacters = []

	// Add guaranteed characters to the password
	for (var i = 0; i < guaranteedCharacters.length; i++) {
		password += guaranteedCharacters[i]
	}

	// Fill the rest of the password length with random characters from the possibleCharacters array
	for (var i = password.length; i < options.length; i++) {
		password += getRandomCharacterFromArray(possibleCharacters)
	}

	// Shuffle the password to prevent guaranteed characters from clustering at the beginning
	password = password
		.split('')
		.sort(function () {
			return 0.5 - Math.random()
		})
		.join('')

	return password
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
	var password = generatePassword()
	var passwordText = document.querySelector('#password')

	passwordText.value = password

	return
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)

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
