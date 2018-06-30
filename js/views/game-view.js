import headerTemplate from "../page-parts/header";
import AbstractView from "./abstract-view";
import gameState from "../data/main-data";
import specifiScreen from "../logic/game-screen-render";
import footer from "../page-parts/footer";
import gameAnswers from "../page-parts/answers-list";
import {gameSets} from "../data/game-sets";
import {clearInputs, main} from "../logic/utils";
import StatsView from "./stats-view";
import getBack from '../logic/get-back-to-start-btn';
class GameView extends AbstractView {
  constructor() {
    super();
    this._template = () => {
      return `
        <header class="header">${headerTemplate.game(gameState)}</header>
        <div class="game">
            <p class="game__task">${specifiScreen(gameState.screen).header}</p>
            ${specifiScreen(gameState.screen).markup}
            <div class="stats">
                <ul class="stats">
                 ${gameAnswers(gameState.answers)}
                </ul>
            </div>
        </div>
        ${footer}`;
    };
  }
  bind() {
    const element = this.element;
    const screen = gameSets[gameState.screen];
    getBack(element);
    const imagesArray = Array.from(element.querySelectorAll(`.game__option`));
    const radiobuttons = Array.from(
        element.querySelectorAll(`input[type="radio"]`)
    );
    const screenAnswer = screen.gameAnswers;

    switch (screen.gameType) {
      case `one`:
        radiobuttons.forEach((item) => {
          item.addEventListener(`change`, () => {
            if (item.checked) {
              writeAnswer(screenAnswer[0] === item.value);

              clearInputs(element);
              gameState.nextScreen();
              renderGameScreen();
            }
          });
        });
        break;
      case `two`:
        radiobuttons.forEach((item, i, array) => {
          item.addEventListener(`change`, () => {
            const gameOne = array[0].checked || array[1].checked;
            const gameTwo = array[2].checked || array[3].checked;
            const gameOneRight =
              (array[0].checked && array[0].value === screenAnswer[0]) ||
              (array[1].checked && array[1].value === screenAnswer[0]);
            const gameTwoRight =
              (array[2].checked && array[2].value === screenAnswer[1]) ||
              (array[3].checked && array[3].value === screenAnswer[1]);
            if (gameOne && gameTwo) {
              writeAnswer(gameTwoRight && gameOneRight);

              clearInputs(element);
              gameState.nextScreen();
              renderGameScreen();
            }
          });
        });
        break;
      case `three`:
        imagesArray.forEach((item, i) => {
          item.setAttribute(`data-answer`, screenAnswer[i]);
          item.addEventListener(`click`, (event) => {
            writeAnswer(event.target.getAttribute(`data-answer`) === `paint`);
            clearInputs(element);
            gameState.nextScreen();
            renderGameScreen();
          });
        });
    }
  }
}

const gameScreen = new GameView();

const renderStats = () => {
  const screen = new StatsView();
  main.innerHTML = ``;
  main.appendChild(screen.element);
};
const writeAnswer = (answer = false, time = 15) => {
  gameState.answers.push({answer, time});
  if (answer === false) {
    gameState.liveLoss();
  }
};
const renderGameScreen = () => {
  if (gameState.answers.length === 10 || gameState.lives < 1) {
    renderStats();
    return;
  }
  const screen = new GameView();
  main.innerHTML = ``;
  main.appendChild(screen.element);
};
export default gameScreen;
