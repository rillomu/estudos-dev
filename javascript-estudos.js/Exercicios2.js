// Exercício 1 - Exibir mensagem de boas-vindas
// Exercício 2 - Exibir o nome do usuário em uma mensagem de boas-vindas
let meuNome = "Murillo"
console.log (`Boas vindas, ${meuNome}!`);
alert (`Boas vindas, ${meuNome}!`);
// ===============================

// Exercício 3 - Perguntar a linguagem de programação favorita
let resposta = prompt("Qual Qual a linguagem de programação que você mais gosta?");
console.log (`sua resposta foi ${resposta}.`);
// ===============================

// Exercício 4 - Somar dois números
let valor1 = 5
let valor2 = 10
let resultado = valor1 + valor2
console.log (`A soma de ${valor1} + ${valor2} é igual a ${resultado}.`);
// ===============================

// Exercício 5 - Subtrair dois números
let valor1 = 5
let valor2 = 10
let resultado = valor1 - valor2
console.log (`A diferença entre ${valor1} e ${valor2} é igual a ${resultado}.`);
// ===============================

// Exercício 6 - Verificar se o usuário é maior de idade
let idade = Number(prompt("Por favor, informe sua idade."));
if (idade >= 18) {
    console.log ("Maior de idade!");
} else { console.log ("Menor de idade!");
}
// ===============================

// Exercício 7 - Verificar se um número é positivo, negativo ou zero
let numero = Number (prompt("Digite um numero!"));
if (numero > 0) {
    alert("Número positivo");
} else if (numero < 0) {
    alert("Número negativo");
} else {
    alert("Número igual a 0");
}
// ===============================

// Exercício 8 - Exibir números de 1 a 10 usando while
let contador = 1;
while (contador <= 10) {
    console.log(contador);
    contador++;
}
// ===============================

// Exercício 9 - Verificar se o aluno foi aprovado
let nota = 9
if (nota>=7) {
    console.log ("Aprovado!")
} else {
    console.log ("Reprovado!");
}
// ===============================

// Exercício 10 - Gerar um número aleatório entre 0 e 1
let numeroAleatorio = Math.random ();
console.log(`${numeroAleatorio}`);
// ===============================

// Exercício 11 - Gerar um número aleatório entre 1 e 10
let numeroAleatorio2 = Math.floor(Math.random() * 10) + 1;
console.log(numeroAleatorio2);
// ===============================

// Exercício 12 - Gerar um número aleatório entre 1 e 1000
let numeroAleatorio3 = Math.floor(Math.random() * 1000) + 1;
console.log(numeroAleatorio3);