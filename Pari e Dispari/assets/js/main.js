/* Consegna */

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto. */

/* Istruzioni */

//Chiedere con un prompt se l'utente sceglie pari o dispari
prompt ('Giocatore scegli pari o dispari');
//Chiedere con un prompt numerico un numero da 1 a 5
//Impostare una variabile
const playerNumber = Number (prompt ('Ora scegli un numero da 1 a 5'));
//Inserire la variabile di entrata in una costante per inserirla come paramentro nella funzione
const isEvenOrOdd = evenOdd(playerNumber);
//Creare una funzione
function evenOdd (numb) {
    //Nella funzione generiamo un numero casuale per il computer con math floor e math random
    //Lo impostiamo in una variabile
    const cpuNumber = Math.floor(Math.random() *5);
    //Facciamo la somma dei due numeri in uscita
    //Mettiamo la somma in una variabile
    const sum = playerNumber + cpuNumber;
    //Preleviamo il valore con return, ci servirà nella seconda funzione
    return sum;
}

//Creare una seconda funzione
//Prendiamo la somma contenuta in una variabile e verifichiamo se è pari o dispari
//Per vedere se è pari o dispari usiamo l'operatore modulo
//In un ciclo If se la somma è divisibile per 2 è pari
//In un ciclo If se la somma non divisibile per 2 è dispari

//Crea un ciclo If
//Se il risultato ottenuto è uguale all'input del giocatore, il giocatore è il vincitore
//Se il risultato è diverso il vincitore è il computer
//Altrimenti è un pareggio
//A seconda del risultato stampiamo su console il vincitore con console.log