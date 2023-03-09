'use strict';

// Peso in kg
const bici = [
    {
        nome: 'phantom3',
        peso: 8
    },
    {
        nome: 'shockblaze',
        peso: 9
    },
    {
        nome: 'helliot bikes sport',
        peso: 12
    },
    {
        nome: 'trek emonda',
        peso: 10
    },
];

// Prendo solo il nome e il peso
bici.forEach((element) => {
let {nome, peso} = element;
console.log(nome, peso)
});

// Creo un nuovo array con solo il peso delle bici
const pesiBici = bici.map((element) => {
    const peso = element.peso;
    return peso;
});
console.log(pesiBici);

// Restituisco solo la bici con il peso minore
let pesoMin = Math.min(...pesiBici);
console.log(pesoMin);

// Template
console.log(`
La bici con il peso di ${pesoMin}kg è la più leggera tra tutte.

`);
