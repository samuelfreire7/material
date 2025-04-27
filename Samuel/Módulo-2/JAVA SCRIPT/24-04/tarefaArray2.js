let numeros = [1, 2, 3, 4, 5, 6];

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
        console.log("par: "+numeros[i]);
    } else {
        console.log("impar: "+numeros[i]);
    }
}