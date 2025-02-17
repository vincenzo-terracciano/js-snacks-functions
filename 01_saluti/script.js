/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';


// Dichiara la funzione qui.
/* function declaration
function hello() {
    return `ciao ${userName}`
} */

const hello = () => `ciao ${userName}`;

// Invoca la funzione qui e stampa il risultato in console
hello();
console.log(hello());


//Risultato atteso se si passa 'Mario': // ciao Mario

