/* Consegna */

/* Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// Usiamo prompt per chiedere all'utente di inserire una parola
//Inseriamo prompt in una costante
const userWord = prompt('Inserisci una parola');
// Per verificare se una parola è palindroma controllare se una parola è uguale sia avanti che indietro

/* console.log(userWord); */
//Impostiamo il parametro della funzione con la nostra variabile di input
const wordOutput = Palindroma(userWord);
//Creiamo una funzione
function Palindroma(word) {
    //Misuriamo la lunghezza delle parole usando lenght sul nostro input
    //Mettiamo la misura in una nuova costante
    const wordLenght = userWord.length;
    console.log(wordLenght);
}