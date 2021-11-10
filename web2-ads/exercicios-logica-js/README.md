# Exercícios de Lógica com JavaScript

1. Escreva um algoritmo que armazene o valor 10 em uma variável A e o valor 20 em umavariável B. A seguir (utilizando apenas atribuições entre variáveis) troque os seus conteúdosfazendo com que ovalor que está em A passe para B e vice-versa. Ao final, escrever os valores que ficaramarmazenados nas variáveis.

```javascript
let a = 10;
console.log("old value of A is ", a);

let b = 20;
console.log("old value of B is ", b);

let temp = a;
a = b;
b = temp;

console.log("current value of A is ", a);
console.log("current value of B is ", b);
```

2. Escreva um algoritmo para ler um valor (do teclado) e escrever (na tela) o seuantecessor.

```javascript
    // Inicializando Node
    npm init -y

    // Instalando a Lib ReadLine-Sync
    npm install readline-sync

    // Cria um file index.js e preenche
    const readlineSync = require('readline-sync');

    let value = readlineSync.questionInt('Digite um valor númerico. >>> ');
    console.log(`O valor antecedor é ${value-1}`);

    //abre o console e vai até a pasta onde está o index.js e roda o comando
    node index.js
```

3. Escreva um algoritmo para ler as dimensões de um retângulo (base e altura), calcular eescrever a área do retângulo.

```javascript
let base = readlineSync.questionInt("Digite a base do triangulo. >>> ");
let altura = readlineSync.questionInt("Digite a base do triangulo. >>> ");
console.log(`A Área do retângulo é ${base * altura}`);
```

4. Faça um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias eescreva a idade dessa pessoa expressa apenas em dias. Considerar ano com 365 dias emês com 30 dias.

```javascript
const yearBirth = readlineSync.questionInt(
  "Digite o seu ANO de nascimento. (Ex. 1993) >>> "
);
const birthMonth = readlineSync.questionInt(
  "Digite o seu MÊS de nascimento. (Ex. 12) >>> "
);
const birthDay = readlineSync.questionInt(
  "Digite o seu DIA de nascimento. (Ex. 30) >>> "
);

const numberDaysOfBirth = (year, month, day) => {
  let date = new Date();
  return (
    (date.getFullYear() - year) * 365 + (date.getMonth() - month + 1) * 30 + day
  );
};
const counterDays = numberDaysOfBirth(yearBirth, birthMonth, birthDay);

console.log(`Sua idade expressa em dias é ${counterDays}`);
```

5. Escreva um algoritmo para ler o número total de eleitores de um município, o número devotos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representaem relação ao totalde eleitores.

```javascript
const nullVotes = readlineSync.questionInt("Quant. de votos nulos >>> ");
const whiteVotes = readlineSync.questionInt("Quant. de votos em brancos >>> ");
const validVotes = readlineSync.questionInt("Quant. de votos válidos >>> ");

const totalVotes = nullVotes + whiteVotes + validVotes;

console.log(`Porcentagem:
    Votos Nulos - ${Math.floor((nullVotes / totalVotes) * 100, 1)}%
    Votos Brancos - ${Math.floor((whiteVotes / totalVotes) * 100, 1)}%
    Votos Válidos - ${Math.floor((validVotes / totalVotes) * 100, 1)}%
`);
```

Referência de Arredondamento:
[**Math.floor**](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/floor)

6. Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário

```javascript
const currMonthlySalary = readlineSync.questionFloat(
  "Salário mensal atual >>> "
);
const readjustmentPercentage = readlineSync.questionInt(
  "Percentual de reajuste >>> "
);
console.log(`Novo salário: R$${
  currMonthlySalary + (currMonthlySalary / 100) * readjustmentPercentage
}
`);
```

7. O custo de um carro novo ao consumidor é a soma do custo de fábrica com aporcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que opercentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo paraler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

```javascript
const carFactoryCost = readlineSync.questionFloat(
  "Custo de fábrica do carro >>> "
);

const finalCostConsumer = carFactoryCost + carFactoryCost * (0.28 + 0.45);

console.log(
  `Custo final ao consumidor: ${finalCostConsumer.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  })}`
);
```
