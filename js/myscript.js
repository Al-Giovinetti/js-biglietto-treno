//Dichiaro variabili che saranno uguali all' input fornito//
const kmTravelled = document.getElementById("user-km")
const userAge = document.getElementById("user-age");

const btnCalc = document.querySelector("button")

const output = document.getElementById("final-price")
const output2 = document.getElementById("discount")

btnCalc.addEventListener("click",function(){
    let tiketPrice = parseInt(kmTravelled.value) * 0.21
    let discount;
    let corretto=false
    while(corretto==false){
        if(isNaN(userAge.value) || isNaN(kmTravelled.value)){
            alert("dati inseriti sbagliati - riprova")
            corretto=true
        }else{
            corretto=true

            if(userAge.value<18){
                discount= tiketPrice / 100 * 20
                tiketPrice = tiketPrice - (discount)
            }else if (userAge.value>65){
                discount= tiketPrice / 100 * 40
                tiketPrice = tiketPrice - (discount)
            }else{
                discount="Tariffa standard"
                tiketPrice = tiketPrice
            }
            output.innerHTML = "Prezzo finale: "+tiketPrice
            const divPostTrain = document.querySelector("div.d-none")
            if(isNaN(discount)){
                output2.innerHTML=discount
                divPostTrain.classList.remove("d-none")

            }else{
                output2.innerHTML = "Hai subito uno sconto di: " + discount
                divPostTrain.classList.remove("d-none")
            }
    
            kmTravelled.value = " "
            userAge.value = " "
        }
    }
    
})





