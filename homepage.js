const firstTablet = document.getElementById("tablet-1");
const secondTablet = document.getElementById("tablet-2");
const thirdTablet = document.getElementById("tablet-3");
const fourthTablet = document.getElementById("tablet-4");
const card1 = document.getElementById("img-L-1");
const card2 = document.getElementById("img-L-2");
const card3 = document.getElementById("img-L-3");

//  original array of all cards
const cards = [
    {
        name: 'El gallo',
        number: 1,
        image: './images/Loteria Cards/jpegs/El Gallo Loteria.jpg'
    },
    {
        name: 'El diablito',
        number: 2,
        image: './images/Loteria Cards/jpegs/El Diablito Loteria.jpg'
    },
    {
        name: 'La dama',
        number: 3,
        image: './images/Loteria Cards/jpegs/La Dama Loteria.jpg'
    },
    {
        name: 'El catrín',
        number: 4,
        image: './images/Loteria Cards/jpegs/El Catrín Loteria.jpg'
    },
    {
        name: 'El paraguas',
        number: 5,
        image: './images/Loteria Cards/jpegs/El Paraguas Loteria.jpg'
    },
    {
        name: 'La sirena',
        number: 6,
        image: './images/Loteria Cards/jpegs/La Sirena Loteria.jpg'
    },
    {
        name: 'La escalera',
        number: 7,
        image: './images/Loteria Cards/jpegs/La Escalera Loteria.jpg'
    },
    {
        name: 'La botella',
        number: 8,
        image: './images/Loteria Cards/jpegs/La Botella Loteria.jpg'
    },
    {
        name: 'El barril',
        number: 9,
        image: './images/Loteria Cards/jpegs/El Barril Loteria.jpg'
    },
    {
        name: 'El árbol',
        number: 10,
        image: './images/Loteria Cards/jpegs/El Árbol Loteria.jpg'
    },
    {
        name: 'El melón',
        number: 11,
        image: './images/Loteria Cards/jpegs/El Melón Loteria.jpg'
    },
    {
        name: 'El valiente',
        number: 12,
        image: './images/Loteria Cards/jpegs/El Valiente Loteria.jpg'
    },
    {
        name: 'El gorrito',
        number: 13,
        image: './images/Loteria Cards/jpegs/El Gorrito Loteria.jpg'
    },
    {
        name: 'La muerte',
        number: 14,
        image: './images/Loteria Cards/jpegs/La Muerte Loteria.jpg'
    },
    {
        name: 'La pera',
        number: 15,
        image: './images/Loteria Cards/jpegs/La Pera Loteria.jpg'
    },
    {
        name: 'La bandera',
        number: 16,
        image: './images/Loteria Cards/jpegs/La Bandera Loteria.jpg'
    },
    {
        name: 'El bandolón',
        number: 17,
        image: './images/Loteria Cards/jpegs/El Bandolón Loteria.jpg'
    },
    {
        name: 'El violoncello',
        number: 18,
        image: './images/Loteria Cards/jpegs/El Violoncello Loteria.jpg'
    },
    {
        name: 'La garza',
        number: 19,
        image: './images/Loteria Cards/jpegs/La Garza Loteria.jpg'
    },
    {
        name: 'El pájaro',
        number: 20,
        image: './images/Loteria Cards/jpegs/El Pájaro Loteria.jpg'
    },
    {
        name: 'La mano',
        number: 21,
        image: './images/Loteria Cards/jpegs/La Mano Loteria.jpg'
    },
    {
        name: 'La bota',
        number: 22,
        image: './images/Loteria Cards/jpegs/La Bota Loteria.jpg'
    },
    {
        name: 'La luna',
        number: 23,
        image: './images/Loteria Cards/jpegs/La Luna Loteria.jpg'
    },
    {
        name: 'El cotorro',
        number: 24,
        image: './images/Loteria Cards/jpegs/El Cotorro Loteria.jpg'
    },
    {
        name: 'El borracho',
        number: 25,
        image: './images/Loteria Cards/jpegs/El Borracho Loteria.jpg'
    },
    {
        name: 'El negrito',
        number: 26,
        image: './images/Loteria Cards/jpegs/El Negrito Loteria.jpg'
    },
    {
        name: 'El corazón',
        number: 27,
        image: './images/Loteria Cards/jpegs/El Corazón Loteria.jpg'
    },
    {
        name: 'La sandía',
        number: 28,
        image: './images/Loteria Cards/jpegs/La Sandía Loteria.jpg'
    },
    {
        name: 'El tambor',
        number: 29,
        image: './images/Loteria Cards/jpegs/El Tambor Loteria.jpg'
    },
    {
        name: 'El camarón',
        number: 30,
        image: './images/Loteria Cards/jpegs/El Camarón Loteria.jpg'
    },
    {
        name: 'Las jaras',
        number: 31,
        image: './images/Loteria Cards/jpegs/Las jaras Loteria.jpg'
    },
    {
        name: 'El músico',
        number: 32,
        image: './images/Loteria Cards/jpegs/El Músico Loteria.jpg'
    },
    {
        name: 'La araña',
        number: 33,
        image: './images/Loteria Cards/jpegs/La Araña Loteria.jpg'
    },
    {
        name: 'El soldado',
        number: 34,
        image: './images/Loteria Cards/jpegs/El Soldado Loteria.jpg'
    },
    {
        name: 'La estrella',
        number: 35,
        image: './images/Loteria Cards/jpegs/La Estrella Loteria.jpg'
    },
    {
        name: 'El cazo',
        number: 36,
        image: './images/Loteria Cards/jpegs/El Cazo Loteria.jpg'
    },
    {
        name: 'El mundo',
        number: 37,
        image: './images/Loteria Cards/jpegs/El Mundo Loteria.jpg'
    },
    {
        name: 'El Apache',
        number: 38,
        image: './images/Loteria Cards/jpegs/El Apache Loteria.jpg'
    },
    {
        name: 'El nopal',
        number: 39,
        image: './images/Loteria Cards/jpegs/El Nopal Loteria.jpg'
    },
    {
        name: 'El alacrán',
        number: 40,
        image: './images/Loteria Cards/jpegs/El Alacrán Loteria.jpg'
    },
    {
        name: 'La rosa',
        number: 41,
        image: './images/Loteria Cards/jpegs/La Rosa Loteria.jpg'
    },
    {
        name: 'La calavera',
        number: 42,
        image: './images/Loteria Cards/jpegs/La Calavera Loteria.jpg'
    },
    {
        name: 'La campana',
        number: 43,
        image: './images/Loteria Cards/jpegs/La Campana Loteria.jpg'
    },
    {
        name: 'El cantarito',
        number: 44,
        image: './images/Loteria Cards/jpegs/El Cantarito Loteria.jpg'
    },
    {
        name: 'El venado',
        number: 45,
        image: './images/Loteria Cards/jpegs/El Venado Loteria.jpg'
    },
    {
        name: 'El Sol',
        number: 46,
        image: './images/Loteria Cards/jpegs/El Sol Loteria.jpg'
    },
    {
        name: 'La corona',
        number: 47,
        image: './images/Loteria Cards/jpegs/La Corona Loteria.jpg'
    },
    {
        name: 'La chalupa',
        number: 48,
        image: './images/Loteria Cards/jpegs/La Chalupa Loteria.jpg'
    },
    {
        name: 'El pino',
        number: 49,
        image: './images/Loteria Cards/jpegs/El Pino Loteria.jpg'
    },
    {
        name: 'El pescado',
        number: 50,
        image: './images/Loteria Cards/jpegs/El Pescado Loteria.jpg'
    },
    {
        name: 'La palma',
        number: 51,
        image: './images/Loteria Cards/jpegs/La Palma Loteria.jpg'
    },
    {
        name: 'La maceta',
        number: 52,
        image: './images/Loteria Cards/jpegs/La Maceta Loteria.jpg'
    },
    {
        name: 'El arpa',
        number: 53,
        image: './images/Loteria Cards/jpegs/El Arpa Loteria.jpg'
    },
    {
        name: 'La rana',
        number: 54,
        image: './images/Loteria Cards/jpegs/La Rana Loteria.jpg'
    }
];

