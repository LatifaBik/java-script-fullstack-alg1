import { describe, expect, it } from '@jest/globals';
import guessedWord from './guessedWord.js';

//Algoritm A – feedback
/*
1.	Kolla om gissade ordet är lika lång som hemliga ordet.
1.1.	Om ja: försätt till punkt 2 annars avbryt spelet.
2.	Skapa en array med bokstäver i rätt ordning för gissade ordet i form av objekt 
3.	Gå igenom varje bokstav i gissade ordet.
4.	 kolla vilka bokstäver i gissade ordet finns med i det hemliga ordet.
4.1. Om bokstaven i gissade ordet finns i hemliga ordet och står på rätt plats: markera bokstaven med attributet ”correct”.
4.2. Om bokstaven i gissade ordet finns i hemliga ordet, men står inte på rätt plats: markera bokstaven med attributet ”missplaced”.
4.3. Vid förekomst av flera likadana bokstäver ska endast korrekt antal markeras som 'correct' eller 'misplaced.
4.4. Om bokstaven i gissade ordet finns inte i det hemliga ordet: markera bokstaven med attributet ”incorrect”.
5.	Om Nej: Be spelaren göra gissning på nytt baserat på feedbackoutput.
*/

/*
Teststrategi för algoritm A – feedback
Dessa tester är valda för att täcka funktionens viktigaste regler:
1. Tom gissning
   - Funktionen ska hantera tom input på ett väldefinierat sätt.
2. Fel längd
   - Funktionen ska hantera när gissningen och det hemliga ordet har olika längd.
3. Correct
   - En bokstav som finns på rätt plats ska markeras som 'correct'.
4. Misplaced
   - En bokstav som finns i det hemliga ordet men på fel plats ska markeras som 'misplaced'.
5. Incorrect
   - En bokstav som inte finns i det hemliga ordet ska markeras som 'incorrect'.
6. Blandad feedback
   - Funktionen ska kunna returnera flera olika resultat i samma ord.
7. Dubbelbokstäver
   - Funktionen ska hantera ord där samma bokstav förekommer flera gånger och endast markera rätt antal som 'correct' eller 'misplaced'.
*/

describe('guessedWord', () => {
  it('returns empty array if guessed word is empty', () => {
    const output = guessedWord('', 'hej');
    expect(output).toEqual([]);
  });

  it('returns empty array if guessed word and secret word have different lengths', () => {
    const output = guessedWord('hej', 'hello');
    expect(output).toEqual([]);
  });

  it('returns correct if a letter is in the correct position', () => {
    const output = guessedWord('hej', 'hat');

    expect(output[0]).toEqual({
      letter: 'h',
      result: 'correct'
    });
  });

  it('returns misplaced if a letter exists in the secret word but in the wrong position', () => {
    const output = guessedWord('hej', 'job');

    expect(output[2]).toEqual({
      letter: 'j',
      result: 'misplaced'
    });
  });

  it('returns incorrect if a letter does not exist in the secret word', () => {
    const output = guessedWord('hej', 'bra');

    expect(output).toEqual([
      { letter: 'h', result: 'incorrect' },
      { letter: 'e', result: 'incorrect' },
      { letter: 'j', result: 'incorrect' }
    ]);
  });

  it('returns mixed feedback for a guessed word', () => {
    const output = guessedWord('hej', 'hab');

    expect(output).toEqual([
      { letter: 'h', result: 'correct' },
      { letter: 'e', result: 'incorrect' },
      { letter: 'j', result: 'incorrect' }
    ]);
  });

  it('handles duplicate letters correctly', () => {
    const output = guessedWord('allaa', 'hallå');

    expect(output).toEqual([
      { letter: 'a', result: 'misplaced' },
      { letter: 'l', result: 'misplaced' },
      { letter: 'l', result: 'correct' },
      { letter: 'a', result: 'incorrect' },
      { letter: 'a', result: 'incorrect' }
    ]);
  });
});







/*import {describe, expect, it} from '@jest/globals';
import guessedWord from "./guessedWord.js";




/*describe ("guessedWord", ()=> {
it('returns empty string if argument is empty string', () => {
  const output = guessedWord ('');
  expect (output).toBe('');
});

it('returns invalid length if guessed word length does not match secret word length', () => {
  const output = guessedWord('hej', 'hello');
  expect(output).toBe('invalid length');
});

it('returns correct if a letter is in the correct position', () => {
  const guessed = 'hej';
  const secret = 'hat';

  const output = guessedWord(guessed, secret);

  expect(output[0]).toBe('correct');
});

it('returns misplaced if a letter is not in the correct position', () => {
  const guessed = 'hej';
  const secret = 'job';

  const output = guessedWord(guessed, secret);

  expect(output[2]).toBe('misplaced');
});

it('returns incorrect if all letters not exist in secret word', () => {
  const guessed = 'hej';
  const secret = 'bra';

  const outputLetters = guessedWord(guessed, secret);

  expect(outputLetters).toEqual(['incorrect', 'incorrect', 'incorrect']);
});

it('returns mixed feedback for a guessed word', () => {
  const output = guessedWord('hej', 'hab');
  expect(output).toEqual(['correct', 'incorrect', 'incorrect']);
});

it('handles duplicate letters correctly', () => {
  const output = guessedWord('allaa', 'hallå');

  expect(output).toEqual([
    'misplaced',
    'misplaced',
    'correct',
    'incorrect',
    'incorrect'
  ]);
});

it('returns Bingo! if the guessed word is same as the secret word', () => {
  const guessed = 'hej';
  const secret = 'hej';

  const outputString = guessedWord(guessed, secret);

  expect(outputString).toBe('Bingo!');
});

});*/
