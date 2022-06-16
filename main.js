//  the variables for the previous card container
const leftBtn = document.querySelector("#left-btn")
const rightBtn = document.querySelector("#right-btn")
const previousCards = document.querySelector("#previousCards");

//  the variable for the button to go next
const nextBtn = document.querySelector("#card-button");
//  the variable for the randomize button
const shuffleBtn = document.querySelector("#randomize-cards-button");
//  the variables for the card being shown
const cardNumber = document.querySelector("#number");
const cardName = document.querySelector("#name");
const cardImage = document.querySelector("#cardImg");

var cards = [
    { name: "El gallo", number: 1, image: "https://static.wixstatic.com/media/65b918_ca3fa8edd978491bb077642a7dfffd86~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/1%20Rooster%20Loteria.jpeg" },
    { name: "El diablito", number: 2, image: "https://static.wixstatic.com/media/65b918_b63638e7835544ba93c78c1ac4db3202~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/2_%20El%20Diablito%20Loteria.jpeg" },
    { name: "La dama", number: 3, image: "https://static.wixstatic.com/media/65b918_7f9bf6c4384a400b91aa55b2a3810724~mv2.jpeg/v1/fill/w_204,h_298,al_c,q_80,enc_auto/3_%20La%20Dama%20Loteria.jpeg" },
    { name: "El catrín", number: 4, image: "https://static.wixstatic.com/media/65b918_6574c96df9c145d497249ac6c6cd8282~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/4_%20El%20Catrin%20Loteria.jpeg" },
    { name: "El paraguas", number: 5, image: "https://static.wixstatic.com/media/65b918_bba0af3061bc403e9f47e19a4489cc77~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/5_%20El%20Paraguas%20Loteria.jpeg" },
    { name: "La sirena", number: 6, image: "https://static.wixstatic.com/media/65b918_4edc7e91eefe4467b9e99d920d46b017~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/6_%20La%20Sirena%20Loteria.jpeg" },
    { name: "La escalera", number: 7, image: "https://static.wixstatic.com/media/65b918_eac9fb5b85d14808b47c68e72c668faa~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/7_%20La%20Escalera%20Loteria.jpeg" },
    { name: "La botella", number: 8, image: "https://static.wixstatic.com/media/65b918_c3f02ae1cf3842b58fb665dda090b862~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/8_%20La%20Botella%20Loteria.jpeg" },
    { name: "El barril", number: 9, image: "https://static.wixstatic.com/media/65b918_3b4e2db4a9944588b84c00d61b1e6eba~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/9_%20El%20Barril%20Loteria.jpeg" },
    { name: "El árbol", number: 10, image: "https://static.wixstatic.com/media/65b918_57ff3464d9774142b6c8a4883980f9cb~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/10_%20El%20Arbol%20Loteria.jpeg" },
    { name: "El melón", number: 11, image: "https://static.wixstatic.com/media/65b918_41d14c670c064dd2b856c3003bdc94c9~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/11_%20El%20Melon%20Loteria.jpeg" },
    { name: "El valiente", number: 12, image: "https://static.wixstatic.com/media/65b918_32cb6be01c174202a35c9ce142db81b9~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/12_%20El%20Valiente%20Loteria.jpeg" },
    { name: "El gorrito", number: 13, image: "https://static.wixstatic.com/media/65b918_93491433a5754d6fa31b9c86fd9a4d68~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/13_%20El%20Gorrito%20Loteria.jpeg" },
    { name: "La muerte", number: 14, image: "https://static.wixstatic.com/media/65b918_c85ac1c61b5c4fb1a908632ddd37290c~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/14_%20La%20Muerte%20Loteria.jpeg" },
    { name: "La pera", number: 15, image: "https://static.wixstatic.com/media/65b918_c79c8292863a42e29d76d29d8c79d418~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/15_%20La%20Pera%20Loteria.jpeg" },
    { name: "La bandera", number: 16, image: "https://static.wixstatic.com/media/65b918_163fae3b34864c789d24f68634923c85~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/16_%20La%20Bandera.jpeg" },
    { name: "El bandolón", number: 17, image: "https://static.wixstatic.com/media/65b918_60aa22e2ad2041558aea4d62dae68882~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/17_%20El%20Bandolon%20Loteria.jpeg" },
    { name: "El violoncello", number: 18, image: "https://static.wixstatic.com/media/65b918_d942f6ff45c040f0962ed377d7b6eca9~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/18_%20El%20Violoncello%20Loteria.jpeg" },
    { name: "La garza", number: 19, image: "https://static.wixstatic.com/media/65b918_89b6dcaa054e4731849fdfa37424e9a7~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/19_%20La%20Garza%20Loteria.jpeg" },
    { name: "El pájaro", number: 20, image: "https://static.wixstatic.com/media/65b918_ec07ac151f3949b8af6a9ef331696a65~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/20_%20El%20Pajaro%20Loteria.jpeg" },
    { name: "La mano", number: 21, image: "https://static.wixstatic.com/media/65b918_3acd991921994699a22367cd79201315~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/21_%20La%20Mano%20Loteria.jpeg" },
    { name: "La bota", number: 22, image: "https://static.wixstatic.com/media/65b918_a9a5d3d814b14717b9718f52446ffe1c~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/22_%20La%20Bota%20Loteria.jpeg" },
    { name: "La luna", number: 23, image: "https://static.wixstatic.com/media/65b918_d12282649f9c44538218643db5895201~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/23_%20La%20Luna%20Loteria.jpeg" },
    { name: "El cotorro", number: 24, image: "https://static.wixstatic.com/media/65b918_9f4fc8e632d6424395825238cf1bcc83~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/24_%20El%20Gotorro%20Loteria.jpeg" },
    { name: "El borracho", number: 25, image: "https://static.wixstatic.com/media/65b918_091489875ec64d2d9d29c981236b1b58~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/25_%20El%20Borracho.jpeg" },
    { name: "El negrito", number: 26, image: "https://static.wixstatic.com/media/65b918_b25bea68b347464dbc8d3ea0174aa396~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/26_%20El%20Negrito%20Loteria.jpeg" },
    { name: "El corazón", number: 27, image: "https://static.wixstatic.com/media/65b918_48953087235045839bb3756b78de0836~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/27_%20El%20Corazon%20Loteria.jpeg" },
    { name: "La sandía", number: 28, image: "https://static.wixstatic.com/media/65b918_9128742be0f9429ea7fc50cd1447993d~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/28_%20La%20Sandia.jpeg" },
    { name: "El tambor", number: 29, image: "https://static.wixstatic.com/media/65b918_e0c82604cae449598cb88456ff629783~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/29_%20El%20Tambor.jpeg" },
    { name: "El camarón", number: 30, image: "https://static.wixstatic.com/media/65b918_949497e8e0604258888f83cb9835294f~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/30_%20El%20camaron%20Loteria.jpeg" },
    { name: "Las jaras", number: 31, image: "https://static.wixstatic.com/media/65b918_e512c7e0b671437f86876a8c39f6c0b6~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/31_%20Las%20Jaras%20Loteria.jpeg" },
    { name: "El músico", number: 32, image: "https://static.wixstatic.com/media/65b918_5d2325cab558443bb5b558185dfbf8b3~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/32_%20El%20Musico%20Loteria.jpeg" },
    { name: "La araña", number: 33, image: "https://static.wixstatic.com/media/65b918_49192282b0ab448ca6280434d0481019~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/33_%20La%20Arana%20Loteria.jpeg" },
    { name: "El soldado", number: 34, image: "https://static.wixstatic.com/media/65b918_9ce53a1a0af74f8884b1afdc5de273d5~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/34_%20El%20Soldado%20Loteria.jpeg" },
    { name: "La estrella", number: 35, image: "https://static.wixstatic.com/media/65b918_e79452c6294b4ca493af44a7599d7cf8~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/35_%20La%20Estrella%20Loteria.jpeg" },
    { name: "El cazo", number: 36, image: "https://static.wixstatic.com/media/65b918_93be5dbbd6074320b7e607551224df9a~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/36_%20El%20Cazo%20Loteria.jpeg" },
    { name: "El mundo", number: 37, image: "https://static.wixstatic.com/media/65b918_03fe00371d0048ca826c1e3502f16925~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/37_%20El%20Mundo.jpeg" },
    { name: "El Apache", number: 38, image: "https://static.wixstatic.com/media/65b918_7c42f7e3131c43a280f50aba3c8a8e2b~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/38_%20El%20Apache%20Loteria.jpeg" },
    { name: "El nopal", number: 39, image: "https://static.wixstatic.com/media/65b918_6c358143c6a14e12804f3a6edc4c92a3~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/39_%20El%20Nopal.jpeg" },
    { name: "El alacrán", number: 40, image: "https://static.wixstatic.com/media/65b918_b72d6f4a2fff4e1987ca99305910815e~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/40_%20El%20Alachan%20Loteria.jpeg" },
    { name: "La rosa", number: 41, image: "https://static.wixstatic.com/media/65b918_0bf06d1d54fe4c78a3eac7ec5226bc7f~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/41_%20La%20Rosa%20Loteria.jpeg" },
    { name: "La calavera", number: 42, image: "https://static.wixstatic.com/media/65b918_b162f50857384c1d820fb48da099cd0b~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/42_%20La%20Galavera%20Loteria.jpeg" },
    { name: "La campana", number: 43, image: "https://static.wixstatic.com/media/65b918_3fa8be279c2c490eb864dc9ac0707bc0~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/43_%20La%20Campana.jpeg" },
    { name: "El cantarito", number: 44, image: "https://static.wixstatic.com/media/65b918_c3db5a1a9381489db37627167f47733b~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/44_%20El%20Canarito%20Loteria.jpeg" },
    { name: "El venado", number: 45, image: "https://static.wixstatic.com/media/65b918_870bf26bfc16431f8bd87c830dbb800e~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/45_%20El%20Venado%20Loteria.jpeg" },
    { name: "El Sol", number: 46, image: "https://static.wixstatic.com/media/65b918_8e85ffd202d94018b3b5710470f239f5~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/46_%20El%20Sol%20Loteria.jpeg" },
    { name: "La corona", number: 47, image: "https://static.wixstatic.com/media/65b918_ed68075ec42147e4803f36a47ed799d5~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/47_%20La%20Corona%20Loteria.jpeg" },
    { name: "La chalupa", number: 48, image: "https://static.wixstatic.com/media/65b918_f11407d025bc4c37bb6fb641daf7323f~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/48_%20La%20Chalupa%20Loteria.jpeg" },
    { name: "El pino", number: 49, image: "https://static.wixstatic.com/media/65b918_bad0515b045d40178dfdd49706930d65~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/49_%20El%20Pino%20Loteria.jpeg" },
    { name: "El pescado", number: 50, image: "https://static.wixstatic.com/media/65b918_c4995a6ed56d454d917593384fa217a5~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/50_%20El%20Pescado%20Loteria.jpeg" },
    { name: "La palma", number: 51, image: "https://static.wixstatic.com/media/65b918_8a857b66067540659832941679c197a8~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/51_%20%20La%20Palma%20Loteria.jpeg" },
    { name: "La maceta", number: 52, image: "https://static.wixstatic.com/media/65b918_aa2b924b98f14a2294e1ed08a07b355f~mv2.jpeg/v1/fill/w_206,h_298,al_c,q_80,enc_auto/52_%20La%20Maceta%20Loteria.jpeg" },
    { name: "El arpa", number: 53, image: "https://static.wixstatic.com/media/65b918_75c875425fb54c9aa6ecd98fe93a3f30~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/53_%20El%20Arpa%20Loteria.jpeg" },
    { name: "La rana", number: 54, image: "https://static.wixstatic.com/media/65b918_68e3519afe5946e69d2c724136da00f2~mv2.jpeg/v1/fill/w_206,h_298,al_c,lg_1,q_80,enc_auto/54_%20La%20Rana%20Loteria.jpeg" }
];

