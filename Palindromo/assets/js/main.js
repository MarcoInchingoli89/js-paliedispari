/* Consegna */

/* Palindroma
Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma */

// Usiamo prompt per chiedere all'utente di inserire una parola
//Inseriamo prompt in una costante
const userWord = prompt('Inserisci una parola');

// Per verificare se una parola è palindroma controllare se una parola è uguale sia avanti che indietro

//Per fare questo userò tre metodi:
// Userò split per convertire una parola in un array di caratteri
// Con reverse rovescerò i caratteri per verificare la parola da entrambi i lati
// Con join andrò a riunire i caratteri rovesciati

/* console.log(userWord); */
//Impostiamo il parametro della funzione con la nostra variabile di input isPalindrome
const isPalindrome = Palindrome(userWord);
//Creiamo una funzione applicando i tre metodi qui sopra
function Palindrome(word) {
    //Rovescio la parola data dall'utente usando split, reverse e join
    const wordReverse = userWord.split('').reverse().join('');
    //Confrontiamo la parola dell'utente con quella rovesciata con un ciclo if
    if (wordReverse === userWord) {
        console.log('La parola è palindroma');
    } else {
        console.log('La parola non è palindroma');
    }
}

