function pokazFormularz(figura) {

    if (figura == "stozek") {
        document.getElementById("formularz").innerHTML =
        '<h2>Stozek</h2>' +
        '<input type="number" id="objetosc" placeholder="Podaj objetosc">' +
        '<input type="button" value="Zatwierdz" onclick="oblicz()">';
    }

    if (figura == "kula") {
        document.getElementById("formularz").innerHTML =
        '<h2>Kula</h2>' +
        '<input type="number" id="objetosc" placeholder="Podaj objetosc">' +
        '<input type="button" value="Zatwierdz" onclick="oblicz()">';
    }

    if (figura == "ostroslup") {
        document.getElementById("formularz").innerHTML =
        '<h2>Ostroslup</h2>' +
        '<input type="number" id="objetosc" placeholder="Podaj objetosc">' +
        '<input type="button" value="Zatwierdz" onclick="oblicz()">';
    }

}

function oblicz() {

    var objetosc = document.getElementById("objetosc").value;

    if (objetosc > 0) {
        alert("Podana objetosc to: " + objetosc);
    }
    else {
        alert("Podaj poprawna objetosc!");
    }

}