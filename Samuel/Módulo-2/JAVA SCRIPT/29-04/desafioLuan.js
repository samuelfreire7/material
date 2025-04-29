let acessos = {email: "samuelfgwm@gmail.com", senha: "samuel123"};
let email = prompt("Qual seu Email?");
let senha = prompt("Qual sua Senha?");
let login = {
    email: email,
    senha: senha
};

function logiin(objeto1, objeto2) {   
    if(acessos.email == email && acessos.senha == senha){
        alert("Acesso confirmado!")
    } else {
        alert("O Email e senha não batem.")
    }
};

logiin(acessos, login);