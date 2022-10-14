/* Consegna */

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

/* Istruzioni */

//Chiedere con un prompt se l'utente sceglie pari o dispari
const evenOddString = prompt ('Giocatore scegli pari o dispari');
//Chiedere con un prompt numerico un numero da 1 a 5
//Impostare una variabile
const playerNumber = Number( prompt('Ora scegli un numero da 1 a 5') );
//Nella funzione generiamo un numero casuale per il computer con math floor e math random
//Lo impostiamo in una variabile
const cpuNumber = Math.floor(Math.random() *5);
//Facciamo la somma dei valori del giocatore e del computer in una funzione
//Prendiamo la somma con return
function sumToNumbers(numb1, numb2) {
    const sum = numb1 + numb2;
    return sum;
}
//Salvo il valore di return in una costante
const somma = sumToNumbers(playerNumber, cpuNumber);

//Inserisco la somma come paramentro nella seconda funzione
const isEvenOrOdd = evenOdd(somma);

//Creare una seconda funzione per stabilire se la precedente somma dei due valori è pari o dispari
function evenOdd(numb) {
    let sumEvenOdd = false;

    if (numb % 2 == 0) {
        sumEvenOdd = true;
    } 

    return sumEvenOdd;
}
//A seconda del risultato stampiamo su console il vincitore con console.log
if (isEvenOrOdd) {
    if (evenOddString === "pari");
    console.log('Il vincitore è il giocatore');
} else {
    if (evenOddString === "dispari");
    console.log('Il vincitore è il computer');
}