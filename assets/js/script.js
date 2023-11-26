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
			"Please type your password's length between 8 - 128. You will get error if your choice is out range."
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
			alert(outOfRangeMessage)
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

// Function for getting a random element from an array
function getRandomCharacterFromArray(array) {
	// Generate a random index based on the length of the array
	var randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}

// pick the true choices of random number from array, fill the rest of the length of number of user length
function generatePassword() {
	var password = ''
	var passwordOption = getPasswordOptions()
	var selectedArray = []
	var randomArrayItems = []

	if (passwordOption.choices.SpecialCharacter) {
		//if true
		selectedArray = selectedArray.concat(specialCharacters)
	}
	if (passwordOption.choices.Numeric) {
		selectedArray = selectedArray.concat(numericCharacters)
	}

	if (passwordOption.choices.Uppercase) {
		selectedArray = selectedArray.concat(upperCasedCharacters)
	}

	if (passwordOption.choices.Lowercase) {
		//if true
		selectedArray = selectedArray.concat(lowerCasedCharacters)
	}
	// Shuffle the array of the combined array inside
	selectedArray.sort(() => Math.random() - 0.5)

	// generate the random characters for the rest.
	for (var i = 0; passwordOption.length > i; i++) {
		randomArrayItems.push(selectedArray[i % selectedArray.length])
	}
	// combine user's selection and the rest array
	password = randomArrayItems.join('')

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
