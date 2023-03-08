'use strict';

const invitati = [
    {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Brad Pitt',
        posto : 1
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Johnny Depp',
        posto : 2
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Lady Gaga',
        posto : 3
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Cristiano Ronaldo',
        posto : 4
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Georgina Rodriguez',
        posto : 5
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Chiara Ferragni',
        posto : 6
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Fedez',
        posto : 7
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'George Clooney',
        posto : 8
    },
        {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Amal Clooney',
        posto : 9
    },
            {
        'nome-tavolo': 'Tavolo Vip',
        'nome-ospite': 'Maneskin',
        posto : 10
    }
];

invitati.forEach((element) => {
    console.log(`
    Ospite:  ${element["nome-ospite"]} 
    ${element["nome-tavolo"]} in posizione ${element.posto}
    `);
} );
