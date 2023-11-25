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

// create function that picks random items from array with certain numbers
function getMultipleArrayItems(number) {
	// combine all the array
	var randomArrayItems = []
	var allArrays = specialCharacters.concat(
		numericCharacters,
		lowerCasedCharacters,
		upperCasedCharacters
	)
	// shuffle the array
	allArrays.sort(() => Math.random() - 0.5)
	// console.log(allArrays)
	// number = 9
	// Add items of the number from the array
	for (var i = 0; number > i; i++) {
		randomArrayItems += allArrays[i % allArrays.length]
		// console.log(randomArrayItems)
	}
	return randomArrayItems
}

// console.log(getMultipleArrayItems(128))

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
	// console.log(password)
	if (passwordOption.choices.Numeric) {
		//if true
		password.push(getRandomCharacterFromArray(numericCharacters))
	}
	// console.log(password)

	if (passwordOption.choices.Uppercase) {
		//if true
		password.push(getRandomCharacterFromArray(upperCasedCharacters))
	}
	// console.log(password)

	if (passwordOption.choices.Lowercase) {
		//if true
		password.push(getRandomCharacterFromArray(lowerCasedCharacters))
	}
	// console.log("User's selected types: " + password)

	//count the selected types
	// console.log('The number of selected types: ' + password.length)

	// The user's choice of number
	// console.log("The user's selected number: " + passwordOption.length)
	// substract the number for the remaining number
	var restOfPassword = passwordOption.length - password.length
	// console.log('The rest of password: ' + restOfPassword)
	// generate the random characters for the rest.
	var restOfCharacters = getMultipleArrayItems(restOfPassword)
	// combine user's selection and the rest array
	var password = password.concat(restOfCharacters)
	password = password.join('')
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
