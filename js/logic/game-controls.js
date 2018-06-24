import gameState from '../data/main-data';
import {gameSets} from '../data/game-sets';
import specifiScreen from '../logic/game-screen-render';
import {clearInputs} from '../logic/utils';
import {screenGameOne, renderGameScreen} from '../screens/game-1';
import renderStats from '../screens/stats';
const writeAnswer = (answer = false, time = 15) => {
  gameState.answers.push({answer, time});
  if (answer === false) {
    gameState.liveLoss();
    if (gameState.lives < 1) {

      clearInputs(screenGameOne);
      renderStats();
    }

  }


};
const checkGame = () => {
  if (gameState.screen === 9) {
    clearInputs(screenGameOne);
    renderStats();
  }
};


const initButtons = (screenNumber) => {
  const screen = gameSets[screenNumber];
  const imagesArray = Array.from(screenGameOne.querySelectorAll(`.game__option`));
  const radiobuttons = Array.from(screenGameOne.querySelectorAll(`input[type="radio"]`));
  const screenAnswer = screen.gameAnswers;
  switch (screen.gameType) {
    case `one`:


      radiobuttons.forEach((item) => {
        item.addEventListener(`change`, () => {
          if (item.checked) {

            if (screenAnswer[0] === item.value) {
              writeAnswer(true);
            } else {
              writeAnswer(false);
            }
            checkGame();
            clearInputs(screenGameOne);
            gameState.nextScreen();
            renderGameScreen(specifiScreen(gameState.screen));
          }
        });
      });
      break;
    case `two`:
      radiobuttons.forEach((item, i, array) => {
        item.addEventListener(`change`, () => {
          const gameOne = array[0].checked || array[1].checked;
          const gameTwo = array[2].checked || array[3].checked;
          const gameOneRight = array[0].checked && array[0].value === screenAnswer[0] || array[1].checked && array[1].value === screenAnswer[0];
          const gameTwoRight = array[2].checked && array[2].value === screenAnswer[1] || array[3].checked && array[3].value === screenAnswer[1];
          if (gameOne && gameTwo) {

            if (gameTwoRight && gameOneRight) {
              writeAnswer(true);
            } else {
              writeAnswer(false);
            }
            checkGame();
            clearInputs(screenGameOne);
            gameState.nextScreen();
            renderGameScreen(specifiScreen(gameState.screen));
          }
        });
      });
      break;
    case `three`:
      imagesArray.forEach((item, i) => {
        item.setAttribute(`data-answer`, screenAnswer[i]);
        item.addEventListener(`click`, (event) => {
          if (event.target.getAttribute(`data-answer`) === `paint`) {
            writeAnswer(true);
          } else {
            writeAnswer(false);
          }
          checkGame();
          clearInputs(screenGameOne);
          gameState.nextScreen();
          renderGameScreen(specifiScreen(gameState.screen));
        });
      });
  }
};
export default initButtons;


