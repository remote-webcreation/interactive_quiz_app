import * as prompt from "prompt-sync";

const quizFragen = [
    {
        frage: 'Wenn ich ein neues Thema lerne, zerlege ich es in kleinere, überschaubare Teile.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich nutze regelmäßig Pausen, um mein Gehirn zu entlasten und die Informationen besser zu verarbeiten.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich überprüfe mein Verständnis, indem ich das Gelernte anderen erkläre oder zusammenfasse.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Wenn ich mich überfordert fühle, versuche ich, negative Gedanken durch positive zu ersetzen.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich nutze visuelle Hilfsmittel wie Mindmaps oder Diagramme, um Informationen zu veranschaulichen.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich plane meine Lernzeiten und setze mir realistische Ziele.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich vermeide Ablenkungen während des Lernens, indem ich z.B. mein Handy ausschalte.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich belohne mich für erreichte Lernziele, um meine Motivation zu steigern.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich reflektiere regelmäßig über meine Lernmethoden und passe sie bei Bedarf an.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
    {
        frage: 'Ich nutze Techniken wie die Pomodoro-Technik, um meine Konzentration zu verbessern.',
        antworten: ['Stimme gar nicht zu', 'Stimme wenig zu', 'Neutral', 'Stimme zu', 'Stimme voll zu'],
    },
];

let punktZahl = 0;

for (const frageObj of quizFragen) {
    console.log(frageObj.frage);
    frageObj.antworten.forEach((antwort, index) => {
        console.log(`${index +1}. ${antwort}`);
    });
}