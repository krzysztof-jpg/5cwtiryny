let cards = document.querySelectorAll(".cards");
for(let i=0; i<cards.length; i++){
console.log(cards[i]);
cards[i].style.backgroundColor = "yellow";
cards[i].textContent = 'to jest karta numer${i+1}';
}

function showAlert(){
    console.log("Kliknąłem guzik!");
}