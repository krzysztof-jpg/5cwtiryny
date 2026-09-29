let liczby= [2,3,4,5,6,7,8,9,10];
let suma = 0;


function sum(liczby){

    for(let i = 0; i < liczby.length; i++){
        suma += liczby[i]
    }
        console.log(suma)
}

function max(liczby){
    console.log(Math.max(...liczby))
}
function min(liczby){
    console.log(Math.min(...liczby))
}
function parzyste(liczby){
for(let i = 0; i < liczby.length; i++){
    if(liczby[i] % 2 === 0){
   for(let dzielnik = 1; dzielnik <= liczby[i]; dzielnik++){
    if(liczby[i] % dzielnik === 0){
    console.log(liczby[i] +" - ta liczba jest parzysta, dzielnik=" + dzielnik)
    }
   }
}
}
}

function dodatnie(liczby){
    for(let i =0; i<liczby.length; i++){
        if(liczby[i] >=0){
            ilosc++
        }
    }
    console.log(ilosc + "- ilość liczb dodatnich")
}
sum(liczby)
max(liczby)
min(liczby)
parzyste(liczby)
dodatnie(liczby)