document.querySelector('#btn_stozek').addEventListener('click', function() {
    let r = parseFloat(document.querySelector('#stozek_r').value);
    let H = parseFloat(document.querySelector('#stozek_H').value);
    let poleWyniku = document.querySelector('#wynik_stozek');

    if (isNaN(r) || isNaN(H) || r <= 0 || H <= 0) {
        poleWyniku.innerText = "Wpisz poprawne liczby większe od zera.";
        return;
    }

    let objetosc = (1 / 3) * Math.PI * r * r * H;
    poleWyniku.innerText = "Objętość stożka wynosi: " + objetosc.toFixed(2);
});

// Obliczanie objętości ostrosłupa: V = 1/3 * a * b * H
document.querySelector('#btn_ostroslup').addEventListener('click', function() {
    let a = parseFloat(document.querySelector('#ostroslup_a').value);
    let b = parseFloat(document.querySelector('#ostroslup_b').value);
    let H = parseFloat(document.querySelector('#ostroslup_H').value);
    let poleWyniku = document.querySelector('#wynik_ostroslup');

    if (isNaN(a) || isNaN(b) || isNaN(H) || a <= 0 || b <= 0 || H <= 0) {
        poleWyniku.innerText = "Wpisz poprawne liczby większe od zera.";
        return;
    }

    let objetosc = (1 / 3) * a * b * H;
    poleWyniku.innerText = "Objętość ostrosłupa wynosi: " + objetosc.toFixed(2);
});
