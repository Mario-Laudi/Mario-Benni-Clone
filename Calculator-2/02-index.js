const prompt = require("prompt-sync")({ sigint: true });
/*Diese Zeile importiert das prompt-sync-Modul und initialisiert die prompt-Funktion 
für die Synchronisation von Benutzereingaben über die Konsole.
*/
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
  /*Die Zeile erstellt eine neue Instanz der Klasse Calculator und weist sie der 
  Konstanten calc zu, so dass Sie Methoden und Eigenschaften dieser Instanz über 
  calc verwenden können.
*/
  let answer = prompt(
    "Herzlich willkommen, was dürfen wir für Sie berechnen? (Addition? Subtraktion? Multiplikation? Division?)"
  );
  //Die Funktion parseFloat() wird in JavaScript verwendet, um einen String in eine Fließkommazahl (Gleitkommazahl) umzuwandeln.

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
