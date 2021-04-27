/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];

const CARDS_NUMBER = document.querySelector("#numberOfCards");
const DRAW = document.querySelector("#drawCards");
const SECTION_TO_DRAW = document.querySelector("#drawnCardsContainer");

window.onload = function() {
  getCards();
  //   bubbleSort();
  //   selectSort();
};

const getCards = () => {
  DRAW.addEventListener("click", event => {
    //clicko en el botón draw
    event.preventDefault(); //evito recarga pagina
    SECTION_TO_DRAW.innerHTML = "";
    for (let index = 0; index < CARDS_NUMBER.value; index++) {
      //bucle que genera de 0 a las cartas indicadas en el input
      drawCard(generateCard); //generateCard no se ejecuta porque no tiene los ()
    }
  });
};

const generateCard = () => {
  //declaro la funcion
  const card = {
    value: VALUES[generateRandom(VALUES.length)],
    suit: SUITS[generateRandom(SUITS.length)]
  };
  return card;
};

const generateRandom = maxNumber => {
  //maxNumber = VALUES.length // maxNumber = SUITS.length
  return Math.floor(Math.random() * maxNumber);
};

const drawCard = card => {
  //card = al CODIGO que hay dentro de generateCard
  let card_to_draw = card(); //se ejecuta generateCard

  let cardBody = document.createElement("div");
  cardBody.classList.add("card");

  let firstSuitContainer = document.createElement("div");
  let firstSuit = document.createTextNode(card_to_draw.suit);
  firstSuitContainer.appendChild(firstSuit);
  firstSuitContainer.classList.add("align-start");

  let valueContainer = document.createElement("div");
  let value = document.createTextNode(card_to_draw.value);
  valueContainer.appendChild(value);

  let secondSuitContainer = document.createElement("div");
  let secondSuit = document.createTextNode(card_to_draw.suit);
  secondSuitContainer.appendChild(secondSuit);
  secondSuitContainer.classList.add("align-end");

  if (card_to_draw.suit == "♥" || card_to_draw.suit == "♦") {
    firstSuitContainer.classList.add("red");
    secondSuitContainer.classList.add("red");
  } else {
    firstSuitContainer.classList.add("black");
    secondSuitContainer.classList.add("black");
  }

  cardBody.appendChild(firstSuitContainer);
  cardBody.appendChild(valueContainer);
  cardBody.appendChild(secondSuitContainer);
  SECTION_TO_DRAW.appendChild(cardBody);
};
