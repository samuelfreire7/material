// const titulo = document.getElementById("texto");
const botao = document.getElementById("btn");
// const teste = document.getElementById("cor");
const resultado = document.getElementById("resultado");
// const lista = document.getElementById("lista");
const entrada = document.getElementById("entrada")



function teste2() {
    // titulo.textContent = "Novo texto";
    // titulo.style.color = "red";
    // teste.style.backgroundColor = "blue";
    // paragrafo.remove();

    // const novoItem = document.createElement("li");
    // novoItem.textContent = "Mais um item Criado";
    // lista.appendChild(novoItem);

    const texto = entrada.value;
    resultado.textContent = `Você digitou: ${texto}`;

}
botao.addEventListener("click", teste2);

// botao.addEventListener("mouseover", () => {
//     titulo.textContent = "Novo texto";
//     titulo.style.color = "red";
//     teste.style.backgroundColor = "blue";

// })
// botao.addEventListener("mousealt", () => {

// })