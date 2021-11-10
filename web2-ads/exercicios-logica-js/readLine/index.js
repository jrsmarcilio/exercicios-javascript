const readlineSync = require('readline-sync');

// 2. Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seuantecessor.

// let value = readlineSync.question('Digite um valor númerico. >>> ');
// console.log(`O valor antecedor é ${value-1}`);


// 3. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura),
// calcular e escrever a área do retângulo.

// let base = readlineSync.question('Digite a base do triangulo. >>> ');
// let altura = readlineSync.question('Digite a base do triangulo. >>> ');
// console.log(`A Área do retângulo é ${base*altura}`)


// 4) Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e escreva
// a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias e mês com 30 dias.

let anoNasc = readlineSync.question('Digite o seu ANO de nascimento. (Ex. 1993) >>> ');
let mesNasc = readlineSync.question('Digite o seu MÊS de nascimento. (Ex. 12) >>> ');
let diaNasc = readlineSync.question('Digite o seu DIA de nascimento. (Ex. 30) >>> ');

let anoAtual = new Date().getFullYear()
let mesAtual = new Date().getMonth() + 1
let diaAtual = new Date().getDate()

let dateNascimento = new Date(anoNasc, mesNasc, diaNasc)
let dateAtual = new Date()


dateAtual.get
// let idadeDias = (anoAtual - anoNasc) * 365 + (mesNasc * 30) + diaNasc

// console.log(`Sua idade expressa em dias é ${idadeDias}`)

console.log(`
    ${anoAtual}
    ${mesAtual}
    ${diaAtual}

    ${dateNascimento - dateAtual}
`)