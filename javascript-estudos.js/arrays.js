//======== CRIAR UMA LISTA (ARRAY) ========
let listaLinguagens = ["JavaScript", "C++", "GoLang"];

//======== PUSH() -> ADICIONA UM ITEM NO FINAL ========

listaLinguagens.push("Python");

console.log(listaLinguagens);
// ["JavaScript", "C++", "GoLang", "Python"]

//======== POP() -> REMOVE O ÚLTIMO ITEM ========

listaLinguagens.pop();

console.log(listaLinguagens);
// ["JavaScript", "C++", "GoLang"]

//======== LENGTH -> MOSTRA QUANTOS ITENS EXISTEM ========

console.log(listaLinguagens.length);
// 3

//======== ACESSAR UM ITEM PELO ÍNDICE ========

console.log(listaLinguagens[0]);
// JavaScript

console.log(listaLinguagens[1]);
// C++

console.log(listaLinguagens[2]);
// GoLang

//======== ALTERAR UM ITEM EXISTENTE ========

listaLinguagens[2] = "Java";

console.log(listaLinguagens);
// ["JavaScript", "C++", "Java"]

//======== SPLICE() -> REMOVE ITENS ESPECÍFICOS ========
// splice(posição, quantidade)

listaLinguagens.splice(1, 1);

console.log(listaLinguagens);
// ["JavaScript", "Java"]

//======== INCLUDES() -> VERIFICA SE UM ITEM EXISTE ========
// Retorna true ou false

console.log(listaLinguagens.includes("Java"));
// true

console.log(listaLinguagens.includes("Python"));
// false

//======== INDEXOF() -> DESCOBRE O ÍNDICE DE UM ITEM ========

console.log(listaLinguagens.indexOf("Java"));
// 1

console.log(listaLinguagens.indexOf("Python"));
// -1 (não encontrado)

//======== FOR -> PERCORRE TODOS OS ELEMENTOS ========

for (let i = 0; i < listaLinguagens.length; i++) {
    console.log(listaLinguagens[i]);
}

//======== UNSHIFT() -> ADICIONA UM ITEM NO INÍCIO ========

listaLinguagens.unshift("HTML");

console.log(listaLinguagens);
// ["HTML", "JavaScript", "Java"]

//========  SHIFT() -> REMOVE O PRIMEIRO ITEM ========

listaLinguagens.shift();

console.log(listaLinguagens);
// ["JavaScript", "Java"]