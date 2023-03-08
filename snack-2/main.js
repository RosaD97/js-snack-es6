'use strict';

const studenti = [
    {
        id: 213,
        name: 'Marco della Rovere',
        grades: 78
    },
    {
        id: 110,
        name: 'Paola Cortellessa ',
        grades: 96
    },
    {
        id: 250,
        name: 'Andrea Mantegna',
        grades: 48
    },
    {
        id: 145,
        name: 'Gaia Borromini',
        grades: 74
    },
    {
        id: 110,
        name: 'Paola Cortellessa ',
        grades: 96
    },
    {
        id: 196,
        name: 'Luigi Grimaldello',
        grades: 68
    },
    {
        id: 102,
        name: 'Piero della Francesca',
        grades: 50
    },
    {
        id: 120,
        name: 'Francesca da Polenta',
        grades: 84
    }
];

// Nomi in UpperCase per le targhe
const nomiStudenti = studenti.map((element) => {
    return (element.name).toUpperCase();
});
console.log(nomiStudenti); 

// Studenti con voto maggiore di 70
const votiMagg70 = studenti.filter((element) => {
    if (element.grades >= 70){
        return true;
    };
});
console.log(votiMagg70)

// Studenti con voto maggiore di 70 e id maggiore di 120
const votiId= studenti.filter((element) => {
    if (element.grades >= 70 && element.id >= 120){
        return true;
    };
});
console.log(votiId)