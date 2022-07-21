const num1 = prompt("Insira um número");
const num2 = prompt("Insira um outro número");

console.log("O primeiro numero é maior que segundo?", num1 > num2);
console.log("O primeiro numero é igual ao segundo?", num1 === num2);
console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 == 0);
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 == 0);

