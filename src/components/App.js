import pokemon from '../data/pokemon/pokemon.js';

// array de ítems (objetos).
const dataItems = pokemon.items;

// array de ítems duplicados.
const duplicatedData = dataItems.concat(dataItems);

// función para barajar duplicatedData.
function shuffle(array) {
  for(let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
  }
}
shuffle(duplicatedData);

// array que guarda las cartas cliqueadas.
const clicked = [];

// variable que registra el puntaje por cartas emparejadas.
let score = 0;

const App = () => {
  // estructura html.
  const generalContainer = document.createElement("div");
  const header = document.createElement("header");
  generalContainer.appendChild(header);
  const main = document.createElement("main");
  generalContainer.appendChild(main);
  const footer = document.createElement("footer");
  generalContainer.appendChild(footer);

  // hijos del elemento header.
  const title = document.createElement("h1");
  const titleImage = document.createElement("img");
  titleImage.className = "title-image";
  titleImage.setAttribute("src", "../images/title.png");
  title.appendChild(titleImage);
  header.appendChild(title);

  // grilla de cartas.
  let cardsContainer = document.createElement("section");
  cardsContainer.className = "cards-container";
  main.appendChild(cardsContainer);

  // tablero para el contador y contador.
  const scoreboard = document.createElement("article");
  scoreboard.className = "score-board";
  const textScore = document.createElement("p");
  textScore.innerHTML = "Score";
  textScore.className = "text-score";
  const numberScore = document.createElement("span");
  textScore.appendChild(numberScore);
  scoreboard.appendChild(textScore);
  main.appendChild(scoreboard);

  // tablero con el botón para reiniciar la partida.
  const replayBoard = document.createElement("article");
  replayBoard.className = "replay-board";
  const replayButton = document.createElement("button");
  replayButton.innerHTML = "Play Again";
  replayButton.className = "replay-button";
  replayButton.addEventListener("click", function() { // para reiniciar la partida/recargar la página.
    location.reload();
  })
  replayBoard.appendChild(replayButton);
  main.appendChild(replayBoard);

  // hijo del elemento footer.
  const declaimerText = document.createElement("p");
  declaimerText.innerHTML = "Laboratoria, 2021";
  declaimerText.className = "declaimer-text";
  footer.appendChild(declaimerText);


  //Función que se detona con el click
  function clickhandler(clickedPokemon, cardImage) {
  console.log(clickedPokemon);
  cardImage.setAttribute("src", clickedPokemon.image);
  clicked.push(clickedPokemon);
  checkMatch(clicked);
  }

  // marcos e imágenes de las cartas.
  const drawGrid = function(duplicatedData) {
    console.log("drawGrid");
    cardsContainer.innerHTML = "";
    for (let i = 0; i < duplicatedData.length; i++) {
    let cardFrames = document.createElement("div");
    cardFrames.className = "card-frames";
    let cardImages = document.createElement("img");
    cardImages.setAttribute("src", "../images/back.jpg");
    cardImages.addEventListener("click", function(){
      clickhandler(duplicatedData[i], cardImages);
    });
    cardFrames.appendChild(cardImages);
    cardsContainer.appendChild(cardFrames);
    }
  }
  drawGrid(duplicatedData);

  // función que compara los pares de cartas cliqueadas.
  function checkMatch(arrr) {
    if (arrr.length > 2) {
      console.log("hay 2");
      if (arrr[0].id == arrr[1].id) {
        score += 100;
        numberScore.innerHTML = ": " + score;
        arrr.length = 0 ;
        alert("Match");
      } else {
        console.log("no son match");
        arrr.length = 0;
  //Que las cartas no compatibles vuelvan a su posición original
        alert("No Match");
      }
      drawGrid(duplicatedData);
    }
  }

  return generalContainer;
};

export default App;