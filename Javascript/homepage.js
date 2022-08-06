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
        image: './images/Loteria Cards/CompressedCardBorderless/El Gallo Loteria-min.jpg'
    },
    {
        name: 'El diablito',
        number: 2,
        image: './images/Loteria Cards/CompressedCardBorderless/El Diablito Loteria-min.jpg'
    },
    {
        name: 'La dama',
        number: 3,
        image: './images/Loteria Cards/CompressedCardBorderless/La Dama Loteria-min.jpg'
    },
    {
        name: 'El catrín',
        number: 4,
        image: './images/Loteria Cards/CompressedCardBorderless/El Catrín Loteria-min.jpg'
    },
    {
        name: 'El paraguas',
        number: 5,
        image: './images/Loteria Cards/CompressedCardBorderless/El Paraguas Loteria-min.jpg'
    },
    {
        name: 'La sirena',
        number: 6,
        image: './images/Loteria Cards/CompressedCardBorderless/La Sirena Loteria-min.jpg'
    },
    {
        name: 'La escalera',
        number: 7,
        image: './images/Loteria Cards/CompressedCardBorderless/La Escalera Loteria-min.jpg'
    },
    {
        name: 'La botella',
        number: 8,
        image: './images/Loteria Cards/CompressedCardBorderless/La Botella Loteria-min.jpg'
    },
    {
        name: 'El barril',
        number: 9,
        image: './images/Loteria Cards/CompressedCardBorderless/El Barril Loteria-min.jpg'
    },
    {
        name: 'El árbol',
        number: 10,
        image: './images/Loteria Cards/CompressedCardBorderless/El Árbol Loteria-min.jpg'
    },
    {
        name: 'El melón',
        number: 11,
        image: './images/Loteria Cards/CompressedCardBorderless/El Melón Loteria-min.jpg'
    },
    {
        name: 'El valiente',
        number: 12,
        image: './images/Loteria Cards/CompressedCardBorderless/El Valiente Loteria-min.jpg'
    },
    {
        name: 'El gorrito',
        number: 13,
        image: './images/Loteria Cards/CompressedCardBorderless/El Gorrito Loteria-min.jpg'
    },
    {
        name: 'La muerte',
        number: 14,
        image: './images/Loteria Cards/CompressedCardBorderless/La Muerte Loteria-min.jpg'
    },
    {
        name: 'La pera',
        number: 15,
        image: './images/Loteria Cards/CompressedCardBorderless/La Pera Loteria-min.jpg'
    },
    {
        name: 'La bandera',
        number: 16,
        image: './images/Loteria Cards/CompressedCardBorderless/La Bandera Loteria-min.jpg'
    },
    {
        name: 'El bandolón',
        number: 17,
        image: './images/Loteria Cards/CompressedCardBorderless/El Bandolón Loteria-min.jpg'
    },
    {
        name: 'El violoncello',
        number: 18,
        image: './images/Loteria Cards/CompressedCardBorderless/El Violoncello Loteria-min.jpg'
    },
    {
        name: 'La garza',
        number: 19,
        image: './images/Loteria Cards/CompressedCardBorderless/La Garza Loteria-min.jpg'
    },
    {
        name: 'El pájaro',
        number: 20,
        image: './images/Loteria Cards/CompressedCardBorderless/El Pájaro Loteria-min.jpg'
    },
    {
        name: 'La mano',
        number: 21,
        image: './images/Loteria Cards/CompressedCardBorderless/La Mano Loteria-min.jpg'
    },
    {
        name: 'La bota',
        number: 22,
        image: './images/Loteria Cards/CompressedCardBorderless/La Bota Loteria-min.jpg'
    },
    {
        name: 'La luna',
        number: 23,
        image: './images/Loteria Cards/CompressedCardBorderless/La Luna Loteria-min.jpg'
    },
    {
        name: 'El cotorro',
        number: 24,
        image: './images/Loteria Cards/CompressedCardBorderless/El Cotorro Loteria-min.jpg'
    },
    {
        name: 'El borracho',
        number: 25,
        image: './images/Loteria Cards/CompressedCardBorderless/El Borracho Loteria-min.jpg'
    },
    {
        name: 'El negrito',
        number: 26,
        image: './images/Loteria Cards/CompressedCardBorderless/El Negrito Loteria-min.jpg'
    },
    {
        name: 'El corazón',
        number: 27,
        image: './images/Loteria Cards/CompressedCardBorderless/El Corazón Loteria-min.jpg'
    },
    {
        name: 'La sandía',
        number: 28,
        image: './images/Loteria Cards/CompressedCardBorderless/La Sandía Loteria-min.jpg'
    },
    {
        name: 'El tambor',
        number: 29,
        image: './images/Loteria Cards/CompressedCardBorderless/El Tambor Loteria-min.jpg'
    },
    {
        name: 'El camarón',
        number: 30,
        image: './images/Loteria Cards/CompressedCardBorderless/El Camarón Loteria-min.jpg'
    },
    {
        name: 'Las jaras',
        number: 31,
        image: './images/Loteria Cards/CompressedCardBorderless/Las jaras Loteria-min.jpg'
    },
    {
        name: 'El músico',
        number: 32,
        image: './images/Loteria Cards/CompressedCardBorderless/El Músico Loteria-min.jpg'
    },
    {
        name: 'La araña',
        number: 33,
        image: './images/Loteria Cards/CompressedCardBorderless/La Araña Loteria-min.jpg'
    },
    {
        name: 'El soldado',
        number: 34,
        image: './images/Loteria Cards/CompressedCardBorderless/El Soldado Loteria-min.jpg'
    },
    {
        name: 'La estrella',
        number: 35,
        image: './images/Loteria Cards/CompressedCardBorderless/La Estrella Loteria-min.jpg'
    },
    {
        name: 'El cazo',
        number: 36,
        image: './images/Loteria Cards/CompressedCardBorderless/El Cazo Loteria-min.jpg'
    },
    {
        name: 'El mundo',
        number: 37,
        image: './images/Loteria Cards/CompressedCardBorderless/El Mundo Loteria-min.jpg'
    },
    {
        name: 'El Apache',
        number: 38,
        image: './images/Loteria Cards/CompressedCardBorderless/El Apache Loteria-min.jpg'
    },
    {
        name: 'El nopal',
        number: 39,
        image: './images/Loteria Cards/CompressedCardBorderless/El Nopal Loteria-min.jpg'
    },
    {
        name: 'El alacrán',
        number: 40,
        image: './images/Loteria Cards/CompressedCardBorderless/El Alacrán Loteria-min.jpg'
    },
    {
        name: 'La rosa',
        number: 41,
        image: './images/Loteria Cards/CompressedCardBorderless/La Rosa Loteria-min.jpg'
    },
    {
        name: 'La calavera',
        number: 42,
        image: './images/Loteria Cards/CompressedCardBorderless/La Calavera Loteria-min.jpg'
    },
    {
        name: 'La campana',
        number: 43,
        image: './images/Loteria Cards/CompressedCardBorderless/La Campana Loteria-min.jpg'
    },
    {
        name: 'El cantarito',
        number: 44,
        image: './images/Loteria Cards/CompressedCardBorderless/El Cantarito Loteria-min.jpg'
    },
    {
        name: 'El venado',
        number: 45,
        image: './images/Loteria Cards/CompressedCardBorderless/El Venado Loteria-min.jpg'
    },
    {
        name: 'El Sol',
        number: 46,
        image: './images/Loteria Cards/CompressedCardBorderless/El Sol Loteria-min.jpg'
    },
    {
        name: 'La corona',
        number: 47,
        image: './images/Loteria Cards/CompressedCardBorderless/La Corona Loteria-min.jpg'
    },
    {
        name: 'La chalupa',
        number: 48,
        image: './images/Loteria Cards/CompressedCardBorderless/La Chalupa Loteria-min.jpg'
    },
    {
        name: 'El pino',
        number: 49,
        image: './images/Loteria Cards/CompressedCardBorderless/El Pino Loteria-min.jpg'
    },
    {
        name: 'El pescado',
        number: 50,
        image: './images/Loteria Cards/CompressedCardBorderless/El Pescado Loteria-min.jpg'
    },
    {
        name: 'La palma',
        number: 51,
        image: './images/Loteria Cards/CompressedCardBorderless/La Palma Loteria-min.jpg'
    },
    {
        name: 'La maceta',
        number: 52,
        image: './images/Loteria Cards/CompressedCardBorderless/La Maceta Loteria-min.jpg'
    },
    {
        name: 'El arpa',
        number: 53,
        image: './images/Loteria Cards/CompressedCardBorderless/El Arpa Loteria-min.jpg'
    },
    {
        name: 'La rana',
        number: 54,
        image: './images/Loteria Cards/CompressedCardBorderless/La Rana Loteria-min.jpg'
    }
];

