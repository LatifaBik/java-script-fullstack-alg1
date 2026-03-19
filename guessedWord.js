export default function guessedWord(guessed, secret) {
  if (guessed === '') {
    return '';
  }

  if (guessed === secret) {
    return 'Bingo!';
  }

  if (guessed.length !== secret.length) {
    return 'invalid length';
  }

  const output = new Array(guessed.length);
  //Spitrar hemliga ordet till bokstäver
  const secretLetters = secret.split('');
  //En array som håller koll på vilka bokstäver i det hemliga ordet som redan har blivit använda.
  const used = new Array(secret.length).fill(false);

  // Första varvet hitta correct
  for (let i = 0; i < guessed.length; i++) {
    if (guessed[i] === secret[i]) {
      output[i] = 'correct';
      used[i] = true;
    }
  }

  // Andra varvet hitta misplaced eller incorrect
  for (let i = 0; i < guessed.length; i++) {
    if (output[i] === 'correct') continue;

    let found = false;

//Inre loop leta efter bokstaven i hemliga ordet
    for (let j = 0; j < secretLetters.length; j++) {
      if (!used[j] && guessed[i] === secretLetters[j]) {
        found = true;
        used[j] = true;
//Så fort den hittat en match, slutar den leta vidare (hanterar dubbletter)
        break;
      }
    }

    output[i] = found ? 'misplaced' : 'incorrect';
  }

  return output;
}