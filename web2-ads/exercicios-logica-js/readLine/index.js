const readlineSync = require("readline-sync");

const currencyFormatES6 = (value) =>
  new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" }).format(
    value
  );

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

// const yearBirth = parseInt(
//   readlineSync.question("Digite o seu ANO de nascimento. (Ex. 1993) >>> ")
// );
// const birthMonth = parseInt(
//   readlineSync.question("Digite o seu MÊS de nascimento. (Ex. 12) >>> ")
// );
// const birthDay = parseInt(
//   readlineSync.question("Digite o seu DIA de nascimento. (Ex. 30) >>> ")
// );

// const numberDaysOfBirth = (year, month, day) => {
//   let date = new Date();
//   return (
//     (date.getFullYear() - year) * 365 + (date.getMonth() - month + 1) * 30 + day
//   );
// };
// const counterDays = numberDaysOfBirth(yearBirth, birthMonth, birthDay);

// console.log(`Sua idade: ${counterDays} dias`);

// 5. Escreva um algoritmo para ler o número total de eleitores de um município, o número de votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa em relação ao total de eleitores.

// const nullVotes = readlineSync.questionInt("Quant. de votos nulos >>> ");
// const whiteVotes = readlineSync.questionInt("Quant. de votos em brancos >>> ");
// const validVotes = readlineSync.questionInt("Quant. de votos válidos >>> ");

// const totalVotes = nullVotes + whiteVotes + validVotes;

// console.log(`Porcentagem:
//     Votos Nulos - ${Math.floor((nullVotes / totalVotes) * 100, 1)}%
//     Votos Brancos - ${Math.floor((whiteVotes / totalVotes) * 100, 1)}%
//     Votos Válidos - ${Math.floor((validVotes / totalVotes) * 100, 1)}%
// `);

// 6. Escreva um algoritmo para ler o salário mensal atual de um funcionário e o percentual de reajuste. Calcular e escrever o valor do novo salário

// const currMonthlySalary = readlineSync.questionFloat(
//   "Salário mensal atual >>> "
// );
// const readjustmentPercentage = readlineSync.questionInt(
//   "Percentual de reajuste >>> "
// );
// console.log(`Novo salário: R$${
//   currMonthlySalary + (currMonthlySalary / 100) * readjustmentPercentage
// }
// `);

// 7. O custo de um carro novo ao consumidor é a soma do custo de fábrica com a porcentagem do distribuidor e dos impostos (aplicados ao custo de fábrica). Supondo que o percentual do distribuidor seja de 28% e os impostos de 45%, escrever um algoritmo para ler o custo de fábrica de um carro, calcular e escrever o custo final ao consumidor.

// const carFactoryCost = readlineSync.questionFloat(
//   "Custo de fábrica do carro >>> "
// );

// const finalCostConsumer = carFactoryCost + carFactoryCost * (0.28 + 0.45);

// console.log(
//   `Custo final ao consumidor: ${finalCostConsumer.toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   })}`
// );

// 8. Uma revendedora de carros usados paga a seus funcionários vendedores um salário fixo por mês, mais uma comissão também fixa para cada carro vendido e mais 5% do valor das vendas por ele efetuadas. Escrever um algoritmo que leia o número de carros por ele vendidos, o valor total de suas vendas, o salário fixo e o valor que ele recebe por carro vendido. Calcule e escreva o salário final do vendedor.

// const numberCarsSold = readlineSync.questionInt(
//   "Número de carros vendido >>> "
// );
// const totalValueSales = readlineSync.questionInt("Valor total das vendas >>> ");
// const fixedSalary = readlineSync.questionFloat("Salário fixo >>> ");
// const commissionCarSold = readlineSync.questionInt(
//   "Comissão por carro vendido >>> "
// );
// const finalSalary =
//   fixedSalary + numberCarsSold * commissionCarSold + totalValueSales * 0.05;

// console.log(
//   `Salário final: ${finalSalary.toLocaleString("pt-BR", {
//     style: "currency",
//     currency: "BRL",
//   })}`
// );

// 9. Ler um valor e escrever a mensagem É MAIOR QUE 10! se o valor lido for maior que 10,caso contrário escrever NÃO É MAIOR QUE 10!

// const value = readlineSync.questionInt("Valor >>> ");
// console.log(`${value > 10 ? "É MAIOR QUE 10!" : "NÃO É MAIOR QUE 10!"}`);

