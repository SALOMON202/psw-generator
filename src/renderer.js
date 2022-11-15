const crypto = require('crypto')
const DOMgeneratedPassword = document.getElementById('generated-password')
const howManyChars = document.getElementById('howManyChars')
const specialChars = document.getElementById('specialChars')
const nums = document.getElementById('nums')
const upperCase = document.getElementById('uppercase')
const form = document.getElementById('create-password-form')
const generatingButton = document.getElementById('create-password')
let answersArray = []

const charactersArrayLowerCaseOnly = [
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
  'z'
]
const charactersArrayUpperCaseOnly = [
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
  'Z'
]
const specialCharactersArrayOnly = [
  '$',
  '\\',
  '%',
  '&',
  '/',
  '(',
  ')',
  '=',
  '?',
  'ì',
  '^',
  'è',
  'é',
  '{',
  '[',
  '+',
  '*',
  '}',
  ']',
  'ò',
  'ç',
  '@',
  'à',
  '°',
  '#',
  'ù',
  '§',
  '-',
  '_'
]
const numsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
const charactersArray = charactersArrayLowerCaseOnly.concat(
  charactersArrayUpperCaseOnly,
  specialCharactersArrayOnly,
  numsArray
)
const charactersArrayWoutUpper = charactersArrayLowerCaseOnly.concat(
  specialCharactersArrayOnly,
  numsArray
)
const charactersArrayWoutSpecial = charactersArrayLowerCaseOnly.concat(
  charactersArrayUpperCaseOnly,
  numsArray
)
const charactersArrayWoutNums = charactersArrayLowerCaseOnly.concat(
  charactersArrayUpperCaseOnly,
  specialCharactersArrayOnly
)
const charactersArrayWoutSpecialAndUpper = charactersArrayLowerCaseOnly.concat(numsArray)
const charactersArrayLettersOnly = charactersArrayLowerCaseOnly.concat(charactersArrayUpperCaseOnly)
const charactersArrayWoutNumsAndUpper = charactersArrayLowerCaseOnly.concat(
  specialCharactersArrayOnly
)
;(async () => {
  window.addEventListener('DOMContentLoaded', () => {
    doAThing()
  })

  function doAThing() {
    const versions = window.electron.process.versions
    replaceText('.electron-version', `Electron v${versions.electron}`)
    replaceText('.chrome-version', `Chromium v${versions.chrome}`)
    replaceText('.node-version', `Node v${versions.node}`)
    replaceText('.v8-version', `V8 v${versions.v8}`)
  }

  function replaceText(selector, text) {
    const element = document.querySelector(selector)
    if (element) {
      element.innerText = text
    }
  }
  let selectedLetters = ''
  function generatePassword() {
    for (let i = 0; i < answersArray[0]; i++) {
      const numberForAllCharsArr = crypto.randomInt(0, charactersArray.length)
      const numberWoutSpecialChars = crypto.randomInt(0, charactersArrayWoutSpecial.length)
      const numberWoutNums = crypto.randomInt(0, charactersArrayWoutNums.length)
      const numberForLowerCaseOnly = crypto.randomInt(0, charactersArrayLowerCaseOnly.length)
      const numberWoutUpper = crypto.randomInt(0, charactersArrayWoutUpper.length)
      const numberLettersOnly = crypto.randomInt(0, charactersArrayLettersOnly.length)
      const numberWoutNumsAndUpper = crypto.randomInt(0, charactersArrayWoutNumsAndUpper.length)
      const numberWoutSpecialAndUpper = crypto.randomInt(
        0,
        charactersArrayWoutSpecialAndUpper.length
      )

      if (answersArray[1] == false && answersArray[2] == true && answersArray[3] == true) {
        selectedLetters += charactersArrayWoutSpecial[numberWoutSpecialChars]
        const randomNum = crypto.randomInt(0, 10)
        selectedLetters.replace(/./, numsArray[randomNum])
      } else if (answersArray[1] == false && answersArray[2] == false && answersArray[3] == false) {
        selectedLetters += charactersArrayLowerCaseOnly[numberForLowerCaseOnly]
      } else if (answersArray[1] == true && answersArray[2] == false && answersArray[3] == true) {
        selectedLetters += charactersArrayWoutNums[numberWoutNums]
        const n = crypto.randomInt(0, 29)
        const randomNum = crypto.randomInt(0, 10)
        selectedLetters.replace(/./, specialCharactersArrayOnly[n])
        selectedLetters.replace(/./, numsArray[randomNum])
      } else if (answersArray[1] == true && answersArray[2] == true && answersArray[3] == false) {
        selectedLetters += charactersArrayWoutUpper[numberWoutUpper]
        const n = crypto.randomInt(0, 29)
        selectedLetters.replace(/./, specialCharactersArrayOnly[n])
      } else if (answersArray[1] == true && answersArray[2] == true && answersArray[3] == true) {
        selectedLetters += charactersArray[numberForAllCharsArr]
        const n = crypto.randomInt(0, 29)
        selectedLetters.replace(/./, specialCharactersArrayOnly[n])
        const randomNum = crypto.randomInt(0, 10)
        selectedLetters.replace(/./, numsArray[randomNum])
        selectedLetters.replace(/./, charactersArrayUpperCaseOnly[randomNum])
      } else if (answersArray[1] == true && answersArray[2] == false && answersArray[3] == false) {
        selectedLetters += charactersArrayWoutNumsAndUpper[numberWoutNumsAndUpper]
        const n = crypto.randomInt(0, 29)
        selectedLetters.replace(/./, specialCharactersArrayOnly[n])
      } else if (answersArray[1] == false && answersArray[2] == false && answersArray[3] == true) {
        selectedLetters += charactersArrayLettersOnly[numberLettersOnly]
        const n = crypto.randomInt(0, 29)
        selectedLetters.replace(/./, charactersArrayUpperCaseOnly[n])
      } else if (answersArray[1] == false && answersArray[2] == true && answersArray[3] == false) {
        selectedLetters += charactersArrayWoutSpecialAndUpper[numberWoutSpecialAndUpper]
        const n = crypto.randomInt(0, 10)
        selectedLetters.replace(/./, numsArray[n])
      }
    }

    return selectedLetters
  }

  function showPassword() {
    selectedLetters = ''
    answersArray = []
    answersArray.push(howManyChars.value, specialChars.checked, nums.checked, upperCase.checked)
    event.preventDefault()
    generatePassword()
    DOMgeneratedPassword.innerHTML = selectedLetters
  }
  form.addEventListener('submit', showPassword)
})()
