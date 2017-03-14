//JUEGO DE LA CARTA MAS ALTA    
//
//creamos una baraja


console.log(baraja[0].palo);
console.log(baraja[0].numero);
console.log(baraja[0].valor);

for (var i=0; i<baraja.length; i++){
    document.write(baraja[i].palo);
    document.write("<br>");
    document.write(baraja[i].numero);
    document.write("<br>");
    document.write(baraja[i].valor);
    document.write("<br>");
}

function numeroAzar(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

var azar = numeroAzar(0,52);
document.write("<br> <hr><hr><br>");
document.write(baraja[azar].palo);
document.write("<br>");
document.write(baraja[azar].numero);
document.write("<br>");
document.write(baraja[azar].valor);
document.write("<br>");

//el ordenador baraja las cartas
//el jugador 1 elige al azar
//el jugador 2 elige al azar
//gana el que tenga la carta mas alta
//en caso de empate se queda en empate
//
//

