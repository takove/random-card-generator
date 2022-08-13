/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let iconsArr = ["♦", "♥", "♠", "♣"];
let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let lettersArr = ["K", "Q", "J", "A"];
let numbersAndLettersArr = numbersArr.concat(lettersArr);
function random(iconParameter) {
  let random = Math.floor(Math.random(iconParameter) * iconParameter.length);
  return random;
}
let iconRandom = iconsArr[random(iconsArr)];
let randomNumbersAndLetters =
  numbersAndLettersArr[random(numbersAndLettersArr)];
console.log(randomNumbersAndLetters);

const icons = document.querySelectorAll(".icon");
console.log(icons);

window.onload = function() {
  const iconTop = document.querySelector(".topicon");
  const iconBottom = document.querySelector(".bottomicon");
  const iconNumberAndLetters = document.querySelector(".number-and-letters");
  iconTop.innerHTML = iconRandom;
  iconBottom.innerHTML = iconRandom;
  iconNumberAndLetters.innerHTML = randomNumbersAndLetters;

  if (iconRandom === "♦" || iconRandom === "♥") {
    icons.forEach((icon, index) => {
      icon.classList.add("red");
    });
  }
};
