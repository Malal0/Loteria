//  the variables for the previous card container
const leftBtn = document.querySelector("#left-btn")
const rightBtn = document.querySelector("#right-btn")
const previousCards = document.querySelector("#previousCards");

//  the variable for the button to go next
const nextBtn = document.querySelector("#card-btn");
//  the variable for the shuffle & restart button
const shuffleBtn = document.querySelector("#shuffle-btn");
//  the variable for the speech button to toggle
const speechBtn = document.getElementById('speech-btn');
//  the variable for the shuffle button
const resetBtn = document.querySelector("#reset-button");
//  the variables for the card being shown
const cardNumber = document.querySelector("#number");
const cardName = document.querySelector("#name");
const cardImage = document.querySelector("#cardImg");
//  the variable for the previousCards div
const prevCard = document.querySelector("#previousCards");

const playerTablet = document.getElementById("player-tablet-1");
const newCard = document.getElementById("newCard");
const saveCard = document.getElementById("saveCard");
const clearCard = document.getElementById("clearCard");
let newArray = [];
let storedArray = [];

let speechBool = false;

let intervalTime = 10;

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
//  the new randomized order of numbers from 1-54
// let newCardsArray = [];
let newCardsArray = randomArray(54);
let order = 0;
//  the array of cards that have been used
let previousCardsArray = [];
function currentCard(number, name, image) {
    this.number = number;
    this.name = name;
    this.image = image;
}
//
function shuffleCards() {
    newCardsArray = randomArray(54);
    console.log(newCardsArray);
}

function generateCard() {
    cardSelected = cards[newCardsArray[order]];
    index = cardSelected.number;
    text = cardSelected.name;
    image = "." + cardPNGs[index - 1];

    pushCurrentCard();

    change();
    order++;
    displayPrevCards(index);
    if (speechAvailable && speechBool) {
        sayTheCard(text);
    };
};

function change() {
    // cardName.innerHTML = text;
    // cardNumber.innerHTML = index;
    cardImage.src = image;
};

function reset() {
    order = 0;
    newCardsArray = [];
    // cardName.innerHTML = "";
    // cardNumber.innerHTML = "";
    cardImage.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.etsystatic.com%2F7777713%2Fr%2Fil%2Fdbfe20%2F1686069708%2Fil_794xN.1686069708_93k9.jpg&amp;f=1&amp;nofb=1";
    previousCardsArray = [];
    previousCards.innerHTML = "";
    shuffleCards();
}

function pushCurrentCard() {
    previousCardsArray.push({ name: text, number: index, image: image });
}

function displayPrevCards(number) {
    const newImg = document.createElement("img");
    // const newImg = newDiv.createElement("img");

    newImg.textContent = number;
    newImg.src = "." + cardPNGs[number - 1];
    newImg.alt = text;
    prevCard.insertBefore(newImg, prevCard.firstElementChild);
    newImg.className = "blankCard";
}

nextBtn.addEventListener("click", generateCard);
shuffleBtn.addEventListener("click", reset);

// leftBtn.addEventListener("click", clicked);
// rightBtn.addEventListener("click", clicked);


/*  THE SECTION BELOW IS THE CODE FOR THE PLAYERTABLET */

if (localStorage.getItem("savedBoard")) {
    storedArray = JSON.parse(localStorage.getItem("savedBoard"));
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
        domEl.innerHTML += `<img class="tablet-block" src='.${cards[playerCard1[i]].image}' alt='${cards[playerCard1[i]].image}'/>`
    }
    newArray = playerCard1;
}

if (storedArray.length === 0) {
    generateTablet(playerTablet);
} else {
    for (let i = 0; i < 16; i++) {
        playerTablet.innerHTML += `<img class="tablet-block" src='.${cards[storedArray[i]].image}' alt='${cards[storedArray[i]].image}'/>`
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
    if (newArray.length === 0) {
        return
    } else {
        localStorage.setItem("savedBoard", JSON.stringify(newArray));
    }
});

/*  code for menu overlay   */
const menuBtn = document.getElementById("menu-bars");
menuBtn.addEventListener("click", () => {
    const menuBtn = document.getElementById("menu-bars");
    const menuOverlay = document.getElementById("menu");
    menuBtn.classList.toggle("menuOpen");
    menuOverlay.classList.toggle("displayOff");
    document.querySelector("body").classList.toggle("smol");
    console.log("clicked");
})

/*  code for previous cards container scroll effect   */
leftBtn.addEventListener("click", () => { previousCards.scrollLeft += previousCards.clientWidth - 38.56 / 2 });
rightBtn.addEventListener("click", () => { previousCards.scrollLeft -= previousCards.clientWidth - 38.56 });

const playPauseBtn = document.getElementById("play-pause-btn");
const playModal = document.createElement('div');
let countDownTime = 10;
playPauseBtn.addEventListener('click', () => {
    countDownTime = 10;
    const timer = setInterval(() => {
        countDownTime--;
        countDownDisplay.innerHTML = countDownTime;
        // console.log(countDownTime);
        if (countDownTime === 0) {
            clearInterval(timer);
            removeModal(playModal);
            console.log('next card');
            generateCard();
        }
    }, 1000);
    body.appendChild(playModal);
    playModal.setAttribute('class', 'modal');
    playModal.innerHTML = `
        <p>The Game begins in <span id='countDownDisplay'>${countDownTime}</span>s</p>
        <button class='cancel-Btn'  onclick='removeModal(playModal)'>CANCEL</button>
    `
});

const timerBtn = document.getElementById("timer-btn");
const timerModal = document.createElement('div');
timerBtn.addEventListener('click', () => {
    body.appendChild(timerModal);
    timerModal.setAttribute('class', 'modal');
    timerModal.innerHTML = `
        <button class='exit-Btn' onclick='removeModal(timerModal)'>+</button>
        <p>How many seconds inbetween cards?</p>
        <p style="display: flex"><span id ='timer-time-text'>${intervalTime}</span>s <input id='timer-input' type='range' min='1' max='60' step='1' value='${intervalTime}'></p>
    `;
    const timerInput = document.getElementById('timer-input');
    const timerTimeText = document.getElementById('timer-time-text');
    timerInput.addEventListener('input', () => {
        timerTimeText.innerHTML = timerInput.value;
        intervalTime = timerInput.value;
        console.log(intervalTime);
    });
});

const body = document.querySelector('body');

function removeModal(modal) {
    body.removeChild(modal);
}

// function countDown() {
//     countDownTime--;
//     document.getElementById('countDownDisplay').textContent = countDownTime;
//     console.log(countDownTime);
// };

//  code for the speech functionality

const speechAvailable = 'speechSynthesis' in window ? true : false;
let synth = window.speechSynthesis;
let ourText = '';

function sayTheCard(name) {
    ourText = name;
    const utterThis = new SpeechSynthesisUtterance(ourText);
    utterThis.lang = 'es'
    synth.speak(utterThis);
}

//  code for the speech functionality

function toggleSpeech() {
    //makes the button dark when not in use
    speechBtn.classList.toggle('speechToggled')
    // toggle speechBool to true or false
    speechBool = !speechBool;
}

speechBtn.addEventListener('click', toggleSpeech);