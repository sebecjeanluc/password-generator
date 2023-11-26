// Array of special characters to be included in password
const specialCharacters = [
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
const numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']

// Array of lowercase characters to be included in password
const lowerCasedCharacters = [
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
const upperCasedCharacters = [
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

// Error message for user input
const outOfRangeMessage =
	'Your number is not within the range. Click the button again.'

const noneOfCharacterTypesMessage =
	'You may accept one of the character types. Please start over.'

// Function to confirm character types for the password
const characterTypeConfirmation = {
	SpecialCharacter: function () {
		let userCharacterChoice = confirm(
			'Would you like your password include Special characters?'
		)
		return userCharacterChoice
	},
	Numeric: function () {
		let userNumericChoice = confirm(
			'Would you like your password include numbers?'
		)
		return userNumericChoice
	},
	Uppercase: function () {
		let userNumericChoice = confirm(
			'Would you like your password include Uppercase?'
		)
		return userNumericChoice
	},
	Lowercase: function () {
		let userNumericChoice = confirm(
			'Would you like your password include Lowercase?'
		)
		return userNumericChoice
	},
}

// Function to get user input for password options
function getPasswordOptions() {
	let userInputLength = 0
	let atLeastOneTypeSelected = false
	let isValidLength = false
	let userCharacterChoices = {}

	while (!isValidLength || !atLeastOneTypeSelected) {
		let lengthInput = prompt(
			"Please type your password's length between 8 - 128. You will get error if your choice is out range."
		)
		// trim the space and convert a string to int
		userInputLength = parseInt(lengthInput.trim())

		// handling non number or string answer
		if (
			!isNaN(userInputLength) &&
			userInputLength >= 8 &&
			userInputLength <= 128
		) {
			isValidLength = true
		} else {
			alert(outOfRangeMessage)
			// while continue until the user input a number the right ratnge
			continue
		}

		// comfirms user of four character types
		for (let question in characterTypeConfirmation) {
			userCharacterChoices[question] = characterTypeConfirmation[question]()
		}

		// Validate if user select at least one character type
		atLeastOneTypeSelected = Object.values(userCharacterChoices).includes(true)

		if (!atLeastOneTypeSelected) {
			alert(noneOfCharacterTypesMessage)
			continue
		}
		var passwordOptions = {
			length: userInputLength,
			choices: userCharacterChoices,
		}
	}
	return passwordOptions
}

// Function for getting a random element from an array
function getRandomCharacterFromArray(array) {
	// Generate a random index based on the length of the array
	let randomIndex = Math.floor(Math.random() * array.length)
	return array[randomIndex]
}

// Shuffle items better in array
function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
}

// Function to generate a random password based on selected options
function generatePassword() {
	let options = getPasswordOptions()
	let randomArrayItems = []
	let selectedCharacters = []
	let password = ''

	if (options.choices.SpecialCharacter) {
		//if true
		selectedCharacters = selectedCharacters.concat(specialCharacters)
	}
	if (options.choices.Numeric) {
		selectedCharacters = selectedCharacters.concat(numericCharacters)
	}

	if (options.choices.Uppercase) {
		selectedCharacters = selectedCharacters.concat(upperCasedCharacters)
	}

	if (options.choices.Lowercase) {
		//if true
		selectedCharacters = selectedCharacters.concat(lowerCasedCharacters)
	}
	// Shuffle the array of the combined array inside
	// SelectedCharacters.sort(() => Math.random() - 0.5)
	// Using Fisher-Yates algorithm methods since the one above wasnt strong
	shuffleArray(selectedCharacters)

	// generate the random characters for the rest.
	for (let i = 0; options.length > i; i++) {
		randomArrayItems.push(selectedCharacters[i % selectedCharacters.length])
	}
	// combine user's selection and the rest array
	password = randomArrayItems.join('')

	return password
}

// Get references to the #generate element
const generateBtn = document.querySelector('#generate')

// Write password to the #password input
function writePassword() {
	let password = generatePassword()
	let passwordText = document.querySelector('#password')

	passwordText.value = password
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)
