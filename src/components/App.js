import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

// array de ítems (objetos).
const dataItems = pokemon.items;
console.log(dataItems);

// array de ítems duplicados.
const duplicatedData = dataItems.concat(dataItems);
console.log(duplicatedData);

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
  title.textContent = "Memorama";
  header.appendChild(title);

  // grilla de cartas.
  let cardsContainer = document.createElement("section");
  main.appendChild(cardsContainer);

  // marcos e imágenes de las cartas.
  for (let i = 0; i < duplicatedData.length; i++) {
    let cardFrames = document.createElement("div");
    cardFrames.className = "card-frames";
    let cardImages = document.createElement("img");
    cardImages.setAttribute("src", "../images/back.jpg");
    cardImages.addEventListener("click", function() {
      cardImages.setAttribute("src", duplicatedData[i].image);
    });
    cardFrames.appendChild(cardImages);
    cardsContainer.appendChild(cardFrames);
  }

  return generalContainer;
};

export default App;