function palindrome(str) {
  let regexCheck = /[^A-Z0-9]/ig,
      rawInput = str,
      filteredInput = rawInput.replace(regexCheck, "").toLowerCase(),
      reversedInput = filteredInput.split("").reverse().join("");

  return reversedInput == filteredInput ? true : false;

}

palindrome("A man, a plan, a canal. Panama");