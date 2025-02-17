/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function letterA(names) {
    let letter = ["A"];
    for (let i = 0; i < names.length; i++) {
        first = names[i];

        if(letter[0] === first[0]) {
            letter.push(first);
            return letter;
        }
        else {
            return false;
        }
    }
}


// Invoca la funzione qui e stampa il risultato in console
const isLetterA = letterA(names);
console.log(isLetterA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]