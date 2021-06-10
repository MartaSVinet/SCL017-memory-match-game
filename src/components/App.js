import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

// array de ítems (objetos).
const dataItems = pokemon.items;
console.log(dataItems);

// array de ítems duplicados.
const duplicatedData = dataItems.concat(dataItems);
console.log(duplicatedData);

// función para barajar duplicatedData.
function shuffle(array) {
  for(let i = array.length -1 ; i > 0 ;i--) {
    let j = Math.floor( Math.random() * (i + 1) );
    [array[i] ,array[j]] = [array[j], array[i]];
  }
}    
shuffle(duplicatedData);

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
  titleImage.setAttribute("src","");
  title.appendChild(titleImage);
  header.appendChild(title);

  // grilla de cartas.
  let cardsContainer = document.createElement("section");
  cardsContainer.className = "cards-container";
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