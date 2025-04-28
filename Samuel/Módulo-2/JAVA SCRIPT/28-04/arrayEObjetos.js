// let celulares = [
//     {marca: "Iphone", modelo: 11, ano: 2019},
//     {marca: "Iphone", modelo: 12, ano: 2020},
//     {marca: "Iphone", modelo: 13, ano: 2021},
// ]

// console.log(celulares[0].modelo);

// let filmes = [
//     {titulo: "Deadpool e Wolverine" , genero: "Ação" , ano: 2024},
//     {titulo: "Vingadores Ultimato" , genero: "Ação" , ano: 2019},
//     {titulo: "Steve Jobs" , genero: "Biogràfico" , ano: 2015},
// ]
// function criarPessoa(nome, idade, genero, cor) {
//     return {
//         nome: nome,
//         idade: idade,
//         genero: genero,
//         cor: cor
//     };
// }

// let pessoa1 = criarPessoa("Lanilton", 25, "Masculino", "Branco");

// console.log(pessoa1.idade);

// function filmes(titulo, genero, ano) {
//     return {
//         titulo: titulo,
//         genero: genero,
//         ano: ano
//     };
// }

// let filme1 = filmes("Steve Jobs", "Biográfico", 2015);

// console.log(filme1.genero);

// alert("Bem Vindo!")

// prompt("Qual o seu nome?")

// confirm("Se você deseja sair dessa tela, clique no 'ok'")

// let nome = prompt("Qual o seu nome?");
// let confirma = confirm("Seu nome é: " + nome + "?")

// if(confirma){
//     alert("Nome foi confirmado")
// } else {
//     alert("Nome não confirmado");
// }

let nome = prompt("Qual seu nome?");
let idade = prompt("Qual sua idade?");
let filmeFavorito = prompt("Qual seu filme favorito?");

// alert("Bem-Vindo " + nome + ", sua idade é " + idade + " anos e seu filme favorito é: " + filmeFavorito);

let pessoa = {
    nome: nome,
    idade: idade,
    filme: filmeFavorito
}

alert("Bem-Vindo " + pessoa.nome + ", sua idade é " + pessoa.idade + " anos e seu filme favorito é: " + pessoa.filme);
