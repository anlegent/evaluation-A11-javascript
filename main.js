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

// ex06.js

function getReduction(price, age) {
  if (age <= 5) {
    return (price / 100) * 0;
  } else if (age <= 18) {
    return (price / 100) * 50;
  } else if (age <= 25) {
    return (price / 100) * 30;
  } else if (age <= 25) {
    return (price / 100) * 0;
  }
}

console.log(getReduction(10, 5)); // Résultat attendu: 0
console.log(getReduction(150, 25)); // Résultat attendu: 45

// ex07.js

function isNationalIDValid(name, age, zip, password) {
  if (name.length == 0) {
    return false;
  } else if (age <= 18 && age >= 65) {
    return false;
  } else if (zip < 0 && zip >= 99999) {
    return false;
  } else if (password == "qwerty" || "azerty" || "1234") {
    return false;
  } else {
    return true;
  }
}

console.log(isNationalIDValid("", 18, 69100, "hello")); // Résultat attendu: false
console.log(isNationalIDValid("John", 18, 69100, "amerty")); // Résultat attendu: true

// ex08.js

function calculate(n1, n2, operation) {}

function addition(n1, n2) {}

function subtraction(n1, n2) {}

console.log(calculate(0, 1, addition)); // Résultat attendu: 1
console.log(calculate(0, 10, subtraction)); // Résultat attendu: -10
