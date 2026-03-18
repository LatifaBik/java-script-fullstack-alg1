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
5.	Om alla bokstäver i det gissade ordet är correct: säg Bingo! och avsluta spelet.
6.	Om Nej: Be spelaren göra gissning på nytt baserat på feedbackoutput.
*/