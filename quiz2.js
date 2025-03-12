import readlineSync from "readline-sync";

let score = 0;

let username = readlineSync.question("Willkommen zum Java-Script Quiz, \n \nwie lautet dein Name? ");

console.log('\nHallo', username + ', es geht los. Viel Erfolg!');

let question1 = {
    question: '\nFrage 1: Was ist der Unterschied zwischen "let", "const" und "var"? \n \n A. let und const haben Block-Scope var hat Function-Scope \n B. var und const haben Block-Scope, let hat Function-Scope \n C. Es gibt keinen Unterschied \n D. let und var haben Block-Scope, const hat Global-Scope\n',
    antwort: "A"
}

let question2 = {
    question: '\nFrage 2: Was gibt "typeof null" zurück? \n \n A. null \n B. undefined \n C. object \n D. number\n',
    antwort: "C"
}

let question3 = {
    question: '\nFrage 3: Wie iteriert man über ein Array in JavaScript? \n \n A. for-Schleife oder forEach() \n B. while-Schleife \n C. if-Bedingung \n D. switch-Anweisung\n',
    antwort: "A"

}

let question4 = {
    question: '\nFrage 4: Was ist ein Closure in JavaScript?\n \n A. Eine Funktion, die keine Parameter hat \n B. Eine Funktion, die auf Variablen aus ihrem lexikalischen\n Scope zugreifen kann, auch wenn die äußere Funktion bereits beendet wurde \n C. Eine Funktion, die nur globale Variablen verwenden kann \n D. Eine Funktion, die immer anonym ist\n',
    antwort: "B"

}

let question5 = {
    question: '\nFrage 5: Was ist der Zweck des this-Schlüsselworts in JavaScript?\n \n A. verweist auf die aktuelle Datei \n B. verweist auf das globale Objekt \n C. verweist auf das Objekt, in dem die aktuelle Funktion aufgerufen wird \n D. verweist auf den Prototyp des aktuellen Objekts\n',
    antwort: "C"

}

let questions = [question1, question2, question3, question4, question5];

// play function
function play(question, answer) {
    let userAntwort = readlineSync.question(question);
    if (userAntwort.toUpperCase() === answer.toUpperCase()) {
        console.log("\n \nRichtige Antwort!");
        score++;
    } else {
        console.log("\n \nFalsch!");
    }
}

// for loop
questions.forEach(questionObj => {
    play(questionObj.question, questionObj.antwort);
});

console.log("Dein Score ist: " + score + "/5 ");