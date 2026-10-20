let produkty = ["Muszka", "Monitor", "Klawiatura", "podkładka pod myszke", "Stream Deck"]
let ceny = [120, 550, 200, 40, 500]
let koszyk = []
function zakupy() 
let lista = ""

for (let i = 0; i < produkty.length; i++) 
lista += (i + 1) + ". " + produkty[i] + " - " + ceny[i] + " zł"
let wybor = prompt("Wybierz numer produktu lub wpisz QUIT aby zakonczyć" + lista)