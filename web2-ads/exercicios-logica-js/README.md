# Exercícios de Lógica com JavaScript

1. Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em umavariável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdosfazendo com que ovalor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaramarmazenados nas variáveis.

```javascript
let a = 10
console.log("old value of A is ", a)

let b = 20
console.log("old value of B is ", b)

let temp = a
a = b
b = temp

console.log("current value of A is ", a)
console.log("current value of B is ", b)
```

2. Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seuantecessor.

```javascript
    // Inicializando Node
    npm init -y

    // Instalando a Lib ReadLine-Sync
    npm install readline-sync

    // Cria um file index.js e preenche
    const readlineSync = require('readline-sync');

    let value = readlineSync.question('Digite um valor númerico. >>> ');
    console.log(`O valor antecedor é ${value-1}`);

    //abre o console e vai até a pasta onde está o index.js e roda o comando
    node index.js
```

3. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular eescrever a área do retângulo.

```javascript
let base = readlineSync.question('Digite a base do triangulo. >>> ');
let altura = readlineSync.question('Digite a base do triangulo. >>> ');
console.log(`A Área do retângulo é ${base*altura}`)
```

4. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias eescreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias emês com 30 dias.

```javascript

```