/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';

// Dichiara la funzione qui.

/* function declaration */
/* function howManyVocal(word) {
    let vocal = 0;
    for( let i = 0; i < word.length; i++) {
        character = word[i];
        if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
            vocal++
        }
    }
    return vocal
} */

/* aroow function */
const howManyVocal = word => {
    let vocal = 0;
    for( let i = 0; i < word.length; i++) {
        character = word[i];
        if (character === "a" || character === "e" || character === "i" || character === "o" || character === "u") {
            vocal++
        }
    }
    return vocal
}

// Invoca la funzione qui e stampa il risultato in console
const numberVocal = howManyVocal(word);
console.log(`The word ${word} has ${numberVocal} vocals (a, a, i)`);



//Risultato atteso se si passa 'javascript': 3 (a, a, i)