const digitRegex = /\d+/
function checkDigits(password) {
  return digitRegex.test(password)
}
console.log(checkDigits('ciao112'))

const uppercaseRegex = /\W+/
function checkUppercase(password) {
  return uppercaseRegex.test(password)
}
const specialCharRegex =
  /[\$,\!,\(,\),\=,\?,\%,\&,\ì,\^,\è,\{,\},\[,\],\+,\*,\/,\ò,\à,\ù,\@,\ç,\#,\°,\§,\_,\|,\-]/
function checkSpecial(password) {
  return specialCharRegex.test(password)
}

module.exports = {
  checkDigits,
  digitRegex,
  checkUppercase,
  uppercaseRegex,
  checkSpecial,
  specialCharRegex
}
