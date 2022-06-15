const palindromes = function (text) {
  const string = text.replace(/\W/g, '').toLowerCase();

  for (let i = 0; i < string.length / 2; i += 1) {
    if (string[i] !== string[string.length - i - 1]) {
      return false;
    }
  }

  return true;
};

// Do not edit below this line
module.exports = palindromes;
