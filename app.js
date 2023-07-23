function countVowelAndConsonant() {
  let inputString = document.getElementById("inputString").value;
  let vowel = 0;
  let consonant = 0;

  for (let i = 0; i < inputString.length; i++) {
    let currentString = inputString[i].toLowerCase();
    if (/[a-z]/.test(currentString)) {
      if (/[aeiou]/.test(currentString)) {
        vowel += 1;
      } else {
        consonant += 1;
      }
    }
  }

  // Display the result in the UI
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = `
  <h3>Result</h3>
    <p>The Input String is: <span> ${inputString}</span></p>
    <p>Vowels Count:<span> ${vowel}</span></p>
    <p>Consonants Count: <span> ${consonant}</span></p>
  `;
}
