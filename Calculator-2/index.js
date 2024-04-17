class Calculator {
  constructor() {
    this.PI = Math.PI;
    this.E = Math.E;
  }

  percentage(x, y) {
    if (y === 0) {
      return `Fehler: Divisor darf nicht Null sein.`;
    }
    return (x / y) * 100 + "%";
  }

  add(x, y) {
    return x + y;
  }

  subtract(x, y) {
    return y - x;
  }

  multiply(x, y) {
    return x * y;
  }

  divide(x, y) {
    return x / y;
  }
}

const prompt = require("prompt-sync")({ sigint: true });

function abfrage() {
  let answer = prompt(
    "Herzlich willkommen, was dürfen wir für Sie berechnen? (Prozentrechnung? Addition? Subtraction? Multiplication? Division?)"
  );

  const calc = new Calculator();

  if (
    answer.toLowerCase() === "prozentrechnung" ||
    answer.toLowerCase() === "percentage calculation"
  ) {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));
    
    console.log(calc.percentage(num1, num2));
  } else if (
    answer.toLowerCase() === "adition" ||
    answer.toLowerCase() === "addition"
  ) {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));
    console.log(calc.add(num1, num2));
  } else if (
    answer.toLowerCase() === "subtraktion" ||
    answer.toLowerCase() === "subtraction"
  ) {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));
    console.log(calc.subtract(num1, num2));
  } else if (
    answer.toLowerCase() === "multiplikation" ||
    answer.toLowerCase() === "multiplication"
  ) {
    let num1 = parseFloat(prompt("Bitte die erste Zahl eingeben: "));
    let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));
    console.log(calc.multiply(num1, num2));
  } else if (answer.toLowerCase() == "Bitte die erste Zahl eingeben: ");
  let num2 = parseFloat(prompt("Bitte die zweite Zahl eingeben: "));
  console.log(calc.divide(num1, num2));
}
else {
  console.log("Ungenaue Eingabe.");
}


abfrage();
