'use strict';

// Funzione per generare numeri random
function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
// Squadre
const squadre = [
    {
        nome: 'Inter',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Napoli',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Roma',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Milan',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Juventus',
        punti: 0,
        falli: 0,
    },
    {
        nome: 'Lazio',
        punti: 0,
        falli: 0,
    },
];

// Creo un nuovo array dove inserisco numeri random alle key
const punti = squadre.map((element) => {
    element["falli"] = randomNum(0, 20);
    element["punti"] = randomNum(0, 20);
    return element;
});
console.log(punti)

// Nuovo array con nome e falli
const newSquadre = punti.map((element) => {
    const {nome, falli} = element;
    return {nome, falli};
});
console.log(newSquadre)

newSquadre.forEach((element) => {
    console.log(`
    Squadra: ${element["nome"]} 
    Falli subiti: ${element["falli"]}`);
});