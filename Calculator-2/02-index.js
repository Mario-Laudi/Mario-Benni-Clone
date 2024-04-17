const prompt = require("prompt-sync")({ sigint: true });

class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return x - y;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }
}

function abfrage() {
  const calc = new Calculator();

  let answer = prompt(
    "Herzlich willkommen, was dürfen wir für Sie berechnen? (Addition? Subtraktion? Multiplikation? Division?)"
  );

  if (answer.toLowerCase() === "addition") {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));

    console.log(calc.add(num1, num2));
  } else if (answer.toLowerCase() === "subtraktion") {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));

    console.log(calc.subtract(num1, num2));
  } else if (answer.toLowerCase() === "multiplikation") {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));

    console.log(calc.multiply(num1, num2));
  } else if (answer.toLowerCase() === "division") {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));

    console.log(calc.divide(num1, num2));
  } else {
    console.log("Ungenaue Eingabe.");
  }
}
abfrage();
