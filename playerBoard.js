const playerTablet = document.getElementById("player-tablet-1");
const newCard = document.getElementById("newCard");
const saveCard = document.getElementById("saveCard");
const clearCard = document.getElementById("clearCard");

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

let newArray = [];
let storedArray = [];

if (localStorage.getItem("savedBoard")) {
    storedArray = JSON.parse(localStorage.getItem("savedBoard"));
} else {
    console.log(false);
};

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
    newArray = playerCard1;
}

if (storedArray.length === 0) {
    generateTablet(playerTablet);
} else {
    for (let i = 0; i < 16; i++) {
        playerTablet.innerHTML += `<img class="tablet-block" src='${cards[storedArray[i]].image}' alt='${cards[storedArray[i]].image}'/>`
    }
};

addEventListener("click", (e) => {
    if (e.target.classList.contains("tablet-block")) {
        e.target.classList.toggle("clicked");
    }
});

function clearPlayerBoard(currentTablet) {
    currentTablet.childNodes.forEach(block => block.classList.contains("clicked") ? block.classList.remove("clicked") : "");
}

newCard.addEventListener("click", () => { generateTablet(playerTablet) });

clearCard.addEventListener("click", () => { clearPlayerBoard(playerTablet) });

saveCard.addEventListener("click", () => {
    localStorage.setItem("savedBoard", JSON.stringify(newArray));
});