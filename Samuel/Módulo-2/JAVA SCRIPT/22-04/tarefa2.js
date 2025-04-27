let tipodeusuario = "visitante";
if (tipodeusuario == "admin") {
    console.log("Acesso total");
} else if (tipodeusuario == "editor") {
    console.log("Acesso limitado");
} else if (tipodeusuario == "visitante") {
    console.log("Acesso somente leitura");
} else {
    console.log("Tipo de usuário inválido");
}