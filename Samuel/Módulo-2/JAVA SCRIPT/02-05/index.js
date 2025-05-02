document.body.className = localStorage.getItem("tema") || "claro";

function alterarTema() {
    const temaAtual = document.body.className;
    const novoTema = temaAtual === "claro" ? "escuro" : "claro";
    document.body.className = novoTema;
    localStorage.setItem("tema", novoTema);
}