//task 2
const main = document.querySelector(`main.central`);
const tamplatesArray = Array.prototype.slice.call(
  document.querySelectorAll(`body template`)
);
//task 3
let currentScreen = 0;
const showScreen = (incriment = 0) => {
  if (currentScreen < 0) {
    currentScreen = 0;

    return;
  }

  main.innerHTML = tamplatesArray[currentScreen].innerHTML;
};

showScreen();
// task 4
document.addEventListener(`keydown`, event => {
  switch (event.code) {
    case `ArrowRight`:
      currentScreen++;
      break;
    case `ArrowLeft`:
      currentScreen--;
  }
  showScreen();
});

// task 5
const arrowRight = `->`;
const arrowLeft = `<-`;

const arrowWrapper = document.createElement(`div`);
arrowWrapper.className = `arrows__wrap`;
arrowWrapper.innerHTML = `  <style>
    .arrows__wrap {
    position: absolute;
    top: 95px;
    left: 50%;
    margin-left: -56px;
    }
    .arrows__btn {
    background: none;
    border: 2px solid black;
    padding: 5px 20px;
    }
    </style>
    <button class="arrows__btn">${arrowLeft}</button>
    <button class="arrows__btn">${arrowRight}</button>`;
document.body.appendChild(arrowWrapper);
document.addEventListener(`click`, event => {
  switch (event.target.innerText) {
    case arrowRight:
      currentScreen++;
      break;
    case arrowLeft:
      currentScreen--;
  }
  showScreen();
});
