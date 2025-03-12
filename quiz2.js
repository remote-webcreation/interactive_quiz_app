import readlineSync from "readline-sync";

let score = 0;

let usernname = resolveSync.readlineSync.question("Willkommen zum Java-Script Quiz, \nwie lautet dein Name?");

console.log( '\nHallo', username + ' Es geht los. Viel Erfolg!');


let question1 = {
    question: '\nFrage 1: Was ist der Unterschied zwischen "let", "const" und "var"? \n A. let und const haben Block-Scope var hat Function-Scope. \n B. var und const haben Block-Scope, let hat Function-Scope. \n C. Es gibt keinen Unterschied. \n D. let und var haben Block-Scope, const hat Global-Scope.'
    antwort: "B"
}

let question2 = {
    question: '\nFrage 2: Was gibt "typeof null" zurück? \n A. null \n B. undefined \n C. object \n D.number'
    antwort: "C"
        
}

let question3 = {
    question: '\nFrage 3: Wie iteriert man über ein Array in JavaScript? \n A. Mit einer "for"-Schleife oder "forEach()" \n B. Mit einer "while"-Schleife \n C. Mit einer "if"-Bedingung \n D. Mit einer switch-Anweisung'
    antwort: "A"
        
}

let question4 = {
    question: '\nFrage 4: Was ist ein Closure in JavaScript? \n A. Eine Funktion, die keine Parameter hat" \n B. Eine Funktion, die auf Variablen aus ihrem lexikalischen Scope zugreifen kann, auch wenn die äußere Funktion bereits beendet wurde \n C. Eine Funktion, die nur globale Variablen verwenden kann \n D. Eine Funktion, die immer anonym ist'
    antwort: "B"
        
}

let question5 = {
    question: '\nFrage 5: Was ist der Unterschied zwischen "==" und "==="? \n A. == prüft auf Wertgleichheit, === prüft auf Wert- und Typgleichheit" \n B. === prüft auf Wertgleichheit, == prüft auf Wert- und Typgleichheit \n C. Es gibt keinen Unterschied \n D. == prüft nur auf Typgleichheit, === prüft nur auf Wertgleichheit'
    antwort: "A"
        
}

