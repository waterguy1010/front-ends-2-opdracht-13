let myStr = "dit is een variabele van het datatype string"; //dit is een variabele van het datatype string, waarom?___omdat het een teks is een geen cijfer en heeft twee ""__ vul je antwoord in op de lijn
let myInt = 10; //dit is een variabele van het datatype __integer___waarom? ___Dit is een getal__ vul je antwoorden in op de lijn

//Waarom staat er let voor de variabelen?___ Als je een variabele voor het eerst aanmaakt moet je hem declareren, dit doe je door let ervoor te schrijven___ vul je antwoord in op de lijn

function getName(naam) { //In op welke regel in de HTML file wordt deze functie aangeroepen _in regel ___19___ vul je antwoord in op de lijn

    // vul in wat naam is: naam is de___parameter___ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen
    // vul in: naam heeft de waarde __van de variabele__ de waarde noemen we een ____Argument___ vul je antwoord in op de lijn, je hebt de eerste letter al gekregen

    alert(naam); //dit toont een _melding (alert)_ op het scherm met de tekst _mijn naam want ik heb het veranderd_  deze tekst staan op regel __19___ van de HTML vul je antwoord in op de lijn
}

function hideMe() { //mag je de naam van de functie veranderen? _ja_  vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "none";
    document.getElementById("show").style.display = "block";
    // wat gebeurd er in deze functie?___als je op de foto klik, veranderd naar een andere foto.__en waar wordt deze in je HTML aangeroepen? op regel 25 en 27__ vul je antwoorden in op de lijn
}

function show() { //als ik de naam van deze functie verander, waar verander ik deze dan in de HTML __na onclick__ vul je antwoord in op de lijn
    document.getElementById("hide").style.display = "block"; // wat doet getElementById? __hij selecteert de id naam. hide____ vul je antwoord in op de lijn
    document.getElementById("show").style.display = "none";
    // wat gebeurd er in deze functie? ___als je er op klik veranderd de foto niet in blok.__ vul je antwoord in op de lijn
}

function rekenen(getal) { //In op welke regel in de HTML file wordt deze functie aangeroepen ___34____ en wanneer wordt deze aangeroepen? Door de naam van de funtie en () te zetten____ vul je antwoord in op de lijn

    let antwoord = myInt + getal; //waar komt de waarde van myInt vandaan _myInt _waarde is 3____ en waar komt de waarde van getal vandaan? is de parameter van de funtie "rekenen"___ vul je antwoord in op de lijn

    document.querySelector(".som").innerHTML = antwoord; // wat doet querySelector? __hij selecteert de class genaamd .som____Wat is antwoord hier? vul je antwoorden in op de lijn

    //wat gebeurt er in deze functie? ___deze funtie optel de waarde van myInt en getal___ vul je antwoord in op de lijn

    //verander de waarde van myInt (zorg dat je een getal gebruikt) en refresh de pagina, wat gebeurd er? het veranderd van getal . vul je antwoord in op de lijn
    //probeer ook eens de + in een - te veranderen of in een * als waarde van de variabele antwoord (regel 28), zie je wat er gebeurt? als x doet gaat het keren, doe ik min ga ik aftreken.
}

function setColor(element, kleur, size) { //In op welke regel in de HTML file wordt deze functie aangeroepen _______46_______ vul je antwoord in op de lijn

    element.style.color = kleur; //waar komt de waarde van element vandaan?  van de funtie setColor in de html tussen de () is een waarde gegeven___ en waar komt de waarde van kleur vandaan? functie onclick () html___ vul je antwoord in op de lijn
    element.style.fontSize = size; //waar komt de waarde van szie vandaan? _parameter en argumenten funtie setColor onclick ()___ vul je antwoord in op de lijn

    //wat gebeurt er in deze functie? _als je er op klik, veranderd van kleur, size! _ vul je antwoord in op de lijn
}

getName();
// wat gebeurd er hierboven ___datatype string______ en wanneer gebeurt dat als de website ververs zie je dat de datatype string is __________ (tip ververs je pagina eens in je brouwser? vul je antwoord in op de lijn.
// verander de waarde van myStr en kijk wat er dan gebeurt (ververs je browser en test het uit) wat gebeurd er? _als de de waarde helemaal weghaald krijg je undefined___ vul je antwoord in op de lijn. 