const cardPNGs = [
    './images/Loteria Cards/El Gallo Loteria.png',
    './images/Loteria Cards/El Diablito Loteria.png',
    './images/Loteria Cards/La Dama Loteria.png',
    './images/Loteria Cards/El Catrín Loteria.png',
    './images/Loteria Cards/El Paraguas Loteria.png',
    './images/Loteria Cards/La Sirena Loteria.png',
    './images/Loteria Cards/La Escalera Loteria.png',
    './images/Loteria Cards/La Botella Loteria.png',
    './images/Loteria Cards/El Barril Loteria.png',
    './images/Loteria Cards/El Árbol Loteria.png',
    './images/Loteria Cards/El Melón Loteria.png',
    './images/Loteria Cards/El Valiente Loteria.png',
    './images/Loteria Cards/El Gorrito Loteria.png',
    './images/Loteria Cards/La Muerte Loteria.png',
    './images/Loteria Cards/La Pera Loteria.png',
    './images/Loteria Cards/La Bandera Loteria.png',
    './images/Loteria Cards/El Bandolón Loteria.png',
    './images/Loteria Cards/El Violoncello Loteria.png',
    './images/Loteria Cards/La Garza Loteria.png',
    './images/Loteria Cards/El Pájaro Loteria.png',
    './images/Loteria Cards/La Mano Loteria.png',
    './images/Loteria Cards/La Bota Loteria.png',
    './images/Loteria Cards/La Luna Loteria.png',
    './images/Loteria Cards/El Cotorro Loteria.png',
    './images/Loteria Cards/El Borracho Loteria.png',
    './images/Loteria Cards/El Negrito Loteria.png',
    './images/Loteria Cards/El Corazón Loteria.png',
    './images/Loteria Cards/La Sandía Loteria.png',
    './images/Loteria Cards/El Tambor Loteria.png',
    './images/Loteria Cards/El Camarón Loteria.png',
    './images/Loteria Cards/Las jaras Loteria.png',
    './images/Loteria Cards/El Músico Loteria.png',
    './images/Loteria Cards/La Araña Loteria.png',
    './images/Loteria Cards/El Soldado Loteria.png',
    './images/Loteria Cards/La Estrella Loteria.png',
    './images/Loteria Cards/El Cazo Loteria.png',
    './images/Loteria Cards/El Mundo Loteria.png',
    './images/Loteria Cards/El Apache Loteria.png',
    './images/Loteria Cards/El Nopal Loteria.png',
    './images/Loteria Cards/El Alacrán Loteria.png',
    './images/Loteria Cards/La Rosa Loteria.png',
    './images/Loteria Cards/La Calavera Loteria.png',
    './images/Loteria Cards/La Campana Loteria.png',
    './images/Loteria Cards/El Cantarito Loteria.png',
    './images/Loteria Cards/El Venado Loteria.png',
    './images/Loteria Cards/El Sol Loteria.png',
    './images/Loteria Cards/La Corona Loteria.png',
    './images/Loteria Cards/La Chalupa Loteria.png',
    './images/Loteria Cards/El Pino Loteria.png',
    './images/Loteria Cards/El Pescado Loteria.png',
    './images/Loteria Cards/La Palma Loteria.png',
    './images/Loteria Cards/La Maceta Loteria.png',
    './images/Loteria Cards/El Arpa Loteria.png',
    './images/Loteria Cards/La Rana Loteria.png'
]

// function to create array with random non-repeating numbers with the length of the argument
function randomArray(length) {
    let randArray = [];
    for (let i = 0; i < length; i++) {
        let rand = Math.floor(Math.random() * 54);
        if (!randArray.includes(rand)) {
            randArray.push(rand);
        } else {
            i--;
        }
    }
    return randArray;
}

function generateTablet(domEl) {
    domEl.innerHTML = "";
    let playerCard1 = randomArray(16);
    for (let i = 0; i < 16; i++) {
        domEl.innerHTML += `<img class="tablet-block" src='${cards[playerCard1[i]].image}' alt='${cards[playerCard1[i]].image}'/>`
    }
}
// finish above. make player card appear.
generateTablet(firstTablet);
generateTablet(secondTablet);
generateTablet(thirdTablet);
generateTablet(fourthTablet);

setInterval(() => {
    generateTablet(firstTablet);
    generateTablet(secondTablet);
    generateTablet(thirdTablet);
    generateTablet(fourthTablet);
}, 8600);

setInterval(() => {
    card1.src = cardPNGs[Math.floor(Math.random() * 54)];
    card2.src = cardPNGs[Math.floor(Math.random() * 54)];
    card3.src = cardPNGs[Math.floor(Math.random() * 54)];
}, 6400);
