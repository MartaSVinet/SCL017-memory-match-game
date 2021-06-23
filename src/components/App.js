import pokemon from '../data/pokemon/pokemon.js';

// array de ítems (objetos).
const preData = pokemon.items;

// array de ítems duplicados.
const data = preData.concat(preData);

// función para barajar data.
function shuffle(array) {
  for(let i = array.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
  }
}
shuffle(data);

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

  // marcos e imágenes de las cartas.
  const drawGrid = function() {
    cardsContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      let cardFrames = document.createElement("div");
      cardFrames.className = "card-frames";
      let cardImages = document.createElement("img");
      cardImages.className = "card-images";
      cardImages.setAttribute("src", "../images/back.jpg");
      cardImages.addEventListener("click", function() {
        clickhandler(data[i], cardImages);
      });
      if (data[i].matched) {
        cardImages.setAttribute("src", data[i].image);
      }
      cardFrames.appendChild(cardImages);
      cardsContainer.appendChild(cardFrames);
    }
  }
  drawGrid();

  //Función que se detona con el click
  function clickhandler(objectOfData, imageElement) {
    imageElement.setAttribute("src", objectOfData.image); // al hacer click en el elemento imagen se le da de fuente el key:value imagen del item en el array data.
    if (objectOfData.matched) {
      return false; // esto impide que las cartas ya emparejadas puedan cliquearse de nuevo y sumar más puntaje.
    }
    clicked.push(objectOfData); // empujamos el objeto cliqueado al array clicked.
    setTimeout(function() {
      checkMatch(clicked);
    }, 1200);
  }

  // función que compara los pares de cartas cliqueadas.
  function checkMatch(arrayOfClicked) {
    if (arrayOfClicked.length == 2) {
      if (arrayOfClicked[0].id == arrayOfClicked[1].id) {
        score += 100;
        numberScore.innerHTML = ": " + score;
        arrayOfClicked[0].matched = true;
        arrayOfClicked[1].matched = true;
        arrayOfClicked.length = 0 ;
      } else {
        arrayOfClicked.length = 0;
      }
      drawGrid();
    }
  }

  return generalContainer;
};

export default App;