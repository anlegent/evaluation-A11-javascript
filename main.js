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
