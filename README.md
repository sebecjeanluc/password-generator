# Password-Generator

## About this project

This code is a JavaScript project for generating random passwords where the user can specify the length (between 8 and 128 characters) and the inclusion of various character types such as special characters, numbers, uppercase letters, and lowercase letters. It showcases the use of fundamental JavaScript techniques like loops, conditional statements, array manipulation (including concat, push, and sort methods), event handling, and DOM manipulation to interact with the user and display the generated password on a webpage. The project also demonstrates good use of prompt and alert dialogs for user interaction and input validation.

### Built With

- ![HTML]
- ![CSS]
- ![JAVASCRIPT]

## Roadmap

- [x] Generate a password when the button is clicked.
- [x] Present a series of prompts for password criteria
  - [x] Length of password: ask a user how long a password the user wants to be
  - [x] At least 8 characters but no more than 128: state and set the condition to the user
  - [x] Character types: confirm a user for the restriction below
    - [x] Lowercase
    - [x] Uppercase
    - [x] Numeric
    - [x] Special characters ($@%&\*, etc)
- [x] Code should validate for each input and at least one character type should be selected above
- [x] Once prompts are answered then the password should be generated and displayed in an alert or written to the page

These roadmap result will look like thepicture below

![password generator demo](./assets/guide/05-javascript-challenge-demo.png)

## Important note

This is a Javascript practice for the bootcamp project. While this password generator uses a variety of characters to create complex passwords, it relies on JavaScript's Math.random() for randomness, which is not cryptographically secure. For applications that require high security, consider using a more secure source of randomness.

### Preview

![Preview](./assets/images/demo.png)

#### This is the Github page

[password-generator](https://sebecjeanluc.github.io/password-generator/)

### Credits

This is a practice for the bootcamp. The starter file is protected by the bootcamp.

### Third-party service

N/A

### License

Distributed under the MIT License. See `LICENSE.txt` for more information.

## Contact

Tak Kawamura - [@\_takuyakawamura](https://twitter.com/_takuyakawamura) - tkawamura11@gmail.com

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[HTML]: https://img.shields.io/badge/HTML-orange
[CSS]: https://img.shields.io/badge/CSS-blue
[JAVASCRIPT]: https://img.shields.io/badge/Javascript-yellow
