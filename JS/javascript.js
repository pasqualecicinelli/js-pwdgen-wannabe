let nomeUtente = prompt('Inserisci il tuo Nome');



let cognomeUtente = prompt('Inserisci il tuo Cognome');

let colorePreferito = prompt('Inserisci il tuo Colore preferito');

const number = 21;

let passwordGeneration = nomeUtente + cognomeUtente + colorePreferito + number;

document.getElementById('print').innerHTML = passwordGeneration;


//SECONDA SOLUZIONE

let nomeUtente2 = prompt('Inserisci il tuo Nome');


let cognomeUtente2 = prompt('Inserisci il tuo Cognome');

let colorePreferito2 = prompt('Inserisci il tuo Colore preferito');

const passGene = `<p> ${nomeUtente2}${cognomeUtente2}${colorePreferito2}21</p>`;

//STAMPA A SCHERMO

document.getElementById('print2').innerHTML = passGene;

//PER STAMPARLI NELA CONSOLE

console.log(passwordGeneration);

console.log(passGene);

