//Dichiaro variabili che saranno uguali all' input fornito//
const kmTravelled = parseInt (prompt("Quanti km devi percorrere ?"));

const userAge = parseInt (prompt("Quanti anni hai ?"));

//Stampa dei dati inseriti sulla pagina
document.getElementById("km-travelled").innerHTML += kmTravelled;

document.getElementById("user-age").innerHTML += userAge;

//Inizzializzo una variabile per identificare il prezzo non scontato//

let priceWithoutDiscount =  kmTravelled * 0.21 ;
console.log(priceWithoutDiscount)

//Dichiaro una variabile per poi stampare il prezzo scontato//

let priceWhitDiscount;
console.log(typeof(priceWhitDiscount))

// Inizzilizzo un a variabile per lo sconto

let specialDiscount = priceWithoutDiscount - priceWhitDiscount

//Se l'età utente è minore di 18 allora

if (userAge < 18){
    priceWhitDiscount = priceWithoutDiscount -( priceWithoutDiscount / 100 * 20);
    document.getElementById("final-price").innerHTML = "€"+ priceWhitDiscount .toFixed(2);
    let specialDiscount = priceWithoutDiscount - priceWhitDiscount
    document.getElementById("discount").innerHTML += specialDiscount  .toFixed(2)+ "€ , perchè minorenne";
}else if(userAge > 65){
    priceWhitDiscount = priceWithoutDiscount -( priceWithoutDiscount / 100 * 40);
    document.getElementById("final-price").innerHTML = "€"+ priceWhitDiscount .toFixed(2);
    let specialDiscount = priceWithoutDiscount - priceWhitDiscount
    document.getElementById("discount").innerHTML += specialDiscount .toFixed(2) + "€, perchè sopra i 65";
}else{
    priceWhitDiscount = priceWithoutDiscount 
    document.getElementById("final-price").innerHTML = "€"+ priceWhitDiscount .toFixed(2) ;
    document.getElementById("discount").innerHTML = "prezzo per passeggero standard";
}