// 10. Ler um valor e escrever se é positivo ou negativo (considere o valor zero como positivo).

// const value = readlineSync.questionInt("Valor >>> ");
// console.log(`${value >= 0 ? "É POSITIVO!" : "É NEGATIVO!"}`);

// 11. As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e escreva o custo total da compra.

// const NumberApples = readlineSync.questionInt("Número de maçãs compradas >>> ");
// const totalCost = NumberApples < 12 ? NumberApples * 1.3 : NumberApples;
// console.log(`Custo total da compra ${currencyFormatES6(totalCost)}`);

// 12. Ler as notas da 1a. e 2a. avaliações de um aluno. Calcular a média aritmética simples e escrever uma mensagem que diga se o aluno foi ou não aprovado (considerar que nota igual ou maior que 6 o aluno é aprovado). Escrever também a média calculada.

// const firstNote = readlineSync.questionInt("Primeira Nota >>> ");
// const lastNote = readlineSync.questionInt("Última Nota >>> ");
// const media = (firstNote + lastNote) / 2;
// const situation = media >= 6 ? "APROVADO" : "REPROVADO";
// console.log(`Aluno ${situation} com média de ${media}`);

// 13) Ler o ano atual e o ano de nascimento de uma pessoa. Escrever uma mensagem que diga se ela poderá ou não votar este ano (não é necessário considerar o mês em que a pessoa nasceu).

// const currentYear = new Date().getFullYear();
// const yearBirth = readlineSync.questionInt(
//   "Informe seu ano de nascimento. Ex.: 1999 >>> "
// );
// const situation = currentYear - yearBirth >= 18 ? "PODERÁ" : "NÃO PODERÁ";
// console.log(`Você ${situation} votar esse ano.`);

//14) Ler dois valores (considere que não serão lidos valores iguais) e escrevê-los em ordem crescente.

// const firstValue = readlineSync.questionFloat(`Digite o primeiro valor. >>> `);
// let lastValue;

// do {
//   lastValue = readlineSync.questionFloat(`Digite o último valor. >>> `);
// } while (lastValue === firstValue);

// console.log([firstValue, lastValue].sort());

//15) Ler a hora de início e a hora de fim de um jogo de Xadrez (considere apenas horas inteiras, sem os minutos) e calcule a duração do jogo em horas, sabendo-se que o tempo máximo de duração do jogo é de 24 horas e que o jogo pode iniciar em um dia e terminar no dia seguinte.

// const initHour = readlineSync.questionInt("Hora inicial do game. Ex.: 16 >>> ");
// const finalHour = readlineSync.questionInt("Hora final do game. Ex.: 18 >>> ");
// if (initHour > 23 || finalHour > 23 || initHour < 0 || finalHour < 0) return;

// const duration =
//   finalHour - initHour < 0 ? finalHour - initHour + 24 : finalHour - initHour;

// console.log(`O jogo teve a duração de ${duration}hs`);

//16) Escreva um algoritmo para ler 2 valores e se o segundo valor informado for ZERO, deve ser lido um novo valor, ou seja, para o segundo valor não pode ser aceito o valor zero e imprimir o resultado da divisão do primeiro valor lido pelo segundo valor lido. (utilizar a estrutura REPITA).

// const firstValue = readlineSync.questionFloat(`Digite o primeiro valor. >>> `);
// let lastValue;

// do {
//   lastValue = readlineSync.questionFloat(`Digite o último valor. >>> `);
// } while (lastValue === 0);

// console.log(`O resultado da divisão: ${firstValue / lastValue}`);

//17) Reescreva o exercício anterior utilizando a estrutura ENQUANTO.

const firstValue = readlineSync.questionFloat(`Digite o primeiro valor. >>> `);
let lastValue = readlineSync.questionFloat(`Digite o último valor. >>> `);

while (lastValue === 0) {
  console.log(`\nVALOR INVÁLIDO`);
  lastValue = readlineSync.questionFloat(`Digite o valor novamente. >>> `);
}

console.log(`O resultado da divisão: ${firstValue / lastValue}`);

//18) Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [44] caso o segundo valor informado seja ZERO.

//19) Acrescentar uma mensagem de 'VALOR INVÁLIDO' no exercício [45] caso o segundo valor informado seja ZERO.

//20) Escreva um algoritmo para ler as notas da 1a. e 2a. avaliações de um aluno, calcule eimprima a média (simples) desse aluno. Só devem ser aceitos valores válidos durante aleitura (0 a 10) para cada nota.
