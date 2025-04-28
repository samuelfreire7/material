let nomes = ["Samuel", "Daniel", "Vitoria", "Júlia", "Jairo", "Ramilka"];

function listaNomes(nome) { 
    // for (let i = 0; i < nomes.length; i++) {
    //     console.log("Olá " +nomes[i] + "!");
    // }
    for ( let nome of nomes) {
        console.log("Olá, " + nome + "!");
        
    }
}

listaNomes(nomes);