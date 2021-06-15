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

  // elemento que muestra el contador.
  const parrafo = document.createElement("p");
  parrafo.className = "parrafo";
  parrafo.innerHTML = "Puntaje";
  main.appendChild(parrafo);
  const scoreboard = document.createElement("span");
  scoreboard.className = "score"
  parrafo.appendChild(scoreboard);

  // marcos e imágenes de las cartas.
  for (let i = 0; i < duplicatedData.length; i++) {
    let cardFrames = document.createElement("div");
    cardFrames.className = "card-frames";
    let cardImages = document.createElement("img");
    cardImages.setAttribute("src", "../images/back.jpg");
    cardImages.addEventListener("click", function() {
      cardImages.setAttribute("src", duplicatedData[i].image);
      clicked.push(duplicatedData[i]);
      checkMatch(clicked);
    });
    cardFrames.appendChild(cardImages);
    cardsContainer.appendChild(cardFrames);
  }

  // función que compara los pares de cartas cliqueadas.
  function checkMatch(arrr) {
    if (arrr.length == 2) {
      if (arrr[0].id == arrr[1].id) {
        score += 100;
        scoreboard.innerHTML = ": " + score;
        arrr.length = 0 ;
        alert("Match");
      } else {
        arrr.length = 0;
        alert("No Match");
      }
    }
  }

  return generalContainer;
};

export default App;