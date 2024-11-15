// ex00.js

function multiplyNumber(a, b) {
  return a * b;
}

console.log(multiplyNumber(0, -1)); // Résultat attendu: 0
console.log(multiplyNumber(-1, -1)); // Résultat attendu: 1

// ex01.js

function greetings(firstname) {
  return "Bienvenue, " + firstname + " !";
}

console.log(greetings("")); // Résultat attendu: "Bienvenue, !"
console.log(greetings("Ben")); // Résultat attendu: "Bienvenue, Ben !"

// ex02.js

function areaCalculator(width, height) {
  return width * height;
}

console.log(areaCalculator(1, 3)); // Résultat attendu: 3
console.log(areaCalculator(1, 0)); // Résultat attendu: 0

// ex03.js

function areaHardcoreCalculator(x1, y1, x2, y2) {
  return;
}

console.log(areaHardcoreCalculator(0, 1, 3, 2)); // Résultat attendu: 3
console.log(areaHardcoreCalculator(1, 68, 2, 87)); // Résultat attendu: 19

// ex04.js

function isSumEven(a, b) {
  return a == b % 2;
}

console.log(isSumEven(1, 3)); // Résultat attendu: true
console.log(isSumEven(1, 0)); // Résultat attendu: false

// ex05.js

function isEnoughMoney(price, wallet) {
  return price <= wallet;
}

console.log(isEnoughMoney(10, 0)); // Résultat attendu: false
console.log(isEnoughMoney(5, 25)); // Résultat attendu: true
