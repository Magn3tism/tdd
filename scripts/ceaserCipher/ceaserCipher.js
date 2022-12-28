export default function ceaserCipher(word, shift) {
  let shiftedWord = "";

  Array.from(word).forEach((letter) => {
    if (letter.toUpperCase() === letter.toLowerCase()) {
      shiftedWord += letter;
      return;
    }

    let code = letter.charCodeAt(0);
    let adjustedShift = shift;

    if (code + shift > 122) {
      adjustedShift = shift - (122 - code);
      code = 96;
    }

    if (code + shift > 90 && code + shift < 97) {
      adjustedShift = shift - (90 - code);
      code = 64;
    }

    shiftedWord += String.fromCharCode(code + adjustedShift);
  });

  return shiftedWord;
}
