
// Chiedre all'utente il proprio Nome
let firstName = prompt('Inserisci il tuo nome');
console.log(firstName)

// Chiedere all'utente il proprio Cognome
let lastName = prompt('Inserisci il tuo Cognome');
console.log(lastName)

// Chiedere  all'utente il proprio colore preferito
let color = prompt('Inserisci il tuo colore preferito');
console.log(color)

// Generare la password (nomecognomecolore21)
const password = (`${firstName}${lastName}${color}21`);
console.log(password)


//Inserisci la pass nel div html
document.getElementById('pass').innerHTML = password;