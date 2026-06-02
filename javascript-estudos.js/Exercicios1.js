// Pergunta ao usuário o dia da semana
let promptDiaSemana = prompt("Qual o dia da semana?");

// Verifica se é sábado ou domingo
if (promptDiaSemana == "Sábado" || promptDiaSemana == "Domingo") {

     // Exibe mensagem de fim de semana
    alert("Bom fim de semana!");

} else {

    // Exibe mensagem para dias úteis
    alert("Boa semana!");
}

// ======================

// Pede um número ao usuário
let numero = Number(prompt("Digite um numero"));

// Verifica se o número é negativo
if (numero < 0) {

    // Exibe mensagem de número negativo
    alert("Numero negativo");

} else if (numero > 0) {

    // Exibe mensagem de número positivo
    alert("Numero positivo");

} else {

    // Exibe mensagem caso o número seja zero
    alert("Numero zero");
}

 // ======================

// Pede a pontuação do jogo ao usuário
 let pontuacaoJogo = Number(prompt("Digite a pontuação do jogo"));

// Verifica se a pontuação é maior ou igual a 100
 if (pontuacaoJogo >= 100) {
    
     // Exibe mensagem de vitória
    alert ("Ganhou o jogo!")
    
} else {

    // Exibe mensagem de derrota
    alert ("Perdeu o jogo!")
}

 // ======================

// Pede o saldo ao usuário
let valorSaldo = Number(prompt("Informe o valor de seu saldo"));

// Exibe o saldo no console
console.log(`Ola, seu saldo e de ${valorSaldo}`);

 // ======================

 // Pede o nome do usuário
 let nome = prompt ("Por favor, informe seu nome!");

 // Exibe mensagem de boas-vindas
 alert (`Boas vindas, ${nome}!`);
