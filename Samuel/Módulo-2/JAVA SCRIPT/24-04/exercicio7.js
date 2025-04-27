let ladoA = 2;
let ladoB = 2;
let ladoC = 2;

if (ladoA == ladoB && ladoB == ladoC) {
    console.log("O triângulo tem 3 lados iguais: equilátero.");
} else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC){
    console.log("O triângulo tem dois lados iguais: isósceles.");
} else {
    console.log("O triangulo tem três lados diferentes: escaleno.");
}