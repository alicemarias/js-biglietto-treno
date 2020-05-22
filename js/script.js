// // Chiedo all'utente il suo nome
var nome = prompt('Inserisci il tuo nome');

//chiedo all'utente la sua eta
var eta = parseInt(prompt('quanti anni hai?'))

// chiedo all'untente quanti km deve viaggiare
var km = parseInt(prompt('per quanti km dovrai viaggiare?'))

//stabilisco prezzo pieno
var prezzo = km * 0.21;

// prezzo per over 65
if (eta > 65) {
  over65 = prezzo - ((prezzo * 40) / 100);
  document.getElementById('biglietto').innerHTML = over65 + '£';
}
// prezzo per minorenni
 else if (eta < 18) {
  minorenni = prezzo - ((prezzo * 20) / 100);
  document.getElementById('biglietto').innerHTML = minorenni + '£';
}
// prezzo pieno per tutti gli altri
else {
  prezzo = km * 0.21;
  document.getElementById('biglietto').innerHTML = prezzo + '£';
}
