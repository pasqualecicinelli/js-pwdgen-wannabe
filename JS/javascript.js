let nomeUtente = prompt('Inserisci il tuo Nome');


let cognomeUtente = prompt('Inserisci il tuo Cognome');

let colorePreferito = prompt('Inserisci il tuo Colore preferito');

const number = 21;

let passwordGeneration = nomeUtente + cognomeUtente + colorePreferito + number;

document.getElementById('print').innerHTML = passwordGeneration;



