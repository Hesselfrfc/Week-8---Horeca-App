var frisprijs = 3
var bierprijs = 3.50
var wijnprijs = 4
var aantalfris = 0;
var aantalbier = 0;
var aantalwijn = 0;


alert("Welkom bij Cafe-Bar Hardinxveld! Zou u iets willen bestellen? Het menu bestaat uit: Fris 3 euro. Bier 3,50 euro. Wijn 4 euro.");
while (vraag != "stop"){
	var vraag = prompt("Welke bestelling wilt U toevoegen?");
	if (vraag == "fris"){
	aantalfris = aantalfris + parseInt(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling?"));
}
    if (vraag == "bier"){
	aantalbier = aantalbier + parseInt(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling"));
}
   if (vraag == "wijn"){
	aantalwijn = aantalwijn + parseInt(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling"));
}
}
document.write('Kassabon <br>');

function prijsfris (aantalfris, frisprijs){
	return (aantalfris*frisprijs);
}
var totaalprijsfris = prijsfris(aantalfris,frisprijs);
document.write('Frisdrank :' +  totaalprijsfris + ' ' + "euro" + "<br>");



function prijsbier (aantalbier, bierprijs){
	return (aantalbier*bierprijs);
}
var totaalprijsbier = prijsbier(aantalbier,bierprijs);
document.write('Bier :' + totaalprijsbier + ' ' + "euro" + "<br>");



function prijswijn (aantalwijn,wijnprijs){
	return (aantalwijn*wijnprijs);
}
var totaalprijswijn = prijswijn(aantalwijn,wijnprijs);
document.write('Wijn :' + totaalprijswijn + ' ' + "euro" + "<br>" + "<br>");



document.write('Totaalprijs :' + (totaalprijsfris+totaalprijsbier+totaalprijswijn) + ' ' + "euro" + '<br>' + '<br>');



document.write('Aantal fris :' + aantalfris + '<br>');
document.write('Aantal bier :' + aantalbier + '<br>');
document.write('Aantal wijn :' + aantalwijn + '<br>');





