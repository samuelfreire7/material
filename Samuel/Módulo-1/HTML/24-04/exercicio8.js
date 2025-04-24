let ladoA = 2;
let ladoB = 2;
let ladoC = 2;
let ladoD = 2;

if (LadoA == ladoB && ladoB == ladoC && ladoC == ladoD) {

    console.log("O quadrado tem os quatro lados iguais.");
}
else if (ladoA == ladoB || ladoA == ladoC || ladoA == ladoD || ladoB == ladoC || ladoB == ladoD || ladoC == ladoD) {
    console.log("O quadrado tem dois lados iguais.");
} else {
    console.log("O quadrado tem os quatro lados diferentes");
}