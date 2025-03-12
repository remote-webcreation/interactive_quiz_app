import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });



console.log('\nWillkommen zum Lernstrategie-Test!\n');
let name = prompt('\nWie lautet dein Name? ');
console.log(`\nHallo ${name}, dich erwarten 10 Fragen. Los geht's!\n` );


const quizFragen = [
    {
        frage: '\nWenn ich ein neues Thema lerne, zerlege ich es in\n kleinere, überschaubare Teile.\n',
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

let punktzahl = 0;
let aktuelleFrageIndex = 0;
let quizAbgebrochen = false;

while (aktuelleFrageIndex < quizFragen.length && !quizAbgebrochen) {

    const frageObj = quizFragen[aktuelleFrageIndex];
    console.log(frageObj.frage);

    frageObj.antworten.forEach((antwort, index) => {

        console.log(`${index + 1}. ${antwort}`);
    });

    console.log('\n0. Abbrechen');
    console.log('6. Zurück\n');

    let benutzerAntwort;
    let gueltigeAntwort = false;

    while (!gueltigeAntwort) {
        benutzerAntwort = prompt('Deine Antwort ist ');

        if (benutzerAntwort === '0') {

            console.log('\nDu hast das Quiz abgebrochen!\n');
            quizAbgebrochen = true;
            break;

        } else if (benutzerAntwort.toLowerCase() === 'b') {
            if (aktuelleFrageIndex > 0) {

                aktuelleFrageIndex--;
                gueltigeAntwort = true;

            } else {
                console.log('Du bist bereits bei der ersten Frage.');
            }

        } else {
            const antwortNummer = parseInt(benutzerAntwort);

            if (!isNaN(antwortNummer) && antwortNummer >= 1 && antwortNummer <= frageObj.antworten.length) {

                punktzahl += antwortNummer;
                gueltigeAntwort = true;
                aktuelleFrageIndex++;

            } else {
                console.log('Ungültige Eingabe.');
            }
        }
    }
}

if (!quizAbgebrochen) {

    console.log('\nDeine Gesamtpunktzahl: ' + punktzahl);

    function gibFeedback(punktzahl) {

        if (punktzahl < 20) {

            console.log("Es scheint, dass du noch einige Lernstrategien entwickeln kannst. Versuche, neue Techniken auszuprobieren und deine Lernumgebung zu optimieren.");

        }  if (antworten[0] < 3) {

            console.log("Versuche, große Aufgaben in kleinere Teile zu zerlegen.");
        }

        if (antworten[1] < 3) {

            console.log("Nutze regelmäßig Pausen, um dein Gehirn zu entlasten .");
        } else if (punktzahl < 35) {
            console.log("Du hast bereits einige gute Ansätze, aber es gibt noch Verbesserungspotenzial.");
            if (antworten[3] < 3) {
                console.log("Konzentriere dich auf die Anwendung von kognitiven Techniken, um negative Gedanken zu ersetzen.");
            }
            if (antworten[4] < 3) {
                console.log("Nutze visuelle Hilfsmittel wie Mindmaps.");
            }
        } else {
            console.log("Hervorragend! Du scheinst sehr effektive Lernstrategien zu verwenden.");
        }

    }  

    gibFeedback(punktzahl);
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