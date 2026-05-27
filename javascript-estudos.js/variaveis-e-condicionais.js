// Exibe mensagem de boas-vindas
alert("Boas vindas ao nosso site!");

// Declara uma variável com o nome do usuário
let nome = "João";

// Declara a idade do usuário
let idade = 25;

// Quantidade de vendas realizadas
let numeroDeVendas = 50;

// Saldo disponível na conta
let saldoDisponivel = 1000;

// Exibe mensagem de erro
alert("Erro! Preencha todos os campos");

// Armazena mensagem de erro em uma variável
let mensagemDeErro = "Erro! Preencha todos os campos";

// Mostra a mensagem de erro
alert(mensagemDeErro);

// Pergunta o nome do usuário
let promptNome = prompt("Qual seu nome?");

// Pergunta a idade do usuário e converte para número
let promptIdade = parseInt(prompt("Qual sua idade?"));

// Verifica se o usuário pode acessar site
if (promptIdade >= 18) {
    alert("Acesso permitido!");
} else { 
    alert("Acesso negado!");
}

