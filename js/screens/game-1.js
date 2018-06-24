import gameState from '../data/main-data';
import {createScreen} from '../logic/utils';
import gameAnswers from '../page-parts/answers-list';
import footer from '../page-parts/footer';
import headerTemplate from '../page-parts/header';
import initButtons from '../logic/game-controls';

import getBack from '../logic/get-back-to-start-btn';
import renderStats from './stats';

const screenGameOne = createScreen(`
<header class="header">
${headerTemplate.game(gameState)}
</header>
<div class="game">
</div>
${footer}`);


const renderGameScreen = (screen) => {
  if (gameState === 9) {
    renderStats();
    return;
  }
  const pageHeader = screenGameOne.querySelector(`.header`);
  pageHeader.innerHTML = headerTemplate.game(gameState);

  const gameWrapper = screenGameOne.querySelector(`.game`);
  gameWrapper.innerHTML = ``;

  const gameHeader = document.createElement(`p`);
  gameHeader.innerText = screen.header;

  gameWrapper.appendChild(gameHeader);
  const elementScreen = document.createElement(`div`);

  elementScreen.innerHTML = screen.markup;
  gameWrapper.appendChild(elementScreen);

  ((answersMarkup) => {
    const pageStats = document.createElement(`div`);
    pageStats.classList.add(`stats`);

    const pageStatsList = document.createElement(`ul`);
    pageStatsList.classList.add(`stats`);

    pageStatsList.innerHTML = answersMarkup;
    pageStats.appendChild(pageStatsList);
    gameWrapper.appendChild(pageStats);
  })(gameAnswers(gameState.answers));
  initButtons(gameState.screen);
  getBack(`button.back`, screenGameOne);
};


export {screenGameOne, renderGameScreen};
