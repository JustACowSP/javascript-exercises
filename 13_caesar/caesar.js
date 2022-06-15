const caesar = function (text, shift) {
  let characterCodes = Array.from(text).map((char) => char.charCodeAt(0));

  characterCodes = characterCodes.map((code) => {
    let startingCharacter;
    if (code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0)) {
      startingCharacter = 'A';
    } else if (code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0)) {
      startingCharacter = 'a';
    } else {
      return code;
    }
    let newCode = (((code - startingCharacter.charCodeAt(0)) + shift) % 26);
    newCode = (newCode < 0) ? newCode + 26 : newCode;
    return newCode + startingCharacter.charCodeAt(0);
  });

  return String.fromCharCode(...characterCodes);
  // return characterCodes;
};

// Do not edit below this line
module.exports = caesar;
