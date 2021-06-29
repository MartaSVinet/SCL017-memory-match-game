import pokemon from '../data/pokemon/pokemon.js';

const preData = pokemon.items;

const data = preData.concat(preData);

const shuffle = function(array) {
  for(let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temporary = array[i];
    array[i] = array[j];
    array[j] = temporary;
  }
  return array;
}

shuffle(data);

const clicked = [];

let score = 0;

const App = () => {
  const generalContainer = document.createElement("div");
  const header = document.createElement("header");
  generalContainer.appendChild(header);
  const main = document.createElement("main");
  generalContainer.appendChild(main);
  const footer = document.createElement("footer");
  generalContainer.appendChild(footer);

  const title = document.createElement("h1");
  const titleImage = document.createElement("img");
  titleImage.className = "title-image";
  titleImage.setAttribute("src", "images/title.png");
  title.appendChild(titleImage);
  header.appendChild(title);

 const cardsContainer = document.createElement("section");
  cardsContainer.className = "cards-container";
  main.appendChild(cardsContainer);

  const scoreboard = document.createElement("section");
  scoreboard.className = "score-board";
  const textScore = document.createElement("p");
  textScore.innerHTML = "Score:";
  textScore.className = "text-score";
  const numberScore = document.createElement("span");
  textScore.appendChild(numberScore);
  scoreboard.appendChild(textScore);
  main.appendChild(scoreboard);

  const replayBoard = document.createElement("section");
  replayBoard.className = "replay-board";
  const replayButton = document.createElement("button");
  replayButton.innerHTML = "Play Again";
  replayButton.className = "replay-button";
  replayButton.addEventListener("click", function() {
    location.reload();
  })
  replayBoard.appendChild(replayButton);
  main.appendChild(replayBoard);

  const declaimerText = document.createElement("p");
  declaimerText.innerHTML = "Laboratoria, 2021";
  declaimerText.className = "declaimer-text";
  footer.appendChild(declaimerText);

  const drawGridContent = function() {
    cardsContainer.innerHTML = "";
    for (let i = 0; i < data.length; i++) {
      const cardFrames = document.createElement("div");
      cardFrames.className = "card-frames";
      const cardImages = document.createElement("img");
            cardImages.setAttribute("src", "images/back.jpg");
            cardImages.className = "card-back";
      if (data[i].matched) {
        cardImages.setAttribute("src", data[i].image);
        
      }
      cardImages.addEventListener("click", function() {
        cardImages.className = "card-images";
        setTimeout(function() {
          clickhandler(data[i], cardImages);
        }, 400);        
      });
      cardFrames.appendChild(cardImages);
      cardsContainer.appendChild(cardFrames);
    }
  }
  drawGridContent();

  const clickhandler = function(objectOfData, imageElement) {
    imageElement.setAttribute("src", objectOfData.image);
    if (objectOfData.matched) {
      return false;
    }
    clicked.push(objectOfData);
    setTimeout(function() {
      checkMatch(clicked);
    }, 1200);
  }

  const checkMatch = function(arrayOfClicked) {
    if (arrayOfClicked.length == 2 && arrayOfClicked[0].id == arrayOfClicked[1].id) {
      score += 100;
      numberScore.innerHTML = score;
      if (score == 900) {
        textScore.innerHTML = "Congrats! You've caught them all!"
      }
      arrayOfClicked[0].matched = true;
      arrayOfClicked[1].matched = true;
      arrayOfClicked.length = 0;
    } else if (arrayOfClicked.length == 2 && arrayOfClicked[0].id !== arrayOfClicked[1].id) {
      arrayOfClicked.length = 0;
      drawGridContent();
    }
  }

  return generalContainer;
};

export default App;