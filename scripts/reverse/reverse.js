export default function reverse(word) {
  let reversedWord = "";

  for (let i = 0; i < word.length; i++) {
    reversedWord = word[i] + reversedWord;
  }

  return reversedWord;
}
