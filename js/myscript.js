//Dichiaro variabili che saranno uguali all' input fornito//
const kmTravelled = parseInt (prompt("Quanti km devi percorrere ?"));

const userAge = parseInt (prompt("Quanti anni hai ?"));

//Stampa dei dati inseriti sulla pagina
document.getElementById("km-travelled").innerHTML += kmTravelled;

document.getElementById("user-age").innerHTML += userAge;

//Inizzializzo una variabile per identificare il prezzo non scontato//

let priceWithoutDiscount = kmTravelled * 0.21;
console.log(priceWithoutDiscount)