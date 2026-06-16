//======== EXERCÍCIO 1 - VERIFICAR O DIA DA SEMANA ========

let promptDiaSemana = prompt("Qual o dia da semana?"); // Pergunta ao usuário o dia da semana
 
if (promptDiaSemana == "Sábado" || promptDiaSemana == "Domingo") { // Verifica se é sábado ou domingo

    alert("Bom fim de semana!"); // Exibe mensagem de fim de semana

} else {

    alert("Boa semana!"); // Exibe mensagem para dias úteis
}

//======== EXERCÍCIO 2 - VERIFICAR SE UM NÚMERO É POSITIVO, NEGATIVO OU ZERO ========

let numero = Number(prompt("Digite um numero")); // Pede um número ao usuário

if (numero < 0) { // Verifica se o número é negativo

    alert("Numero negativo"); // Exibe mensagem de número negativo

} else if (numero > 0) {
 
    alert("Numero positivo"); // Exibe mensagem de número positivo

} else {

    alert("Numero zero"); // Exibe mensagem caso o número seja zero
}

//======== EXERCÍCIO 3 - VERIFICAR PONTUAÇÃO DO JOGO ========

 let pontuacaoJogo = Number(prompt("Digite a pontuação do jogo")); // Pede a pontuação do jogo ao usuário

 if (pontuacaoJogo >= 100) { // Verifica se a pontuação é maior ou igual a 100
    
    alert ("Ganhou o jogo!") // Exibe mensagem de vitória
    
} else {
    alert ("Perdeu o jogo!") // Exibe mensagem de derrota
}

//======== EXERCÍCIO 4 - EXIBIR SALDO ========

// Pede o saldo ao usuário
let valorSaldo = Number(prompt("Informe o valor de seu saldo"));

// Exibe o saldo no console
console.log(`Ola, seu saldo e de ${valorSaldo}`);

//======== EXERCÍCIO 5 - BOAS-VINDAS COM NOME INFORMADO ========

// Pede o nome do usuário
let nome = prompt ("Por favor, informe seu nome!");

// Exibe mensagem de boas-vindas
alert (`Boas vindas, ${nome}!`);

//======== EXERCÍCIO 6 - BOAS-VINDAS COM NOME EM VARIÁVEL ========

let meuNome = "Murillo"
console.log (`Boas vindas, ${meuNome}!`);
alert (`Boas vindas, ${meuNome}!`);

//======== EXERCÍCIO 7 - LINGUAGEM FAVORITA ========

let resposta = prompt("Qual Qual a linguagem de programação que você mais gosta?");
console.log (`sua resposta foi ${resposta}.`);

//======== EXERCÍCIO 8 - SOMA DE DOIS NÚMEROS ========

let valor1 = 5
let valor2 = 10
let resultado = valor1 + valor2
console.log (`A soma de ${valor1} + ${valor2} é igual a ${resultado}.`);

//======== EXERCÍCIO 9 - SUBTRAÇÃO DE DOIS NÚMEROS ========

let valor1 = 5
let valor2 = 10
let resultado = valor1 - valor2
console.log (`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);

//======== EXERCÍCIO 10 - VERIFICAR MAIORIDADE ========

let idade = Number(prompt("Por favor, informe sua idade."));
if (idade >= 18) {
    console.log ("Maior de idade!");
} else {
    console.log ("Menor de idade!");
}

//======== EXERCÍCIO 11 - EXIBIR NÚMEROS DE 1 A 10 ========

let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}

//======== EXERCÍCIO 12 - VERIFICAR APROVAÇÃO ========

let nota = 9
if (nota>=7) {
    console.log ("Aprovado!")
} else {
    console.log ("Reprovado!");
}

//======== EXERCÍCIO 13 - NÚMERO ALEATÓRIO ENTRE 0 E 1 ========

let numeroAleatorio = Math.random ();
console.log(`${numeroAleatorio}`);

//======== EXERCÍCIO 14 - NÚMERO ALEATÓRIO ENTRE 1 E 10 ========

let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio2);

//======== EXERCÍCIO 15 - NÚMERO ALEATÓRIO ENTRE 1 E 1000 ========

let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);