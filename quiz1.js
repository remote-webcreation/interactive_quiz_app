// promptSync bibliothek für userinput
import promptSync from "prompt-sync"; 
// init um Benutzereing. zu erh. & programm beenden 
const prompt = promptSync({ sigint: true });



console.log('\nWillkommen zum Lernstrategie-Test!\n');

// speichert name & fügt in template literals ein
let name = prompt('\nWie lautet dein Name? ');
console.log(`\nHallo ${name}, dich erwarten 10 Fragen. Los geht's!\n` );

// array mit obj. & 2 eigensch.  
const quizFragen = [
    {
        frage: '\nWenn ich ein neues Thema lerne, zerlege ich es in kleinere,\nüberschaubare Teile.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch nutze regelmäßig Pausen, um mein Gehirn zu\n entlasten und die Informationen besser zu verarbeiten.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch überprüfe mein Verständnis, indem ich das Gelernte anderen erkläre oder zusammenfasse.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nWenn ich mich überfordert fühle, versuche ich, negative Gedanken durch positive zu ersetzen.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch nutze visuelle Hilfsmittel wie Mindmaps/ Diagramme/ Notizen, um Informationen zu veranschaulichen.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch plane meine Lernzeiten und setze mir realistische Ziele.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch vermeide Ablenkungen während des Lernens, indem ich z.B. mein Handy stumm oder komplett ausschalte.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch belohne mich für erreichte Lernziele, um meine Motivation zu steigern.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch reflektiere regelmäßig über meine Lernmethoden und passe sie bei Bedarf an.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch nutze die Pomodoro-Technik, um meine Konzentration zu verbessern.\n' + '(Du teilst dir deine Lernzeit in 25-minütige Segmente ein, die durch fünfminütige Pausen getrennt sind.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
];

// init. mit number & boolean 
let punktzahl = 0;
let aktuelleFrageIndex = 0;
let quizAbgebrochen = false;
let benutzerAntworten = [];


// loop bis quiz abgebrochen
while (aktuelleFrageIndex < quizFragen.length && !quizAbgebrochen) {
    const frageObj = quizFragen[aktuelleFrageIndex]; // holt frageObj. für aktuelle Frage
    console.log(frageObj.frage);

    frageObj.antworten.forEach((antwort, index) => {
        console.log(`${index + 1}. ${antwort}`);
    });

    console.log('\n0. Abbrechen');
    console.log('6. Zurück\n');

    let benutzerAntwort;

    while (true) { // inner while loop ohne gueltigeAntwort
        benutzerAntwort = prompt('Deine Antwort:  ');

        if (benutzerAntwort === '0') {
            console.log('\nDu hast das Quiz abgebrochen!\n');
            quizAbgebrochen = true;
            break;
        } else if (benutzerAntwort === '6') {

            if (aktuelleFrageIndex > 0) {
                aktuelleFrageIndex--;
                break; // innere schleife endet

            } else {
                console.log('\nDu bist bereits bei der ersten Frage.\n');
            }

        } else {
            const antwortNummer = parseInt(benutzerAntwort);

            if (!isNaN(antwortNummer) && antwortNummer >= 1 && antwortNummer <= frageObj.antworten.length) {
                punktzahl += antwortNummer;
                benutzerAntworten.push(antwortNummer);  // Speichert die Antwort des Benutzers
                aktuelleFrageIndex++;
                break; // Hier wird die innere Schleife verlassen
            } else {
                console.log('\nUngültige Eingabe.\n');
            }
        }
    }

    if (quizAbgebrochen) {
        break;
    }
}




if (!quizAbgebrochen) {

    console.log('\nDeine Gesamtpunktzahl: ' + punktzahl);
    
     //  Gesamtpunktzahl user & array mit antw. des benutzers
    function gibFeedback(punktzahl, antworten) { 

            // < 20 = allg. feedback zur verbesserung Lernstrateg.
        if (punktzahl < 20) {

            console.log("Es scheint, dass du noch einige Lernstrategien entwickeln kannst. Versuche, neue Techniken auszuprobieren und deine Lernumgebung zu optimieren.");

            // checkt erste Antwort Schwellenwert 3 & gibt feedback
        }  if (antworten[0] < 3) {

            console.log("\nVersuche, große Aufgaben in kleinere Teile zu zerlegen.\n");
        }
          // unterscheidet zwischen geringer Zustimmung, Neutralität & starker Zustimmung 1-5
        if (antworten[1] < 3) {

            console.log("\nNutze regelmäßig Pausen, um dein Gehirn zu entlasten .\n");

            // vorherige bed. nicht erfüllt = hinweis Verbesserungspotenzial
        } else if (punktzahl < 35) {
            console.log("\nDu hast bereits einige gute Ansätze, aber es gibt noch Verbesserungspotenzial.\n");

                // < 35 = antworten 3 & 4 werden gecheckt
            if (antworten[3] < 3) {
                console.log("\nKonzentriere dich auf die Anwendung von kognitiven Techniken, um negative Gedanken zu ersetzen.\n");
            }
            if (antworten[4] < 3) {
                console.log("\nNutze visuelle Hilfsmittel wie Mindmaps.\n");
            }
        } else { // punktzahl > 35 = feedeback sehr effekt. Lernstrategien
            console.log("\nHervorragend! Du scheinst sehr effektive Lernstrategien zu verwenden.\n");
        }

    }  

    gibFeedback(punktzahl, benutzerAntworten); 
}





// for (const frageObj of quizFragen) {
//     console.log(frageObj.frage);
//     frageObj.antworten.forEach((antwort, index) => {
//         console.log(`${index +1}. ${antwort}`);
//     });

//     let userAntwort;
//     let acceptedAntwort = false;

//     while (!acceptedAntwort) { 
//         userAntwort = parseInt(prompt('Deine Antwort (Nummer): '));

//         if (userAntwort >= 1 && userAntwort <= frageObj.antworten.length) {
//             acceptedAntwort = true;
//         } else {
//             console.log('Ungültige Eingabe. Bitte Gib eine Zahl zwischen 1 ' + frageObj.antworten.length + ' ein.');
//         }

//     }
// }