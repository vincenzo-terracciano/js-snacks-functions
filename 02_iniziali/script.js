/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];


// Dichiara la funzione qui.

/* function declaration */
/* function firstLetter(names) {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        first = names[i];
        newArray.push(first[0]);
    }
    return newArray;
} */

    /* arrow function */
const firstLetter = (names) => {
    let newArray = [];
    for (let i = 0; i < names.length; i++) {
        first = names[i];
        newArray.push(first[0]);
    }
    return newArray;
}


// Invoca la funzione qui e stampa il risultato in console
const thisName = firstLetter(names);
console.log(thisName);



//Risultato atteso: ["A", "L", "M", "A", "G", "A"]