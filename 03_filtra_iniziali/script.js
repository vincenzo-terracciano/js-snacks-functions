/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
const letter = "A";

// Dichiara la funzione qui.

/* function declaration */
/* function letterA(names, letter) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        name = names[i];

        if(letter === name[0]) {
            newArray.push(name);
        }
    }
    return newArray;
} */

/* arrow function */
const letterA = (names, letter) => {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        name = names[i];

        if(letter === name[0]) {
            newArray.push(name);
        }
    }
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console
const isLetterA = letterA(names, letter);
console.log(isLetterA);


//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]