let newCardsArray = [];

/*   I need a function to generate a randomized order of the cards array
        generate a random number from 1-54
        push the number into the array
        if the number was already used
        rerun the function and minus 1 on the iteration   */
function randomizeCards() {
    newCardsArray = [];
    for (let i = 0; i < cards.length; i++) {
        let rand = Math.floor(Math.random() * 54)
        if (!newCardsArray.includes(rand)/*rand isn't included in new cards array*/) {
            newCardsArray.push(rand);
        } else {
            i--;
            console.log(rand);
        }
    };
    console.log(newCardsArray);
}

function generateCard() {
    cardSelected = cards[Math.floor(Math.random() * cards.length)];
    index = cardSelected.number;
    text = cardSelected.name;
    image = cardSelected.image;

    console.log(cardSelected);
    console.log(index);
    console.log(text);
    console.log(image);

    change();
};

nextBtn.addEventListener("click", generateCard);
shuffleBtn.addEventListener("click", randomizeCards);

//need index of array and then change //

function change() {
    cardName.innerHTML = text;
    cardNumber.innerHTML = index;
    cardImage.src = image;
};

function clicked() {
    console.log(this);
    console.log("clicked");
};

leftBtn.addEventListener("click", clicked);
rightBtn.addEventListener("click", clicked);