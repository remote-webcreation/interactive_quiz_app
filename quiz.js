import promptSync from "prompt-sync";
const prompt = promptSync();

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
        frage: '\nIch nutze visuelle Hilfsmittel wie Mindmaps oder Diagramme, um Informationen zu veranschaulichen.\n',
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

let punktZahl = 0;
let aktFrageIndex = 0;  // index aktuelle Frage


while (aktFrageIndex < quizFragen.length) {

    const frageObj = quizFragen[aktFrageIndex];
    console.log(frageObj.frage);

    frageObj.antworten.forEach((antwort, index) => {
        console.log(`${index + 1}. ${antwort}`);
    });


    // added abbr. & zurück
    console.log('0. Abbrechen'); 
    console.log('1. zurück');

    let userAntwort;
    let acceptedAntwort = false;

    while (!acceptedAntwort) {

        userAntwort = prompt('Deine Antwort (Nummer/b/0): ');

        if (userAntwort === '0') {

            console.log('Quiz abgebrochen');
            return;

        }  else if (userAntwort.toLocaleLowerCase() === 'b') {

            if (aktFrageIndex > 0) {
                aktFrageIndex--;  // zurück zur vorherigen Frage
                acceptedAntwort = true;

            }
        }
    }
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