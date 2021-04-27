/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const VALUES = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
const SUITS = ["♥", "♠", "♦", "♣"];

const CARDS_NUMBER = document.querySelector("#numberOfCards");
const DRAW = document.querySelector("#drawCards");
const SECTION_TO_DRAW = document.querySelector("#drawnCards");

window.onload = function() {
  getCards();
};

const getCards = () => {
  DRAW.addEventListener("click", event => {
    event.preventDefault();
    for (let index = 0; index < CARDS_NUMBER.value; index++) {
      drawCard(generateCard());
    }
  });
};

const generateCard = () => {
  let card = {
    value: VALUES[getRandom(VALUES.length)],
    suit: SUITS[getRandom(SUITS.length)]
  };

  return card;
};

const getRandom = maxValue => {
  return Math.floor(Math.random() * maxValue);
};

const drawCard = card => {
  let cardBody = document.createElement("div");
  cardBody.classList.add("card");

  let firstSuitContainer = document.createElement("div");
  let firstSuit = document.createTextNode(card.suit);
  firstSuitContainer.appendChild(firstSuit);

  let valueContainer = document.createElement("div");
  let value = document.createTextNode(card.value);
  valueContainer.appendChild(value);

  let secondSuitContainer = document.createElement("div");
  let secondSuit = document.createTextNode(card.suit);
  secondSuitContainer.appendChild(secondSuit);

  cardBody.appendChild(firstSuitContainer);
  cardBody.appendChild(valueContainer);
  cardBody.appendChild(secondSuitContainer);
  SECTION_TO_DRAW.appendChild(cardBody);
};
