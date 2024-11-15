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
