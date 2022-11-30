/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
};
window.onload = function() {
  let suitTop = document.querySelector(".suit-top");
  let suitBottom = document.querySelector(".suit-bottom");
  let cardValue = document.querySelector(".card-value");

  let cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suitValues = ["♠", "♦", "♥", "♣"];

  function generateRandomValues() {
    const generatedRandomSuit = Math.floor(Math.random() * suitValues.length);

    suitTop.textContent = `${suitValues[generatedRandomSuit]}`;
    suitBottom.textContent = `${suitValues[generatedRandomSuit]}`;

    const generatedRandomValue = Math.floor(Math.random() * cardValues.length);
    cardValue.textContent = `${cardValues[generatedRandomValue]}`;

    if (generatedRandomSuit % 2 === 0) {
      suitBottom.classList.add("black");
      suitTop.classList.add("black");
    } else {
      suitBottom.classList.add("red");
      suitTop.classList.add("red");
      suitBottom.classList.remove("black");
      suitTop.classList.remove("black");
    }
  }
  generateRandomValues();
};