const cardPNGs = [
    './images/Loteria Cards/CompressedCardswithBorder/El Gallo Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Diablito Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Dama Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Catrín Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Paraguas Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Sirena Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Escalera Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Botella Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Barril Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Árbol Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Melón Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Valiente Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Gorrito Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Muerte Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Pera Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Bandera Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Bandolón Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Violoncello Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Garza Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Pájaro Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Mano Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Bota Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Luna Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Cotorro Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Borracho Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Negrito Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Corazón Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Sandía Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Tambor Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Camarón Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/Las jaras Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Músico Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Araña Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Soldado Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Estrella Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Cazo Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Mundo Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Apache Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Nopal Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Alacrán Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Rosa Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Calavera Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Campana Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Cantarito Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Venado Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Sol Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Corona Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Chalupa Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Pino Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Pescado Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Palma Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Maceta Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/El Arpa Loteria-min.png',
    './images/Loteria Cards/CompressedCardswithBorder/La Rana Loteria-min.png'
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
        domEl.innerHTML += `<img class="tablet-block" src='.${cards[playerCard1[i]].image}' alt='${cards[playerCard1[i]].image}'/>`
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
    card1.src = "." + cardPNGs[Math.floor(Math.random() * 54)];
    card2.src = "." + cardPNGs[Math.floor(Math.random() * 54)];
    card3.src = "." + cardPNGs[Math.floor(Math.random() * 54)];
}, 6400);
