import pokemon from '../data/pokemon/pokemon.js';
console.log(pokemon);

// array de ítems (objetos).
const data = pokemon.items;
console.log(data);

const App = () => {
  // se crea estructura general html.
  const generalContainer = document.createElement("div");
  const header = document.createElement("header");
  generalContainer.appendChild(header);
  const main = document.createElement("main");
  generalContainer.appendChild(main);
  const footer = document.createElement("footer");
  generalContainer.appendChild(footer);

  // se crean los elementos hijos del elemento header.
  const title = document.createElement("h1");
  title.innerHTML = "<img src='../images/title.jpg'>";
  header.appendChild(title);

  // se crean los elementos hijos del elemento main.
  let gameContainer = document.createElement("section");
  main.appendChild(gameContainer);

  return generalContainer;
};

export default App;