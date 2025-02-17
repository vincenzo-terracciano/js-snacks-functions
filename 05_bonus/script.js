/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
/* function declaration */
/* function hello(name) {
    let hour = new Date();
    if(hour.getHours() <= 13) {
        console.log(`Buongiorno ${name}`);
    }
    else if (hour.getHours() <= 17) {
        console.log(`Buon pomeriggio $`);
        
    }
    else if (hour.getHours() > 17) {
        console.log(`Buonasera ${name}`);
        
    }
    return hour;
} */

/* arrow function */
const hello = name => {
    let hour = new Date();
    if(hour.getHours() <= 13) {
        console.log(`Buongiorno ${name}`);
    }
    else if (hour.getHours() <= 17) {
        console.log(`Buon pomeriggio $`);
        
    }
    else if (hour.getHours() > 17) {
        console.log(`Buonasera ${name}`);
        
    }
    return hour;
}

// Invoca la funzione qui e stampa il risultato in console
const whatTimeIsIt = hello(name);
console.log(whatTimeIsIt);


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.