//======== TEXTOS ========

// Altera o texto de qualquer elemento HTML
function alterarTexto(tag, texto) {
    document.querySelector(tag).textContent = texto;
}

// Manipula textos da página HTML pelo JS.
alterarTexto("h1", "Teste HTML + JavaScript");
alterarTexto("p1", "Primeiro parágrafo da página");

//======== PROMPTS ========

// Solicita alguma informação do usuário.
function pedirNome() {
    let nomeUsuario = prompt("Por gentileza, informe seu nome.");
    alert(`Prazer em te conhecer, ${nomeUsuario}!`);
}

//======== CONSOLE ========

// Exibe mensagens no console.
function MensagemConsole() {
    console.log("Você esta acessando o console!");
}

//======== ALERTAS ========

// Exibe mensagens na tela do usuario.
function MensagemBoasVindas() {
    alert("Olá, bem-vindo(a) ao teste de JavaScript!");
}

//======== EXECUÇÃO DE CALCULOS ========

let numero = Number(prompt("Insira um numero para calcular o dobro dele"));

function dobrar(numero) {
    return numero * 2;
}
let resultado = dobrar(numero);
alert(`O dobro desse numero e: ${resultado}`);