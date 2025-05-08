//DESAFIO 1
let pessoa = {
    nome: "Samuel",
    idade: 17,
    cidade: "Fortaleza"
}

pessoa.idade = 30;

console.log(pessoa.nome + " tem " + pessoa.idade + " anos e mora em: " + pessoa.cidade);

//DESAFIO 2
let produtos = [
    { nome: "Celular", preco: 2500, categoria: "smartphone" },
    { nome: "TV", preco: 2500, categoria: "SmartTV" },
    { nome: "Colchão", preco: 800, categoria: "Estofado" },
]
for (let i = 0; i < produtos.length; i++) {


    console.log("Produto: " + produtos[i].nome + " | Preço: R$" + produtos[i].preco + " | Categoria: " + produtos[i].categoria);
}

//DESAFIO 3
let usuario = {
    nome: "Samuel",
    curso: "Engenharia de Software",
    semestre: 5
}

console.log(`${usuario.nome} está cursando ${usuario.curso} no semestre ${usuario.semestre}`);

//DESAFIO 4
function listarUsuarios(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        console.log(`Nome: ${usuarios[i].nome} | Idade: R$ ${usuarios[i].idade} | CPF: ${usuarios[i].cpf}`)
    }
}
let pessoas = [
    {nome: "Samuel", idade: 17, cpf: 43567567854},
    {nome: "Luan", idade: 23, cpf: 43567567854},
    {nome: "Juan", idade: 22, cpf: 43567567854}
]
listarUsuarios(pessoas)