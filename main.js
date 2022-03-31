const nextBtn = document.querySelector("#card-button");
const cardName = document.querySelector("#name");
var names = ["El gallo", "El diablito", "La dama", "El catrín", "El paraguas", "La sirena", "La escalera", "La botella ", "El barril", "El árbol", "El melón", "El valiente", "El gorrito", "La muerte", "La pera", "La bandera", "El bandolón", "El violoncello", "La garza", "El pájaro", "La mano", "La bota", "La luna", "El cotorro", "El borracho", "El negrito", "El corazón", "La sandía", "El tambor", "El camarón", "Las jaras", "El músico", "La araña", "El soldado", "La estrella", "El cazo", "El mundo", "El Apache", "El nopal", "El alacrán", "La rosa", "La calavera", "La campana", "El cantarito", "El venado", "El Sol", "La corona", "La chalupa", "El pino", "El pescado", "La palma", "La maceta", "El arpa", "La rana"];

function generateCard() {
    cardName.innerHTML = names[Math.floor(Math.random() * names.length)];
    console.log("1");
};

nextBtn.addEventListener("click", generateCard);
