import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

const quizFragen = [
    {
        frage: '\nWenn ich ein neues Thema lerne, zerlege ich es in kleinere, überschaubare Teile.\n',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: '\nIch nutze regelmäßig Pausen, um mein Gehirn zu entlasten und die Informationen besser zu verarbeiten.\n',
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
        benutzerAntwort = prompt('Deine Antwort Nr.: ');

        if (benutzerAntwort === null) {

            console.log('Quiz abgebrochen (Strg+C).');
            quizAbgebrochen = true;
            break;

        } else if (benutzerAntwort === '0') {

            console.log('Quiz abgebrochen.');
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

    // function gibFeedback(punktzahl) {
    //     // ...  Feedback-Funktion
    // }

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